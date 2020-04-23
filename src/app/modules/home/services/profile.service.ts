import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile;
  constructor() {
    this.profile = { name: 'Jonathan' };
  }
}
