import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public users: any = [];
  public orders: any = [];
  public filteredUsers;

  constructor(
    private userService: UserService
  ) { }

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
        this.orders.map (item => {
          return item.userName = this.getParticularUser(item.user);
        });
        console.log(this.orders);
      });
  }

  getUsers(users) {
    this.filteredUsers = users;
    return this.filteredUsers;
  }

  getParticularUser(id?: number): void {
      return this.users.filter(item => item.id === id)[0];
    }
}
