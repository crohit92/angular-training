import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamSelectComponent } from './stream-select.component';



@NgModule({
  declarations: [StreamSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [StreamSelectComponent]
})
export class StreamSelectModule { }
