import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '@hello-world/components';

import { EasyModule, EasyFormService, EasyFabService } from 'ngx-suite';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), EasyModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatInputModule, ComponentsModule],
  providers: [EasyFabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
