import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

interface Category {
  envelope_id: string;
  total: number;
}

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []; // Initialize data with undefined

  constructor(private http: HttpClient,
     private route: ActivatedRoute) {}

  ngOnInit() {
    this.getData().subscribe((categories) => {
      this.categories = categories; // Assign the response to the data variable
      console.log(categories);
    });
  }
  getData() {
    return this.http.get<any>('http://127.0.0.1:8000/api/category/', {
      headers,
    }); // Replace with your actual API endpoint
  }
}
