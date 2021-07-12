import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id: number;
  profile: Profile;

  constructor(private route: ActivatedRoute, private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profile = new Profile();

    this.id = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.id).subscribe(
      data => {
        console.log(data)
        this.profile = data;
      },
      error => console.log(error)
    );
  }

  updateProfile() {
    this.profileService.updateProfile(this.id, this.profile).subscribe(
      data => {
        console.log(data);
        this.profile = new Profile();
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.updateProfile();
  }
  
}
