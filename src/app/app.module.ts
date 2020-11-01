import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AppRoutingModule } from './app-routing.module';
// import { ListFilterPipe } from './pipes/list-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { ListArticlesModule } from '../../src/app/modules/list-articles/list-articles.module'



import { AppComponent } from './app.component';
import { HeaderComponent } from './theming/header/header.component';
import { FooterComponent } from './theming/footer/footer.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
    // ListFilterPipe,
    // ListArticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
