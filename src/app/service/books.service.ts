import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/Book';
import { ResponseVO } from '../model/ResponseVO';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  retrieveBooks(){
    return this.http.get<Book[]>('http://localhost:8088/getBooks',{
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      })
    });
  }

  addBooks(bookModel : Book){
    return this.http.post<ResponseVO>('http://localhost:8088/addBook',bookModel,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  deleteBooks(bookId : number){

    return this.http.delete<ResponseVO>('http://localhost:8088/deleteBooks/'+bookId,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  updateBooks(book : Book){

    return this.http.put<ResponseVO>('http://localhost:8088/updateBook',book,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

}
