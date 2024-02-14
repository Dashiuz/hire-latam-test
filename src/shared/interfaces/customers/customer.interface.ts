import { Document } from 'mongoose';
import { Gender } from 'src/shared/enums';

export interface Customer extends Document {
  name: string;
  date_of_birth: Date;
  gender: Gender;
  email: string;
  address: string;
  celphone: string;
}
