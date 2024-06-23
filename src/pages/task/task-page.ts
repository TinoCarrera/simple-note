import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';

// @ts-ignore
@customElement('task-page')
export class TaskPage extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  render() {
    return html`
      <form class="form">
        <md-outlined-text-field label="Título">
        </md-outlined-text-field>
      </form>
    `;
  }
}
