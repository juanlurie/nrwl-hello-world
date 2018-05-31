import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EasyForm, EasyFormService, EasyField, EasyNotification, Colors, ButtonTypes, InputTypes } from 'ngx-suite';

@Component({
  selector: 'shared-components-currency-input',
  template: `<easy-form [form]="form"></easy-form>`,
  styles: [`.easy-input {
                margin-top: 20px;
                width: 100%;
              }`]
})
export class InputComponent {

  form: EasyForm;

  constructor(public easyFormService: EasyFormService) {
    this.form = this.easyFormService.createForm();

    this.buildForm();
  }

  buildForm() {
    const card = this.form.addCardContainer("Test");
    card.addInputField("Some input", { type: InputTypes.input_type_number, value: "TEST VALUE" });
  }

}