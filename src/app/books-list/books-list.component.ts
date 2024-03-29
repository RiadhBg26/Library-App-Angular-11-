import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  url = "data:image/jpeg;base64,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"
  imgHeight = 50;
  imgWidth = 60
  title = "Books App"
  displayTab = false;
  books = [
    { id: 1, image: this.url, title: 'Book1', description: "lorem ipsum", category: "Frontend", price: 35 },
    { id: 2, image: this.url, title: 'Book2', description: "lorem ipsum", category: "Backend", price: 35 },
    { id: 3, image: this.url, title: 'Book3', description: "lorem ipsum", category: "FullStack", price: 35 },
    { id: 4, image: this.url, title: 'Book4', description: "lorem ipsum", category: "Database", price: 35 }
  ];
  categories = ['Frontend', 'Backend', 'FullStack', 'Database'];
  categId: string = 'all';
  tempBooks = [];
  constructor() { }

  ngOnInit(): void {
    this.tempBooks = this.books
  }

  display() {
    this.displayTab = !this.displayTab
  }

  changeCateg() {
    if(this.categId == 'all') this.books = this.tempBooks;
    this.books = this.tempBooks.filter(b => b.category == this.categId)
    
  }
}


