import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const instructorGuard: CanActivateFn = (route, state) => {


  const _Router = inject(Router)

  if (localStorage.getItem('token') !== null && localStorage.getItem('role') == 'Instructor') {
    return true;
  } else {
    _Router.navigate(['/auth/login'])
    return false;
  }
};
