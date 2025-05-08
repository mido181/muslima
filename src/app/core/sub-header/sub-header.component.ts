import { Component, inject, OnInit } from '@angular/core';
import { BorderCircleComponent } from '../../shared/border-circle/border-circle.component';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  imports: [BorderCircleComponent, MatIcon],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent implements OnInit {
  private router = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.router.parent);
  }
}
