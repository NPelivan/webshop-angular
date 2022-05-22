import { Component, OnInit } from '@angular/core';
import data from '../../data.json';
import { SearchPipe } from '../../components/search/search.pipe';
import { ThisReceiver } from '@angular/compiler';

interface Order {
  id: Number;
  name: String;
  client: String;
  date: String;
  price: Number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public searchPipe: any = '';
  public query = '';
  activePage: number = 0;
  constructor() {}

  ngOnInit(): void {}

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
  }

  orders: Order[] = data;
}
