import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ClaimStatus } from 'src/shared/enums';

export class updateClaimDto {
  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  claim_status: ClaimStatus;
}
