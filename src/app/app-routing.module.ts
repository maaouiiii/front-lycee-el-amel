import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HomeComponent } from './pages/layout/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
       {path: 'index', component: IndexComponent},
       {path: 'about', component: AboutComponent},
       {path: 'teachers', component: TeachersComponent},
       {path: 'events', component: EventsComponent},
       {path: 'pricing', component: PricingComponent},
       {path: 'contact', component: ContactComponent},

       { path: '', redirectTo: 'index', pathMatch: 'full' },

]}, /*
    {path: '404', component: FooterComponent},
    { path: '**', redirectTo: '404' }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
