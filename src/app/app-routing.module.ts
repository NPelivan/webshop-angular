import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { ValidateComponent } from './components/validate/validate.component';

const routes: Routes = [
  { path: '', component: ValidateComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
