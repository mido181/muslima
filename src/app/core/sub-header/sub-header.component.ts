import { Component, inject, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  Observable } from 'rxjs';
import { SubHeaderService } from '../../services/sub-header.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sub-header',
  imports: [AsyncPipe],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);
  headerStatus$!: Observable<boolean>;
  ngOnInit(): void {
    this.headerStatus$ = this.subHeaderService.visableHeader$;
  }
}
