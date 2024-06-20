import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/outlined-icon-button.js';

@customElement('app-header')
export class AppHeader extends LitElement {

  static styles = css`
    header {
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    a {
      text-decoration: none;
      color: #000000;
    }

    .right {
      position: absolute;
      right: 0;
    }
  `;

  render() {
    return html`
      <header>
        <div class="header-content">
          <h1><a href="#!/">Simple Note</a></h1>
          <md-outlined-icon-button
            class="right"
            aria-label="Toggle language"
            @click=${() => this._toogleLanguage()}
          >
            <md-icon>language</md-icon>
          </md-outlined-icon-button>
        </div>
      </header>
    `;
  }

  _toogleLanguage() {
    console.log('Toggle language');
  }
}
