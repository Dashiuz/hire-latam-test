import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import { IsOptional, IsEnum, IsString, IsDate } from 'class-validator';
import { PolicyTypes, PolicyStatus } from 'src/shared/enums';

export class PolicyDto {
  @Expose()
  @IsOptional()
  @IsEnum(PolicyTypes)
  @ApiProperty({
    enum: PolicyTypes,
    example: 'Life Insurance',
  })
  @Type(() => String)
  policy_type: PolicyTypes;

  @Expose()
  @IsOptional()
  @IsEnum(PolicyStatus)
  @ApiProperty({
    enum: PolicyStatus,
    example: 'Active',
  })
  @Type(() => String)
  policy_status: PolicyStatus;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  customer_id: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
  })
  policy_contract_id: string;

  @Expose()
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value) || null)
  @ApiProperty({
    type: String,
    format: 'date',
    example: '2024-04-01',
  })
  started_date: string;

  @Expose()
  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value) || null)
  @ApiProperty({
    type: String,
    format: 'date',
    example: '2024-04-01',
  })
  expires_in: string;
}
