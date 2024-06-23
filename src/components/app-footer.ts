import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = css`
    footer {
      display: flex;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <footer>
        <p>&copy; 2024 Florentino Carrera</p>
      </footer>
    `;
  }
}
