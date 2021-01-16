import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { StorageService } from "../core/services/storage/storage.service";

@Injectable({
  providedIn: "root"
})
export class DasboardCanAvtivate implements CanActivate {
  constructor(private router: Router,
    private storage: StorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.storage.get("user");
    if (user) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }

}
