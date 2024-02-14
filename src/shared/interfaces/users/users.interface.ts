import { Document } from 'mongoose';

export interface User extends Document {
  uuid: string;
  name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  address: string;
  celphone: string;
  password: string;
}
