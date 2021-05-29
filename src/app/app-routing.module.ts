import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { SearchBookComponent } from './search-book/search-book.component';
import { BookViewComponent } from './book-view/book-view.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path : '' , component: BookViewComponent},
  {path : 'login' , component: LoginComponent} ,
  {path : 'searchBook/:name' , component: SearchBookComponent,canActivate:[RouteGuardService]},
  {path : 'product/:id' , component: ProductComponent,canActivate:[RouteGuardService]},
  {path : 'booksView' , component: BookViewComponent,canActivate:[RouteGuardService]},
  {path:'logout' , component:LogoutComponent,canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
