import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiConsumes,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto, AuthDto } from 'src/shared/dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @ApiOperation({ summary: 'User log-in' })
  @ApiBody({ type: SignInDto })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200,
    description: 'the user has successfully logged in',
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
  signIn(@Body(ValidationPipe) data: SignInDto) {
    return this.authService.signIn(data);
  }
}
