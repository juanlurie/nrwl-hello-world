import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login'

import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule
} from '@angular/material';

import { EasyModule, EasyFormService, EasyFabService } from 'ngx-suite';

@NgModule({
  imports: [CommonModule, EasyModule, HttpClientModule],
  declarations: [LoginComponent],
  providers: [EasyFabService],
  exports: [LoginComponent]

})
export class PlatformModule { }
