import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Book } from '../model/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  bookDetails : Book[] = [];

  constructor( private router:Router, private bookService : BooksService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks() {
 
    console.log("inside retrievebook ")
    this.bookService.retrieveBooks().subscribe(
      response => {
        this.bookDetails=response;
      }, error => {
        console.log(error);
      });
  }

  selectProduct(id: number) {
     console.log("dddddddddddddddd"+id);
    this.router.navigate(['/product', id]);
   }

}
