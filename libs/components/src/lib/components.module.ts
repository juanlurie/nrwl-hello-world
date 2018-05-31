import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input'

import {
  MatInputModule
} from '@angular/material';


@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class ComponentsModule { }
