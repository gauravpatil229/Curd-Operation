import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path: 'features', component : FeaturesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
