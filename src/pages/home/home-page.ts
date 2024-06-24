import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { getAllTasks, deleteTask } from '../../components/tasks';
import { map } from 'lit/directives/map.js';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/divider/divider.js';
import '@material/web/button/outlined-button.js';

@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @state()
  protected _tasks: Task[] | null = null;

  connectedCallback() {
    super.connectedCallback();

    this.pageController.subscribe('tasks', (data: Task[]) => {
      this._tasks = data;
    });
  }

  disconnectedCallback() {
    this.pageController.unsubscribe('tasks');
    super.disconnectedCallback();
  }

  async firstUpdated(props: any) {
    super.firstUpdated?.(props);

    if (!this._tasks) {
      const tasks = await getAllTasks();
      this.pageController.publish('tasks', tasks.reverse());
    }
  }

  render() {
    return html`
      <div class="scroller">
        ${map(
          this._tasks || [],
          item => html`
            <div class="card">
              <div class="card-body">
                <p>${item.title}</p>
                <p>${item.description}</p>
              </div>

              <md-divider></md-divider>

              <div class="card-footer">
                <md-outlined-button trailing-icon>
                  ${item.tags[0]}
                  <md-icon slot="icon">close</md-icon>
                </md-outlined-button>

                <div class="card-actions">
                  <md-icon-button
                    @click="${() => this._deleteTask(item.id!)}"
                  >
                    <md-icon>delete</md-icon>
                  </md-icon-button>

                  <md-icon-button
                    @click="${() => this._navigateToTaskEdit(item.id!)}"
                  >
                    <md-icon>edit</md-icon>
                  </md-icon-button>
                </div>
              </div>
            </div>
          `,
        )}
      </div>

      <md-fab
        class="md-fab-fixed"
        aria-label="Create task"
        @click="${() => this.pageController.navigate('task-add')}"
      >
        <md-icon slot="icon">add</md-icon>
      </md-fab>
    `;
  }

  async _deleteTask(id: string) {
    const response = await deleteTask(id);
    console.log(response);

    const tasks = await getAllTasks();
    this.pageController.publish('tasks', tasks.reverse());
  }

  _navigateToTaskEdit(id: string) {
    this.pageController.navigate('task-edit', { taskId: id })
  }
}
