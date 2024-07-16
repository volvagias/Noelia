import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopInfoComponent } from './components/top-info/top-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', 
    component: HomeComponent,
    children: [
    { path: 'top-info', component: TopInfoComponent }
    //   otras rutas hijas aquí
    ]
  },
  // Otras rutas principales aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

