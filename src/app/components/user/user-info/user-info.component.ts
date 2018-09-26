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
  public filteredUsers = [];
  public filteredOrders = [];
  public defaultOrders = [];


  constructor(
    private userService: UserService,
    private changeDet: ChangeDetectorRef

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
        this.defaultOrders = this.orders;
      });
  }

  getUsers(users) {
    this.filteredUsers = users;
    return this.filteredUsers;
  }

  getParticularUser(id?: number): void {
      return this.users.filter(item => item.id === id)[0];
  }

  getFilteredData(event) {
    this.filteredOrders = event;
    this.orders = this.defaultOrders;
    this.filteredOrders.length ? this.orders = this.filteredOrders : this.orders = [];
  }
}
