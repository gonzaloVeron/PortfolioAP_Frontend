import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  private generateHeader(contentType: any = "application/json") {
    let httpOptions = {};
    let currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      httpOptions['headers'] = new HttpHeaders({
        "Content-Type": contentType,
        Authorization: JSON.parse(currentUser).token,
      });
    } else {
      httpOptions['headers'] = new HttpHeaders({
        "Content-Type": contentType,
      });
    }
    return httpOptions;
  }

  post<T>(endpoint: string, body: any): Observable<T>{
    return this.http.post<T>(`${environment.basePath}${endpoint}`, body, this.generateHeader())
      .pipe(
        retry(1),
        catchError(this.handleError<T>("post"))
      );
  }

  put<T>(endpoint: string, body: any): Observable<T>{
    return this.http.put<T>(`${environment.basePath}${endpoint}`, body, this.generateHeader())
      .pipe(
        retry(1),
        catchError(this.handleError<T>("put"))
      );
  }

  get<T>(endpoint: string): Observable<T>{
    return this.http.get<T>(`${environment.basePath}${endpoint}`, this.generateHeader())
      .pipe(
        retry(1),
        catchError(this.handleError<T>("get"))
      );
  }

  delete<T>(endpoint: string): Observable<T>{
    return this.http.delete<T>(`${environment.basePath}${endpoint}`, this.generateHeader())
      .pipe(
        retry(1),
        catchError(this.handleError<T>("delete"))
      );
  }

  patch<T>(endpoint: string, body: any): Observable<T>{
    return this.http.patch<T>(`${environment.basePath}${endpoint}`, body, this.generateHeader())
      .pipe(
        retry(1),
        catchError(this.handleError<T>("patch"))
      );
  }

  upload<T>(endpoint: string, body: any): Observable<T>{
    return this.http.post<T>(`${environment.basePath}${endpoint}`, body, this.generateHeader(false))
      .pipe(
        catchError(this.handleError<T>("upload"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: HttpResponse<T> | any): Observable<T> => {
      if (error.status === 401 || error.status === 403) {
        localStorage.clear();
        // Deberia deslogear aca
      }
      console.log("AAAAAAAA")
      return throwError(error.error.message);
    };
  }
}
