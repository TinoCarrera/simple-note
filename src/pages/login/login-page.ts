import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';
import { LocalizeMixin } from '@open-cells/localize';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';

// @ts-ignore
@customElement('login-page')
export class LoginPage extends LocalizeMixin(LitElement) {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  render() {
    return html`
      <div class="conta">
        <form class="form">
          <md-outlined-text-field label="${this.t('user-label')}">
          </md-outlined-text-field>

          <md-outlined-text-field label="${this.t('password-label')}">
          </md-outlined-text-field>

          <md-filled-button @click="${() => this._onSubmit()}">
            ${this.t('login-button')}
          </md-filled-button>
        </form>
      </div>
    `;
  }

  _onSubmit() {
    localStorage.setItem('_user', '123456789');
    this.pageController.navigate('home');
  }
}
