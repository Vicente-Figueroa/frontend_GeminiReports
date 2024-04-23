import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../../models/accounts';
import { Profit } from '../../models/profit';
import { AccountsComponent } from '../accounts/accounts.component';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-finances',
  standalone: true,
  imports: [CommonModule, AccountsComponent],
  templateUrl: './finances.component.html',
  styleUrl: './finances.component.css',
})
export class FinancesComponent implements OnInit {
  data: Profit = { expenses: 0, incomes: 0, profit: 0, ratio: 0, ratio_desc: '' }; // Initialize data with undefined

  constructor(private http: HttpClient) {}
  ngOnInit() {

    this.getData('profit').subscribe((data) => {
      this.data = data; // Assign the response to the data variable
    });
  }

  getData(url: string) {
    return this.http.get<any>('http://192.168.0.4:8000/api/' + url + '/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
