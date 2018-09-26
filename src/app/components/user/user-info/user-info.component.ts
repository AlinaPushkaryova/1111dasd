import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public users: Array<any[]> = [];
  public orders: Array<any[]> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserList();
    this.getOrdersList();

  }

  getUserList() {
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
      });
  }

  getOrdersList() {
    this.userService.getOrders()
      .subscribe(res => {
        this.orders = res;
      });
  }

  getUsers(event) {
    console.log(event)
  }

  getParticularUser(id: number, users): void {
    console.log(users)
    return users.filter(item => item.id === id);
  }
}
