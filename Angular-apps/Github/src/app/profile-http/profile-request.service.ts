import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {

  // public users:string;
  users:any;
  user:User;
  

  private username:string;
  private access_token='8fd282bab1647387ed5fb98ee3fcb5844a3f78ae';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='igihozo-stella';
    this.access_token='8fd282bab1647387ed5fb98ee3fcb5844a3f78ae';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
   }
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  

  }
}
  