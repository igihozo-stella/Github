import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
 // public users:string;
 users:any;
 user:User;
 

 private username:string;
 private access_token='5156c12f1b417fe7215d3f2903e7eced37ed0531';


 constructor(private http:HttpClient) {
   console.log("service is ready");
   this.username='igihozo-stella';
   this.access_token='5156c12f1b417fe7215d3f2903e7eced37ed0531';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users" + this.username + "?access_token=" +
    this.access_token +"&access_token=" + this.access_token );
  }
 
  getProfileRepos(){
   return this.http.get("https://api.github.com/users" + this.username + "/repos?access_token=" +
   this.access_token +"/repos&access_token=" + this.access_token );
 }
 updateProfile(username:string){
   this.username=username;
   console.log(username);
 

 }

}
