import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingListRoutingModule } from './shoppingList-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    EditComponent
  ]
})

export class ShoppingListModule { }