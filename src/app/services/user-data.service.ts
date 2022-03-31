import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  
  url='http://localhost:8080/hello';
  constructor(private http : HttpClient){}
  users(){
    return this.http.get(this.url);
  }
   setUrl(amg: String[]){
     console.log(amg)
     this.url='http://localhost:8080/hello';
    this.url=this.url+"/"+amg;
    console.log(this.url)
  }
  
}
