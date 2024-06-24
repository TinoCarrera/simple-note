import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { getAllTasks } from '../../components/tasks';
import { map } from 'lit/directives/map.js';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/divider/divider.js';

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
                <p>${item.tags[0]}</p>

                <div class="card-actions">
                  <md-icon-button>
                    <md-icon>delete</md-icon>
                  </md-icon-button>

                  <md-icon-button>
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
        @click="${() => this.pageController.navigate('task')}"
      >
        <md-icon slot="icon">add</md-icon>
      </md-fab>
    `;
  }
}
