import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

@customElement('app-header')
export class AppHeader extends LitElement {

  static styles = css`
    header {
      width: 100%;
      padding: 0 10px;
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
      color: var(--on-surface);
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
          <h4><a href="#!/">Simple Note</a></h4>
          <md-icon-button
            class="right"
            aria-label="Toggle language"
            @click=${() => this._toogleLanguage()}
          >
            <md-icon>language</md-icon>
          </md-icon-button>
        </div>
      </header>
    `;
  }

  _toogleLanguage() {
    console.log('Toggle language');
  }
}
