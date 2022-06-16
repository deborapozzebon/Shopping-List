import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
