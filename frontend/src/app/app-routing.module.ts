import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './components/home/home.component';
  import { AboutComponent } from './components/about/about.component';
  import { CollectionPointsComponent } from './collection-points/collection-points.component';
  import { ForecastComponent } from './components/forecast/forecast.component';

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'collection-points', component: CollectionPointsComponent },
    { path: 'forecast', component: ForecastComponent },
    { path: '**', redirectTo: '' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }