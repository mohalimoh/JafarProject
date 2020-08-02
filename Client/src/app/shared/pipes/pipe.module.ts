import { FixLengthPipe } from './fix-length.pipe';
import { PersianDatePipe } from './persian-date.pipe';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { FilterPipe } from './filter.pipe';
import { SearchPipe } from './search.pipe';
import { ShortNamePipe } from './short-name.pipe';

@NgModule({
  declarations:[FilterPipe, SearchPipe, ShortNamePipe,PersianDatePipe,FixLengthPipe],
  imports:[CommonModule],
  exports: [FilterPipe, SearchPipe, ShortNamePipe, PersianDatePipe, FixLengthPipe]
})

export class PipeModule{}
