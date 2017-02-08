import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormTextComponent} from './input';
import {FormSelectComponent} from './select';
import {ValidationComponent} from './validation';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [FormTextComponent, FormSelectComponent, ValidationComponent],
  imports: [
    FormsModule, CommonModule
  ],
  exports: [FormTextComponent, FormSelectComponent, ValidationComponent],
})
export class ComponentsModule {
}
