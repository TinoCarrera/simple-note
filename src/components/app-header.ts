import { LitElement, html, css, nothing } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  pageController = new PageController(this);

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

    .left {
      position: absolute;
      left: 0;
    }
  `;

  @state()
  protected _home: Boolean = true;

  connectedCallback() {
    super.connectedCallback();

    this.pageController.subscribe('home', (data: Boolean) => {
      this._home = data;
    });
  }

  render() {
    return html`
      <header>
        <div class="header-content">
          ${this._home
            ? nothing
            : html`
                <md-icon-button
                  class="left"
                  aria-label="Back to home"
                  @click="${() => this._navigateToHome()}"
                >
                  <md-icon>arrow_back</md-icon>
                </md-icon-button>
              `}

          <h4><a href="#!/">Simple Note</a></h4>

          <md-icon-button
            class="right"
            aria-label="Toggle language"
            @click="${() => this._toogleLanguage()}"
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

  _navigateToHome() {
    this.pageController.publish('home', true);
    this.pageController.navigate('home');
  }
}
