import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListArticlesComponent } from './list-articles.component';

const routes: Routes = [{ path: '', component: ListArticlesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListArticlesRoutingModule { }
