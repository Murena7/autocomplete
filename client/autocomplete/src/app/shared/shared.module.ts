import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteDirective } from './directives/autocomplete.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AutocompleteDirective],
  declarations: [AutocompleteDirective]
})
export class SharedModule { }
