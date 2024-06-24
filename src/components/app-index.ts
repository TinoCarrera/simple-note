import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import './app-header.js';
import './app-footer.js';

startApp({
  routes,
  mainNode: 'app-content',
  viewLimit: 2,
  // @ts-ignore
  interceptor: function (navigation, ctx) {
    let intercept = false;
    let redirect;
    const user = localStorage.getItem('_user');
    // @ts-ignore
    if (!user && navigation.to.page !== 'login') {
      console.log('login');
      intercept = true;
      redirect = {page: 'login', params: {}};
    // @ts-ignore
    } else if (user && navigation.to.page === 'login') {
      console.log('home');
      intercept = true;
      redirect = {page: 'home', params: {}};
    }
    return {intercept, redirect};
  },
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
