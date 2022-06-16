import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ToolbarComponent,
  ]
})

export class CoreModule { }
