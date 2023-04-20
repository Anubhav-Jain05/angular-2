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
    HeaderComponent
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
      
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
