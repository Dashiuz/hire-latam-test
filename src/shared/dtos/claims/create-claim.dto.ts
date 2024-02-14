import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateClaimDto {
  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  claim_type: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  claim_description: string;
}
