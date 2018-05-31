import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnInit,
    OnChanges
} from '@angular/core';

import { EasyForm, EasyFormService, EasyField, EasyNotification, Colors, ButtonTypes, InputTypes, EasyValidator } from 'ngx-suite';

@Component({
    selector: 'platform-login',
    template: `<easy-form [form]="form"></easy-form>`,
    styles: [
        `.easy-input {
                  margin-top: 20px;
                  width: 100%;
                }`
    ]
})
export class LoginComponent {

    form: EasyForm;

    constructor(public easyFormService: EasyFormService, private easyNotification: EasyNotification) {
        this.form = this.easyFormService.createForm();

        this.buildForm();
    }

    buildForm() {
        const card = this.form.addCardContainer("Test");
        card.addInputField("Username", { validators: [EasyValidator.Required("Username is required"),EasyValidator.MaxLength(20,"Required")] });
        card.addInputField("Password", { type: InputTypes.input_type_password, validators: [EasyValidator.Required("Password is required")] });
        card.addAction("Login", () => this.login());
    }

    login() {
        const validateForm = this.form.validateForm();

        if (validateForm.valid) {
            this.easyNotification.showMessage('Logged In', 'Logged In Successfully')
        }
    }

}
