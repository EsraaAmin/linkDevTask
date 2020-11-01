import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { ListArticlesRoutingModule } from './list-articles-routing.module';
import { ListArticlesComponent } from './list-articles.component';


@NgModule({
  declarations: [ListArticlesComponent],
  imports: [
    CommonModule,
    ListArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
    
  ],
  exports: [
    ListArticlesComponent
  ]
})
export class ListArticlesModule { }
