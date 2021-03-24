import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "./users";

@Injectable({
  providedIn: 'root'
})
export class UsersUtilsService {

  constructor(private http : HttpClient) { }

getAllUsers()
  {
   return  this.http.get<Users[]>("http://localhost:8000/api/users/")
  }

}

