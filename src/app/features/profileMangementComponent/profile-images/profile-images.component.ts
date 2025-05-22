import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-images',
  imports: [],
  templateUrl: './profile-images.component.html',
  styleUrl: './profile-images.component.scss',
})
export class ProfileImagesComponent {
  onFileSelected(e: any) {
    // console.log(e.target.files[0]);
  }
}
