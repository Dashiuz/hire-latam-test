import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { UserDto } from 'src/shared/dtos';

export class AuthDto {
  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  token: string;

  @Expose()
  @Type(() => UserDto)
  @ApiProperty({
    type: () => UserDto,
  })
  user: UserDto;
}
