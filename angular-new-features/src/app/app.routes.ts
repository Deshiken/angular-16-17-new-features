import {CanActivateFn, Router, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {SignalsComponent} from "./signals/signals.component";
import {NewTemplateControlComponent} from "./new-template-control/new-template-control.component";
import {FunctionalRouteGuardsComponent} from "./functional-route-guards/functional-route-guards.component";
import {DeferrableViewsComponent} from "./deferrable-views/deferrable-views.component";
import {OptimizedImagesComponent} from "./optimized-images/optimized-images.component";
import {SecurityService} from "./services/security-service.service";
import {inject} from "@angular/core";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: 'new-template-control',
    component: NewTemplateControlComponent,
  },
  {
    path: 'functional-route-guards',
    component: FunctionalRouteGuardsComponent,
    canDeactivate: [
      // Example of using the components variables to determine the status of a route guard
      (component: FunctionalRouteGuardsComponent) => component.canNavigateAway()
    ],
    canActivate: [
      adminGuard('/not-authorized')
    ]
  },
  {
    path: 'not-authorized',
    component: NotAuthorizedComponent,
  },
  {
    path: 'deferrable-views',
    component: DeferrableViewsComponent,
  },
  {
    path: 'optimized-images',
    component: OptimizedImagesComponent,
  },
];

// Example of a route guard that can be reused for multiple routes. This guard also takes in a parameter.
export function adminGuard(
  redirectRoute: string
): CanActivateFn {
  return () => {
    const securityService: SecurityService = inject(SecurityService);
    const router: Router = inject(Router);

    // Returning a urlTree will cause the user to be redirected to the appropriate page.
    // if (securityService.isAdmin) {
    //   return true;
    // } else {
    //   router.createUrlTree([redirectRoute])
    //   return false;
    // }
    return securityService.isAdmin || router.createUrlTree([redirectRoute]);
  };
}
