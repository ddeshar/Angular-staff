import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { BackendService } from "./backend.service";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    OwnerComponent,
    OwnerAddComponent,
    OwnerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
