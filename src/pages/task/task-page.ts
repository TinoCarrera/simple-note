import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LocalizeMixin } from '@open-cells/localize';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

// @ts-ignore
@customElement('task-page')
export class TaskPage extends LocalizeMixin(LitElement) {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  render() {
    return html`
      <form class="form">
        <md-outlined-select>
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

        <md-outlined-text-field label="${this.t('title-label')}">
        </md-outlined-text-field>

        <md-outlined-text-field
          label="${this.t('description-label')}"
          type="textarea"
          rows="10"
        >
        </md-outlined-text-field>

        <md-outlined-text-field label="${this.t('tag-label')}">
        </md-outlined-text-field>

        <md-filled-button @click="${() => this._onSubmit()}">
          ${this.t('submit-button')}
        </md-filled-button>
      </form>
    `;
  }

  _onSubmit() {
    console.log('_onSubmit');
  }
}
