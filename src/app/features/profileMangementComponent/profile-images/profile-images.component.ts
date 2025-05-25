import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile-images',
  imports: [NgClass, MatIcon],
  templateUrl: './profile-images.component.html',
  styleUrl: './profile-images.component.scss',
})
export class ProfileImagesComponent {
  @ViewChildren('img') imgs!: QueryList<ElementRef>;
  @ViewChild('input', { static: false }) fileInput: any;
  setimage: any;
  imgSrc =
    'assets/imgs/default-male-avatar-profile-icon-social-media-user-free-vector.jpg';
  reader = new FileReader();
  imgText = 'قم بتحميل صورة';
  onFileSelected(e: any) {
    const file = e.target.files[0];
    this.setimage = this.changeImgs(e.target.id);
    this.imgReader(file);
  }

  changeImgs(id: string) {
    const imgid = this.imgs.filter((element) => element.nativeElement.id == id);
    return (src: string) => {
      imgid[0].nativeElement.src = src;
      this.imgText = 'قم بتغيير الصورة';
    };
  }

  imgReader(file: any) {
    this.reader.onload = (e) => {
      const result = e.target!.result;
      this.setimage(result as string);
    };
    this.reader.readAsDataURL(file);
  }

  fileEvent() {
    this.fileInput.nativeElement.click();
  }
}
