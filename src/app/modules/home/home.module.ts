// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './home.component';


// @NgModule({
//   declarations: [HomeComponent],
//   imports: [
//     CommonModule,
//     HomeRoutingModule
//   ]
// })
// export class HomeModule { }



import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule, SwiperModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],

  declarations: [HomeComponent],
  exports: [CommonModule, ReactiveFormsModule]
})

export class HomeModule { 

}

