import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type, Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, IsDate, IsEnum } from 'class-validator';
import { ClaimReason, ClaimStatus } from 'src/shared/enums';

export class ClaimDto {
  @IsString()
  @IsOptional()
  claim_id: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  customer_id: string;

  @Expose()
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value) || null)
  @ApiProperty({
    type: String,
    format: 'date-time',
    example: '2024-04-01T12:25:00Z',
  })
  claim_date: Date;

  @Expose()
  @IsOptional()
  @IsEnum(ClaimReason)
  @ApiProperty({
    enum: ClaimReason,
    example: 'I want a refound',
  })
  @Type(() => String)
  claim_type?: ClaimReason;

  @Expose()
  @IsEmail()
  @ApiProperty({
    type: String,
  })
  claim_description: string;

  @Expose()
  @IsOptional()
  @IsEnum(ClaimStatus)
  @ApiProperty({
    enum: ClaimStatus,
    example: 'In Process',
  })
  @Type(() => String)
  claim_status: ClaimStatus;
}
