import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class RestService {

  abstract get endpoint():string;

  constructor(protected http:HttpClient) { }

  all(page?:number): Observable<any>{
    let url = this.endpoint;
    if(page){
      url+=`?page=${page}`;
    }
    return this.http.get(url)
  }

  create(data:any):Observable<any>{
   return this.http.post<any>(this.endpoint,data)
  }

  get(id:number):Observable<any>{
    return this.http.get<any>(`${this.endpoint}/${id}`)
  }

  update(id:number,data:any):Observable<any>{
    return this.http.put<any>(`${this.endpoint}/${id}`,data);
  }

  delete(id:number): Observable<void>{
    return this.http.delete<any>(`${this.endpoint}/${id}`)
  }
}
