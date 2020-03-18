import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {FirstComponentComponent} from './first-component/first-component.component'
import {SecondComponent} from './second/second.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {ChildComponent} from './child/child.component'
import { FirstComponentCanActivateGuard } from './first-component-can-activate.guard';
import { ComponentCanDeactivateGuard } from './component-can-deactivate.guard';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  {path: "", redirectTo: "/first", pathMatch: 'full'},
  {
    path: "first",
    children : [
      {path : "", component: FirstComponentComponent},
      { 
        path: "child",
        component: ChildComponent,
        canActivate: [FirstComponentCanActivateGuard],
        canDeactivate : [ComponentCanDeactivateGuard]
      },
      {path:"extra", component: ExtraComponent}
    ]
  },
  {path:"second", component: SecondComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routeComponents = [FirstComponentComponent,SecondComponent, PageNotFoundComponent, ChildComponent]