import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { getAllTasks } from '../../components/tasks';
import { map } from 'lit/directives/map.js';
import '@material/web/fab/fab.js';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
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
      this.pageController.publish('tasks', tasks);
    }
  }

  render() {
    return html`
      <div class="scroller">
        ${map(
          this._tasks || [],
          item => html`
            <div class="card">
              <p>${item.title}</p>
              <p>${item.description}</p>
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
