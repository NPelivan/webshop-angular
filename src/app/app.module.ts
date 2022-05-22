import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateComponent } from './components/validate/validate.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/orders/orders.component';
import { SearchPipe } from './components/search/search.pipe';
import { PaginationModule } from './components/pagination/pagination.module';

@NgModule({
  declarations: [AppComponent, ValidateComponent, OrdersComponent, SearchPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
