import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UserStatusComponent } from '../user-status/user-status.component';
import { RouterLink } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';
import { Tag } from 'primeng/tag';
import { MatTooltip } from '@angular/material/tooltip';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Iuser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-card',
  imports: [
    MatIcon,
    UserStatusComponent,
    RouterLink,
    MatTooltip,
    Tag,

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent{
  @Input() user!: Iuser;

  arabCountries = [
  { name: "Algeria", code: "dz", arname: "الجزائر" },
  { name: "Bahrain", code: "bh", arname: "البحرين" },
  { name: "Comoros", code: "km", arname: "جزر القمر" },
  { name: "Djibouti", code: "dj", arname: "جيبوتي" },
  { name: "Egypt", code: "eg", arname: "مصر" },
  { name: "Iraq", code: "iq", arname: "العراق" },
  { name: "Jordan", code: "jo", arname: "الأردن" },
  { name: "Kuwait", code: "kw", arname: "الكويت" },
  { name: "Lebanon", code: "lb", arname: "لبنان" },
  { name: "Libya", code: "ly", arname: "ليبيا" },
  { name: "Mauritania", code: "mr", arname: "موريتانيا" },
  { name: "Morocco", code: "ma", arname: "المغرب" },
  { name: "Oman", code: "om", arname: "عُمان" },
  { name: "Palestine", code: "ps", arname: "فلسطين" },
  { name: "Qatar", code: "qa", arname: "قطر" },
  { name: "Saudi Arabia", code: "sa", arname: "المملكة العربية السعودية" },
  { name: "Somalia", code: "so", arname: "الصومال" },
  { name: "Sudan", code: "sd", arname: "السودان" },
  { name: "Syria", code: "sy", arname: "سوريا" },
  { name: "Tunisia", code: "tn", arname: "تونس" },
  { name: "United Arab Emirates", code: "ae", arname: "الإمارات العربية المتحدة" },
  { name: "Yemen", code: "ye", arname: "اليمن" }
];

  talkWith: string = ' محمد ';

  private ToasterService = inject(ToasterService);

  successToaster(detail: string, summary: string) {
    this.ToasterService.successToaster(detail, summary);
    console.log('Success Toaster called');
  }
}
