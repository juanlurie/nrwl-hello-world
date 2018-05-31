import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'transact-account-view',
  template: `<shared-components-currency-input></shared-components-currency-input>`,
  styles: [
    `.easy-input {
                margin-top: 20px;
                width: 100%;
              }`
  ]
})
export class AccountViewComponent {}
