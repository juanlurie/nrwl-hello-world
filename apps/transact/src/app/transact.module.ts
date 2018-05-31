import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsModule } from '@canister/shared-components';
import { AccountViewComponent } from './components/account-view';

@NgModule({
  imports: [CommonModule, SharedComponentsModule],
  declarations: [AccountViewComponent],
  exports: [AccountViewComponent]
})
export class TransactModule { }
