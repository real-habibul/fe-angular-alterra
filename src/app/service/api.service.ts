import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, catchError } from 'rxjs';

import { IArticles } from '../models/iarticles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  createArticle(data: IArticles): Observable<IArticles> {
    return this.httpClient.post<IArticles>(this.url + '/articles', JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getArticlesByID(id: any): Observable<IArticles> {
    return this.httpClient.get<IArticles>(this.url + '/articles/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getArticlesAll(): Observable<IArticles[]> {
    return this.httpClient.get<IArticles[]>(this.url + '/articles')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateArticle(id: any, data: IArticles): Observable<IArticles> {
    return this.httpClient.put<IArticles>(this.url + '/articles/' + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteArticle(id: any): Observable<IArticles> {
    return this.httpClient.delete<IArticles>(this.url + '/articles/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



  // getPost(): any {
  //   return this.http.get(this.url + '/articles');
  // }

  // postArticles(body: any): any {
  //   return this.http.post(this.url + '/articles', body);
  // }

  // putArticles(body: any, articleID: any): any {
  //   return this.http.put(this.url + '/articles/', body, {
  //     params: {
  //       id: articleID,
  //     },
  //   });
  // }

  // deleteArticles(articleID: any): any {
  //   return this.http.delete(this.url + '/articles', {
  //     params: {
  //       id: articleID,
  //     },
  //   });
  // }
}
