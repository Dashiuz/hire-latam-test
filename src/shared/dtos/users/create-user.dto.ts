import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type, Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { Gender } from 'src/shared/enums';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  uuid?: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  name: string;

  @Expose()
  @IsEmail()
  @ApiProperty({
    type: String,
  })
  id_number: string;

  @Expose()
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value) || null)
  @ApiProperty({
    type: String,
    format: 'date',
    example: '2024-04-01',
  })
  date_of_birth?: string;

  @Expose()
  @IsOptional()
  @IsEnum(Gender)
  @ApiProperty({
    enum: Gender,
    example: 'Female',
  })
  @Type(() => String)
  gender?: Gender;

  @Expose()
  @IsEmail()
  @ApiProperty({
    type: String,
  })
  email: string;

  @Expose()
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  address?: string;

  @IsString()
  @ApiProperty({
    type: String,
  })
  password: string;
}
