import { Component, inject, OnInit } from '@angular/core';
import { BorderCircleComponent } from '../../shared/border-circle/border-circle.component';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { SubHeaderService } from '../../services/sub-header.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sub-header',
  imports: [BorderCircleComponent, MatIcon, AsyncPipe],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent implements OnInit {
  private router = inject(Router);
  currentParentComponent: string | undefined;
  private subHeaderService = inject(SubHeaderService);
  headerStatus$!: Observable<boolean>;
  ngOnInit(): void {
    this.headerStatus$ = this.subHeaderService.visableHeader$;
  }
}
