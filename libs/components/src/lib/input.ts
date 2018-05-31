import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'components-easy-input',
    template: `<mat-form-field class='easy-input'>
                        <input matInput>
               </mat-form-field>`,
    styles: [`.easy-input {
                margin-top: 20px;
                width: 100%;
              }`]
})
export class InputComponent {
}