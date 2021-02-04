import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './filter-pipe.pipe';



@NgModule({
  declarations: [FilterPipePipe],
  imports: [
    CommonModule
  ],
  providers: [FilterPipePipe],
  exports: [FilterPipePipe]
})
export class FilterPipeModule { }
