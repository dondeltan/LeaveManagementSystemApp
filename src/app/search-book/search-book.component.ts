import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { Book } from '../model/Book';
import { ResponseVO } from '../model/ResponseVO';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  isEditable = false;
  editRowID : any = '';
  searchText : any;
  paginationValue : number = 1;
  bookDetails : Book[] = [];
  responseDetails = new ResponseVO("");
  resultTobeShown = false;
  bookModel = new Book(0,"","",0,"","");
  bookIdTobeDeleted = 0;
  
  constructor(private router:Router,
    private bookService : BooksService) { }

  ngOnInit(): void {
    this.retrieveBooks();
  }

  editBooks(val: any){
    console.log("insideEdit");
    this.editRowID = val;
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

  handleEditing(book : Book){
    console.log(book)
    this.editRowID = '';
    this.bookService.updateBooks(book).subscribe(
      response => {
        this.responseDetails=response;
        this.retrieveBooks();
      }, error => {
        console.log(error);
      });

    this.isEditable = true;
    console.log(book);
  }

  handleAddition(){
    
    this.bookService.addBooks(this.bookModel).subscribe(
      response => {
        this.responseDetails=response;
        this.retrieveBooks()
      }, error => {
        console.log(error);
      });

  }

  handleDeleting(bookid : number){
    this.bookService.deleteBooks(bookid).subscribe(
      response => {
        this.responseDetails=response;
        this.retrieveBooks()
      }, error => {
        console.log(error);
      });

  }

  handleNewBook(){
    this.resultTobeShown = true;
  }

  key : string = 'bookID';
  reverse: boolean = false;
  sort(key: any){
    this.key=key;
    this.reverse=!this.reverse;

  }

}
