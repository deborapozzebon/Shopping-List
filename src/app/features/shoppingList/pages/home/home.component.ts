import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  insertProduct = new FormGroup({
    product: new FormControl('', {validators: [Validators.required]})
  });

  list = ['produto'];
  market1 = ['algo'];
  market2 = ['algo2'];

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct() {
    const { product } = this.insertProduct.value
    if(product)
      this.list.push(product)
    
    this.insertProduct.get('product')?.setValue('')
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
