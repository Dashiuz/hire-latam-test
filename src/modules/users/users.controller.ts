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
  CreateUserDto,
  UserDto,
  UpdateUserDto,
  AuthDto,
} from 'src/shared/dtos';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new User' })
  @ApiBody({ type: CreateUserDto })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: AuthDto,
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
  create(@Body(ValidationPipe) user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  @ApiBearerAuth('Authentication')
  @UseGuards(AuthenticationGuard)
  @ApiOperation({ summary: `find all users registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: UserDto,
    isArray: true,
    description: 'Users array has been successfully retrieved.',
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
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('Authentication')
  @UseGuards(AuthenticationGuard)
  @ApiOperation({ summary: `find a user registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    type: UserDto,
    isArray: true,
    description: 'User has been successfully retrieved.',
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
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiBearerAuth('Authentication')
  @UseGuards(AuthenticationGuard)
  @ApiBody({ type: UpdateUserDto })
  @ApiOperation({ summary: `updates a user registered in the system` })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 201,
    type: UserDto,
    description: 'User has been successfully updated.',
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
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @ApiBearerAuth('Authentication')
  @UseGuards(AuthenticationGuard)
  @ApiOperation({
    summary: `removes a user from the system`,
  })
  @ApiResponse({
    status: 204,
    description: 'user has been removed',
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
    return this.usersService.remove(id);
  }
}
