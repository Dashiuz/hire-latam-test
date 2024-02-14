import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { Gender } from 'src/shared/enums';

export class CustomerDto {
  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  name: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  id_number: string;

  @Expose()
  @IsOptional()
  @IsDate()
  @ApiProperty({
    type: String,
    format: 'date',
    example: '2024-04-01T12:25:00Z',
  })
  date_of_birth: string;

  @Expose()
  @IsOptional()
  @IsEnum(Gender)
  @ApiProperty({
    enum: Gender,
    example: 'Male',
  })
  @Type(() => String)
  gender: Gender;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  email: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  address: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  celphone: string;
}
