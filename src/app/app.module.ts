import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumaniticsComponent } from './humanitics/humanitics.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { UseradComponent } from './userad/userad.component';
import { NomineedComponent } from './nomineed/nomineed.component';
import { EduComponent } from './edu/edu.component';
import { SubmitComponent } from './submit/submit.component';
import { HeaderComponent } from './shared/header/header.component';
import { NextComponent } from './about-us/next/next.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CartComponent } from './services/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HumaniticsComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactComponent,
    SignupComponent,
    UseradComponent,
    NomineedComponent,
    EduComponent,
    SubmitComponent,
    HeaderComponent,
    NextComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'HumaniticsComponent', component:HumaniticsComponent},
      {path: 'AboutUsComponent', component:AboutUsComponent},
      {path: 'ContactComponent', component:ContactComponent},
      {path: 'HomeComponent', component:HomeComponent},
      {path: 'ServicesComponent', component:ServicesComponent},
      {path: 'SignupComponent', component:SignupComponent},
      {path: 'UseradComponent', component:UseradComponent},
      {path: 'NomineedComponent', component:NomineedComponent},
      {path: 'EduComponent', component:EduComponent},
      {path: 'SubmitComponent', component:SubmitComponent},
      {path: 'HeaderComponent', component:HeaderComponent},
      {path: 'NextComponent', component:NextComponent},
      {path: 'FooterComponent', component:FooterComponent},
      {path: 'CartComponent', component:CartComponent},
      
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
