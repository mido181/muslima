import { Component, inject, ViewChild, viewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatLabel,
  MatInput,
  MatFormField,
  MatError,
} from '@angular/material/input';
import { last } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatError,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent {
  editForm!: FormGroup;
  private fb = inject(FormBuilder);
  
  ngOnInit() {
    this.editForm = this.fb.group({
      firstname: ['mohamed'],
      lastname: ['ali'],
      email: ['mohamed@gmail.com'],
      phone: ['01128418506'],
      city: ['giza'],
      country: ['egypt'],
      brithdate: ['11-4-1997'],
      member: [''],
    });
  }

  edit() {
    console.log(this.editForm.value);
  }

}
