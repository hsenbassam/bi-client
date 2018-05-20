import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  mockQuerySearch: string;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  mockSearch() {
    this.toastr.show('Success', 'Mock Query Search: ' + this.mockQuerySearch);
  }

}
