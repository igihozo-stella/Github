import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile:any;
  repos:any;
   username:any;


  constructor(public profileService:ProfileServiceService) {
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile=profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile=profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }
   
  ngOnInit() { 
    //this.profileService.getProfileInfo();
   }
}
