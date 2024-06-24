import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { LocalizeMixin } from '@open-cells/localize';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

// @ts-ignore
@customElement('login-page')
export class LoginPage extends LocalizeMixin(LitElement) {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  @state()
  protected user: string | null = null;

  @state()
  protected password: string | null = null;

  @state()
  protected _showPassword: Boolean = false;

  render() {
    return html`
      <div class="login-container">
        <div class="login-form">
          <md-outlined-text-field
            label="${this.t('user-label')}"
            id="user"
            value="${this.user}"
            @change=${(ev: any) => this._handleInput(ev)}
          >
          </md-outlined-text-field>

          <md-outlined-text-field
            label="${this.t('password-label')}"
            type="${this._showPassword ? 'text' : 'password'}"
            id="password"
            value="${this.password}"
            @change=${(ev: any) => this._handleInput(ev)}
          >
            <md-icon-button
              toggle
              slot="trailing-icon"
              id="button-1"
              @click="${() => this._showPassword = !this._showPassword}"
            >
              <md-icon>visibility</md-icon>
              <md-icon slot="selected">visibility_off</md-icon>
            </md-icon-button>
          </md-outlined-text-field>

          <md-filled-button @click="${() => this._onSubmit()}">
            ${this.t('login-button')}
          </md-filled-button>
        </div>
      </div>
    `;
  }

  _onSubmit() {
    if (!this.user || !this.password) return;

    if (this.user.length < 4 || this.password.length < 9) return;

    console.log(this.user);
    console.log(this.password);

    localStorage.setItem('_user', '123456789');
    this.pageController.navigate('home');
  }

  _handleInput(ev: any) {
    let { id, value } = ev.target;
    this[id] = value;
  }
}
