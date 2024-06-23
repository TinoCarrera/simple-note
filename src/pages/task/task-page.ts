import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

@customElement('task-page')
export class TaskPage extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <form class="form">
        <md-outlined-select>
          <md-select-option aria-label="blank" selected>
            <div slot="headline">Selecciona el tipo</div>
          </md-select-option>
          <md-select-option value="0">
            <div slot="headline">Mantenimiento</div>
          </md-select-option>
          <md-select-option value="1">
            <div slot="headline">Limpieza</div>
          </md-select-option>
          <md-select-option value="2">
            <div slot="headline">Recados</div>
          </md-select-option>
        </md-outlined-select>

        <md-outlined-text-field label="Título">
        </md-outlined-text-field>

        <md-outlined-text-field label="Descripción" type="textarea" rows="10">
        </md-outlined-text-field>

        <md-outlined-text-field label='Etiquetas (separadas por ";", max 2)'>
        </md-outlined-text-field>

        <md-filled-button @click="${() => this._onSubmit()}">
          Crear
        </md-filled-button>
      </form>
    `;
  }

  _onSubmit() {
    console.log('_onSubmit');
  }
}
