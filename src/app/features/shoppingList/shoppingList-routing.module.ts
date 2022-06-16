import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShoppingListRoutingModule { }
