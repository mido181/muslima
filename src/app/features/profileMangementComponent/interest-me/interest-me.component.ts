import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

const interestedData = {
  activites: {
    name: ' ما هي اهتمامتك الفنية ؟',
    list: [
      'التحف',
      'الفن / الرسم',
      'علم التنجيم',
      'رقص الباليه',
      'الحانات / مرقص',
      'الشاطئ / الحديقة',
      'الشطرنج / أوراق اللعب',
      'التخييم / الطبيعة',
      'سيارات',
      'كازينو / القمار',
      'جمع',
      'نوادي الكوميديا',
      'أجهزة الكمبيوتر والإنترنت',
      'حفلات موسيقية',
      'الطبخ / مأكولات',
      'الصناعات اليدوية',
      'الرقص',
      'تناول الطعام خارج المنزل',
      'حفلات العشاء',
      'التعليم',
      'عائلة',
      'احداث أزياء',
      'البستنة / المناظر الطبيعية',
      'تحسين المنزل',
      'الاستثمار / المالية',
      'الكاريوكي',
      'المكتبة',
      'التأمل',
      'الدراجات النارية',
      'أفلام / سينما',
      'المتاحف / معرض',
      'الموسيقى (مشاهدة)',
      'الموسيقى (اللعب',
      ' سياسة',
      'الحيوانات الأليفة',
      'فلسفة ',
      'فوتوغرافيا',
      'شعر',
      'قراءة',
      ,
      'العلوم والتكنولوجيا',
      'التسوق',
      'النشاط',
      'التحف',
      'الفن ',
      'علم التنجيم',
      'رقص الباليه',
      'الشاطئ ',
      'الشطرنج ',
      'التخييم ',
      'سيارات',
    ],
  },
  food: {
    name: 'ما هي اهتماماتك الغذائية ؟',
    list: [
      'الوجبات السريعة / بيتزا',
      'المكسيكي',
      'الشرق الأوسط',
      'مأكولات بحري',
      'الاكل الروحي',
      'أمريكا الجنوبية',
      'الجنوب الغربي',
      'التايلاندية',
      'نباتي',
      ' عضوي نباتي',
      'الفيتنامي',
      'اخر',
      'امريكي',
      'شوى',
      'كاليفورني',
      'الكوبي',
      'الصيني / ديم سوم',
      'قاري',
      'أطعمه معلبه',
      'أوروبا الشرقية',
      'الوجبات السريعة / بيتزا',
      'فرنسى',
      'المانى',
      'يونانى',
      'هندى',
      'ايطالى',
      'يابانى',
      'كوشير',
      'كورى',
      'البحر الأبيض المتوسط',
      'المكسيكي',
      'الشرق الأوسط',
      'مأكولات بحرية',
      'الاكل الروحي',
      'أمريكا الجنوبية',
      'الجنوب الغربي',
      'التايلاندية',
      'نباتي',
    ],
  },

  music: {
    name: 'ما هي اهتماماتك الموسيقية ؟',
    list: [
      'الجاز',
      'الشعبي',
      'الراب',
      'التكنو',
      'الروك',
      'البلوز',
      'امريكي',
      'الكنترى',
      'الهيب هوب',
      'الهيب هوب / آر أند بي',
      'اللاتينية',
      'الموسيقى الكلاسيكية',
    ],
  },
};
type InterestCategory = keyof typeof interestedData;

@Component({
  selector: 'app-interest-me',
  imports: [RouterLink],
  templateUrl: './interest-me.component.html',
  styleUrl: './interest-me.component.scss',
})
export class InterestMeComponent implements OnInit {
  selectedMeList: string[] = [];
  interestedData = { ...interestedData };

  ngOnInit(): void {}

  intrestedMe(item: string, index: number, category: InterestCategory) {
    this.selectedInterested(item);
    this.deleteByCategory(index, category);
  }

  deleteByCategory(index: number, category: InterestCategory) {
    this.interestedData[category].list.splice(index, 1);
  }

  selectedInterested(item: string) {
    this.selectedMeList.push(item);
  }

  deleteInterest(index: number) {
    this.selectedMeList.splice(index, 1);
  }
}
// what is your favourite exercise = []
