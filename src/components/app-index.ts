import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import { interceptor } from '../../config/interceptor.js';
import './app-header.js';
import './app-footer.js';

startApp({
  routes,
  mainNode: 'app-content',
  viewLimit: 2,
  persistentPages: ['home'],
  // @ts-ignore
  interceptor,
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  static styles = styles;

  render() {
    return html`
      <app-header></app-header>
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
      <app-footer></app-footer>
    `;
  }
}
