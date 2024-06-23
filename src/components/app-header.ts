import { LitElement, html, css, nothing } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { LocalizeMixin, setLang } from '@open-cells/localize';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

// @ts-ignore
@customElement('app-header')
export class AppHeader extends LocalizeMixin(LitElement) {
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

    this.pageController.subscribe('__oc_app', (appContext: any) => {
      this._home = appContext.value.currentPage === 'home' ? true : false;
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
                  @click="${() => this.pageController.navigate('home')}"
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
    setLang(this._intlConfig.lang === 'en' ? 'es' : 'en');
  }
}
