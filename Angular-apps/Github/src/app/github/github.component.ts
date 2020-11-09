import { Component, OnInit } from '@angular/core';
import {User } from '../user';
import { HttpClient } from '@angular/common/http';
import { ProfileRequestService } from '../profile-http/profile-request.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  public username='igihozo-stella';
 public  getProfileInfo:string;
 user:User;

  constructor(public userRequest:ProfileRequestService,public repoRequest:ProfileRequestService) { }

  ngOnInit(): void {
  }

}
