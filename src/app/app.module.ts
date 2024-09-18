import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopInfoComponent } from './components/top-info/top-info.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SendEmailComponent } from './pages/send-email/send-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AreasComponent } from './components/areas/areas.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AreasPageComponent } from './pages/areas-page/areas-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TopInfoComponent,
    FooterComponent,
    ContactComponent,
    SendEmailComponent,
    CarouselComponent,
    AreasComponent,
    WhatsappComponent,
    AreasPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    ClipboardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
