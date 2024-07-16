import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', 
    component: HomeComponent,
    // children: [
    // { path: 'app-send-email', component: SendEmailComponent }
    //   otras rutas hijas aquí
    // ]
  },
  { path: 'app-send-email', component: SendEmailComponent }
  // Otras rutas principales aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

