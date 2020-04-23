import { Component, OnInit } from '@angular/core';

class Profile {
  constructor(public name: string, public lastname: string, public age: number){}
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  profile: Profile = {
    name: 'Jonathan',
    lastname: 'Lopez',
    age: 26,
  };
  date = new Date();
  constructor() { }

  ngOnInit() {
  }

  get name() {
    return this.profile.name;
  }

}
