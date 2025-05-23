import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-profile-images',
  imports: [NgClass],
  templateUrl: './profile-images.component.html',
  styleUrl: './profile-images.component.scss',
})
export class ProfileImagesComponent {
  @ViewChildren('img') imgs!: QueryList<ElementRef>;
  @ViewChild('input', { static: false }) fileInput: any;
  setimage:any;
  imgSrc =
    'assets/imgs/default-male-avatar-profile-icon-social-media-user-free-vector.jpg';
  reader = new FileReader();

  onFileSelected(e: any) {
    const file = e.target.files[0];
     this.setimage = this.changeImgs(e.target.id);
    this.imgReader(file)
      }

  changeImgs(id: string) {
    const imgid = this.imgs.filter((element) => element.nativeElement.id == id);
    return (src:string)=>{
    imgid[0].nativeElement.src = src;

    }
  }

  imgReader(file:any){
    this.reader.onload = (e) => {
    const result = e.target!.result;
    this.setimage(result as string)
    };
    this.reader.readAsDataURL(file);

  }

  fileEvent() {
    this.fileInput.nativeElement.click();
  }
}
