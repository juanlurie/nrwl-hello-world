import { Component } from '@angular/core';
import { EasyForm, EasyFormService, EasyField, EasyNotification, Colors, ButtonTypes, InputTypes } from 'ngx-suite';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hello-world-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  form: EasyForm;

  control: FormControl = new FormControl('', Validators.required);

  constructor(public easyFormService: EasyFormService) {
    this.form = this.easyFormService.createForm();

    this.control.setValue('some value');
    this.control.valueChanges.subscribe(x => {
      let a = 1;
      let b = a;

    });

    this.buildForm();
  }

  buildForm() {
    let card = this.form.addCardContainer("Test");
    let password = card.addInputField("Some input", { type: InputTypes.input_type_password, value: "TEST VALUE" });
    password.onChange.subscribe(x => {
      alert(x.value);
      console.log(x.value);
    })
  }

}
