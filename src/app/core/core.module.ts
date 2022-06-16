import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../shared/angularMaterial.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarComponent
  ]
})
export class CoreModule { }
