import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { LocalizeMixin } from '@open-cells/localize';
import { createTask, getAllTasks } from '../../components/tasks';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

// @ts-ignore
@customElement('task-page')
export class TaskPage extends LocalizeMixin(LitElement) {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  @state()
  protected typeId: string | null = null;

  @state()
  protected title: string | null = null;

  @state()
  protected description: string | null = null;

  @state()
  protected tags: string | null = null;

  render() {
    return html`
      <form class="form">
        <md-outlined-select
          id="typeId"
          @change=${(ev: any) => this._handleInput(ev)}
        >
          <md-select-option aria-label="blank" selected>
            <div slot="headline">${this.t('type-label-0')}</div>
          </md-select-option>
          <md-select-option value="1">
            <div slot="headline">${this.t('type-label-1')}</div>
          </md-select-option>
          <md-select-option value="2">
            <div slot="headline">${this.t('type-label-2')}</div>
          </md-select-option>
          <md-select-option value="3">
            <div slot="headline">${this.t('type-label-3')}</div>
          </md-select-option>
        </md-outlined-select>

        <md-outlined-text-field
          label="${this.t('title-label')}"
          id="title"
          value="${this.title}"
          @change=${(ev: any) => this._handleInput(ev)}
        >
        </md-outlined-text-field>

        <md-outlined-text-field
          label="${this.t('description-label')}"
          type="textarea"
          rows="10"
          id="description"
          value="${this.description}"
          @change=${(ev: any) => this._handleInput(ev)}
        >
        </md-outlined-text-field>

        <md-outlined-text-field
          label="${this.t('tag-label')}"
          id="tags"
          value="${this.tags}"
          @change=${(ev: any) => this._handleInput(ev)}
        >
        </md-outlined-text-field>

        <md-filled-button @click="${() => this._onSubmit()}">
          ${this.t('submit-button')}
        </md-filled-button>
      </form>
    `;
  }

  _handleInput(ev: any) {
    let { id, value } = ev.target;
    this[id] = value;
  }

  async _onSubmit() {
    if (!this.typeId || !this.title || !this.description) return;

    let tags;
    if (this.tags) {
      tags = this.tags.split(';');
      const newTags = tags.map(e => e.trim())
      tags = newTags;
    }

    const data: Task = {
      typeId: this.typeId,
      title: this.title,
      description: this.description,
      tags: tags || [],
    }

    const response = await createTask(data);
    console.log(response);

    const tasks = await getAllTasks();
    this.pageController.publish('tasks', tasks.reverse());

    this.pageController.navigate('home');
  }
}
