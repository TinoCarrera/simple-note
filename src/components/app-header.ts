import { LitElement, html, css, nothing } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';
import { LocalizeMixin, setLang } from '@open-cells/localize';
import '@material/web/icon/icon.js';
import '@material/web/button/text-button.js';

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
  protected _backToHome: Boolean = false;

  connectedCallback() {
    super.connectedCallback();

    this.pageController.subscribe('__oc_app', (appContext: any) => {
      this._backToHome = appContext.value.currentPage === 'task' ? true : false;
    });
  }

  render() {
    return html`
      <header>
        <div class="header-content">
          ${this._backToHome
            ? html`
                <md-icon-button
                  class="left"
                  aria-label="Back to home"
                  @click="${() => this.pageController.navigate('home')}"
                >
                  <md-icon>arrow_back</md-icon>
                </md-icon-button>
              `
            : nothing}

          <h4><a href="#!/">Simple Note</a></h4>

          <md-text-button
            class="right"
            aria-label="Toggle language"
            trailing-icon
            @click="${() => this._toogleLanguage()}"
          >
            ${this._intlConfig?.lang}
            <md-icon slot="icon">language</md-icon>
          </md-text-button>
        </div>
      </header>
    `;
  }

  _toogleLanguage() {
    setLang(this._intlConfig.lang === 'en' ? 'es' : 'en');
  }
}
