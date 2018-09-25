import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  userUrl = './src/app/users.json';
  orderUrl = './src/app/orders.json';

  // get all users list
  getUsers() {
    return this.http.get(this.userUrl);
  }

  // get all orders list
  getOrders() {
    return this.http.get(this.orderUrl);
  }

  getParticularUser(user) {
    return this.http.get(this.userUrl)
  }
}
