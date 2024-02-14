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
import {
  CustomerDto,
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/shared/dtos';
import { CustomersService } from './customers.service';

@ApiTags('Customers')
@Controller('customers')
@ApiBearerAuth('Authentication')
@UseGuards(AuthenticationGuard)
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new Customer' })
  @ApiBody({ type: CreateCustomerDto })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CustomerDto,
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
  create(@Body(ValidationPipe) customer: CreateCustomerDto) {
    return this.customersService.create(customer);
  }

  @Get()
  @ApiOperation({ summary: `find all Customers registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: CustomerDto,
    isArray: true,
    description: 'Customers array has been successfully retrieved.',
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
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: `find a Customer registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: CustomerDto,
    isArray: true,
    description: 'Customer has been successfully retrieved.',
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
    return this.customersService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateCustomerDto })
  @ApiOperation({ summary: `updates a Customer registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    type: CustomerDto,
    description: 'Customer has been successfully updated.',
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
  update(@Param('id') id: string, @Body() customer: UpdateCustomerDto) {
    return this.customersService.update(id, customer);
  }

  @Delete(':id')
  @ApiOperation({
    summary: `removes a Customer from the system`,
  })
  @ApiResponse({
    status: 204,
    description: 'Customer has been removed',
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
    return this.customersService.remove(id);
  }
}
