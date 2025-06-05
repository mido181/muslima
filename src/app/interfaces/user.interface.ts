export interface Iuser {
  user: any;
  _id: string;
  name: string;
  email: string;
  country: string;
  gender: string;
  city: string;
  age:number;
  height: number;
  weight: number;
  profilePicture: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isOnline: boolean;
  hideAge: boolean;
  hideLastSeen: boolean;
  lastSeen: Date;
  birthDate:Date;
}