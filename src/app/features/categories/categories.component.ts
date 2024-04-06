import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

interface Category {
  envelope_id: string;
  total: number;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('categoryId');
      this.fetchCategories(categoryId);
    });
  }

  fetchCategories(categoryId?: string | null) {
    let url = 'http://127.0.0.1:8000/api/category/';
    if (categoryId) {
      url += '?envelope_id=' + categoryId;
    }

    this.http.get<Category | Category[]>(url).subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.categories = data;
        } else {
          this.categories = [data];
        }
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}