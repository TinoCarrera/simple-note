import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';

@customElement('login-page')
export class LoginPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <button @click="${() => this._onSubmit()}">Login</button>
    `;
  }

  _onSubmit() {
    localStorage.setItem('_user', '123456789');
    this.pageController.navigate('home');
  }
}
