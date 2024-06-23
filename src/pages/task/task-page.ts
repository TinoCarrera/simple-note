import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';

@customElement('task-page')
export class TaskPage extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <form class="form">
        <md-outlined-text-field label="Título">
        </md-outlined-text-field>

        <md-outlined-text-field label="Descripción" type="textarea" rows="10">
        </md-outlined-text-field>

        <md-outlined-text-field label='Etiquetas (separadas por ";", max 2)'>
        </md-outlined-text-field>

        <md-filled-button>Crear</md-filled-button>
      </form>
    `;
  }
}
