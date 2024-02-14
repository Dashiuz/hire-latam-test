import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiConsumes,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/shared/guards';
import { ClaimDto, CreateClaimDto, updateClaimDto } from 'src/shared/dtos';
import { ClaimsService } from './claims.service';

@ApiTags('Claims')
@Controller('claims')
@ApiBearerAuth('Authentication')
@UseGuards(AuthenticationGuard)
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new Claim' })
  @ApiBody({ type: CreateClaimDto })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: ClaimDto,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request, check parameters.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Endpoint not found.',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server Error, something unexpected happened.',
  })
  create(@Body(ValidationPipe) claim: CreateClaimDto) {
    return this.claimsService.create(claim);
  }

  @Get()
  @ApiOperation({ summary: `find all Claims registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: ClaimDto,
    isArray: true,
    description: 'Claims array has been successfully retrieved.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request, check parameters.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Endpoint not found.',
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Unauthorized, check your credentials.',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Forbidden, check your credentials.',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server Error, something unexpected happened.',
  })
  findAll() {
    return this.claimsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `find a Claim registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: ClaimDto,
    isArray: true,
    description: 'Claim has been successfully retrieved.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request, check parameters.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Endpoint not found.',
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Unauthorized, check your credentials.',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Forbidden, check your credentials.',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server Error, something unexpected happened.',
  })
  findOne(@Param('id') id: string) {
    return this.claimsService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: updateClaimDto })
  @ApiOperation({ summary: `updates a Claim registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    type: ClaimDto,
    description: 'Claim has been successfully updated.',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request, check parameters.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Endpoint not found.',
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Unauthorized, check your credentials.',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Forbidden, check your credentials.',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server Error, something unexpected happened.',
  })
  update(@Param('id') id: string, @Body() claim: updateClaimDto) {
    return this.claimsService.update(id, claim);
  }

  @Delete(':id')
  @ApiOperation({
    summary: `removes a Claim from the system`,
  })
  @ApiResponse({
    status: 204,
    description: 'Claim has been removed',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request, check parameters.',
  })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Endpoint not found.',
  })
  @ApiUnauthorizedResponse({
    status: 401,
    description: 'Unauthorized, check your credentials.',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Forbidden, check your credentials.',
  })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal server Error, something unexpected happened.',
  })
  remove(@Param('id') id: string) {
    return this.claimsService.remove(id);
  }
}
