import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'What is Lorem Ipsum?';
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

}
