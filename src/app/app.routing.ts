import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { ViewportafolioComponent } from './components/viewportafolio/viewportafolio.component';

const appRoutes:Routes=[
	{path:'',component:ViewportafolioComponent},
	{path:'portafolio',component:ViewportafolioComponent},
	{path: '**', component: ViewportafolioComponent }
];

export const appRoutingProviders:any[]=[];
export const Routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);