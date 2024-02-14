import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @ApiProperty({
    type: String,
    required: true,
  })
  email: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
  })
  password: string;
}
