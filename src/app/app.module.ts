import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/layout/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { EventsComponent } from './pages/events/events.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    HomeComponent,
    AboutComponent,
    TeachersComponent,
    EventsComponent,
    PricingComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
