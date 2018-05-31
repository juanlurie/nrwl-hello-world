import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input'
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule
} from '@angular/material';

import { EasyModule, EasyFormService, EasyFabService } from 'ngx-suite';

@NgModule({
  imports: [CommonModule, MatInputModule, EasyModule, HttpClientModule],
  declarations: [InputComponent],
  providers: [EasyFabService],
  exports: [InputComponent]
})
export class SharedComponentsModule { }
