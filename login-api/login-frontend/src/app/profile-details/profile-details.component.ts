import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  id: number;
  profile: Profile

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

}
