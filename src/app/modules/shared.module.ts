import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlankComponent } from '../components/layout/blank/blank.component';
import { SectionComponent } from '../components/layout/section/section.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlankComponent,
    SectionComponent,
    FormsModule
  ],
  exports: [
    CommonModule,
    BlankComponent,
    SectionComponent,
    FormsModule
  ]
})
export class SharedModule { }
