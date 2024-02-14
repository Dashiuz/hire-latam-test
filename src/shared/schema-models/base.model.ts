import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Base {
  @Prop()
  id: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  deleted_at: Date;

  @Prop()
  created_by: string;

  @Prop()
  updated_by: string;

  @Prop()
  deleted_by: string;
}

export const Basechema = SchemaFactory.createForClass(Base);
