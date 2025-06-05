import { Component, inject, ViewChild, viewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import {
  MatLabel,
  MatInput,
  MatFormField,
  MatError,
} from '@angular/material/input';
import { last } from 'rxjs';
import { UserResponseService } from '../../../services/user-response.service';
import { Iuser } from '../../../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { UserCategoryService } from '../../../services/user-category.service';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatError,
    MatIcon,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  private fb = inject(FormBuilder);
  private userRes = inject(UserResponseService);
  private UserService = inject(UserCategoryService);
  private route = inject(ActivatedRoute);
  userId: string = '';
  editForm!: FormGroup;
  reader = new FileReader();
  imgText = 'قم بتحميل صورة';
  setimage: any;
  user?: Iuser | null;
  @ViewChild('input', { static: false }) fileInput: any;
  @ViewChild('img', { static: false }) img: any;

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id') ?? '0';
    this.initateForm();
    this.userById(this.userId);
  }

  initateForm() {
    this.editForm = this.fb.group({
      name: [null],
      email: [null],
      city: [null],
      country: [null],
      profilePicture:[null],

    });
  }
  userById(id: string) {
    this.UserService.userById(id).subscribe((res:any) =>  this.editFormFn(res));
    

  }
  editFormFn(data: Iuser) {
    this.editForm.patchValue({
      name: [data.user[0].name,],
      email: [data.user[0].email,],
      city: [data.user[0].city,],
      country: [data.user[0].country,],
    });
  }

  SubmitEdit() {
    if (this.editForm.invalid) {
      return
    }
   this.updateUser()
  }
 updateUser(){
  this.UserService.updateById(this.userId,this.editForm).subscribe(res=> this.userRes.userResponse=res)
 }
  onFileSelected(e: any) {
    const file = e.target.files[0];
   this.editForm.get('profilePicture')!.setValue(
        file
      );
    
    this.setimage = this.changeImgs(e.target.id);
    this.imgReader(file);
  }

  changeImgs(id: string) {
    return (src: string) => {
      this.img.nativeElement.src = src;
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
