import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateComponent } from './components/validate/validate.component';

import { ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [AppComponent, ValidateComponent, OrdersComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
