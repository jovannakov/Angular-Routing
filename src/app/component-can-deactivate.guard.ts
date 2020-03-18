import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ChildComponent } from './child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentCanDeactivateGuard implements CanDeactivate<ChildComponent> {
  canDeactivate(component: ChildComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('data') == "jovan"){
      return confirm("Are you sure you want to go back?");
    }
    alert("change the data");
    return false;
  }
}
