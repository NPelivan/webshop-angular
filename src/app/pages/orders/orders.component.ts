import { Component, OnInit } from '@angular/core';
import data from '../../data.json';
import { SearchPipe } from '../../components/search/search.pipe';
import { PaginationValue } from '../../components/pagination/pagination.component';
import { FormControl } from '@angular/forms';

interface Order {
  id: Number;
  name: String;
  client: String;
  date: String;
  price: Number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
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

  public pagination = { page: 1, pageSize: 10 };

  public readonly paginationControl = new FormControl(this.pagination);

  private readonly items = Array.from(Array(100).keys(), (item) => item + 1);

  public visibleItems: PaginatedResponse<number> = {
    items: this.items.slice(0, 3),
    total: this.items.length,
  };

  constructor() {}

  ngOnInit(): void {
    this.paginationControl.valueChanges.subscribe(this.onPageChange.bind(this));
  }

  public onPageChange(pagination: PaginationValue): void {
    const startIndex = (pagination.page - 1) * pagination.pageSize;

    const items = this.items.slice(
      startIndex,
      startIndex + pagination.pageSize
    );

    this.visibleItems = { items, total: this.items.length };
  }

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
  }

  orders: Order[] = data;
}
