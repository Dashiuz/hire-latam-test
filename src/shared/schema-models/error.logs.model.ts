import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ErrorLogDocument = HydratedDocument<ErrorLog>;

@Schema()
export class ErrorLog {
  @Prop()
  log_date: Date;

  @Prop()
  error_code: string;

  @Prop()
  error_message: string;

  @Prop()
  full_error: string;
}

export const ErrorLogSchema = SchemaFactory.createForClass(ErrorLog);
