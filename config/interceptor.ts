import { NavigationWithParams } from '@open-cells/core/types';

export const interceptor = (navigation: NavigationWithParams) => {
  let intercept = false;
  let redirect;

  const user = localStorage.getItem('_user');

  if (!user && navigation.to?.page !== 'login') {
    intercept = true;
    redirect = {page: 'login', params: {}};
  } else if (user && navigation.to?.page === 'login') {
    intercept = true;
    redirect = {page: 'home', params: {}};
  }

  return {intercept, redirect};
}
