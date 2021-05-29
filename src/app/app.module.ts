import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';   
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { BasicAuthHtppInterceptorService } from './basic-auth-htpp-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent,
    BookViewComponent,
    BookDetailComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    NgxPaginationModule 
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
