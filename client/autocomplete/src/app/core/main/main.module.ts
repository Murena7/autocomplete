import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent]
})
export class MainModule { }
