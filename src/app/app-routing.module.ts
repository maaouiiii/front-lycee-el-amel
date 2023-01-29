import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HomeComponent } from './pages/layout/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
    children: [
       {path: 'index', component: IndexComponent},
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
