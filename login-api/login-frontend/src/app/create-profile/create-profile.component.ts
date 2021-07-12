import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  profile: Profile = new Profile();
  submitted = false;

  constructor(private profileService: ProfileService, private router : Router) { }

  ngOnInit(): void {
  }

  newProfile(): void {
    this.submitted = false;
    this.profile = new Profile();
  }

  save() {
    this.profileService.createProfile(this.profile).subscribe(
        data => {
          console.log(data)
          this.profile = new Profile();
        },
        error => console.log(error)
      );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }



}
