import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class SignInPermission {
  constructor(private cookieService: CookieService) {}

  canActivate() {
    const isLogged = !!this.cookieService.get("AccessToken");

    if (isLogged) {
      return true;
    }

    return false;
  }
}

export const SignInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SignInPermission).canActivate();
};
