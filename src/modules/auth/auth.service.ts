import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersDataAccessService } from 'src/shared/data-access';
import { validatePassword } from 'src/shared/tools';
import { SignInDto } from 'src/shared/dtos';

@Injectable()
export class AuthService {
  expiresIn: string;
  secret: string;

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private usersDataAccess: UsersDataAccessService,
  ) {
    this.expiresIn = this.configService.get('api.expiresIn');
    this.secret = this.configService.get('api.secret');
  }

  async signIn({ email, password }: SignInDto) {
    const userData = await this.usersDataAccess.findOneByEmail(email);

    if (!userData) {
      throw new UnauthorizedException('Invalid user Email');
    }

    const validated = await validatePassword(password, userData.password);

    if (!validated) {
      throw new UnauthorizedException('Invalid user Password');
    }

    const tokenObject = {
      id: userData._id,
      uuid: userData.uuid,
      email: userData.email,
    };

    const tokenOptions = {
      expiresIn: this.expiresIn,
      secret: this.secret,
    };

    return {
      token: this.jwtService.sign(tokenObject, tokenOptions),
      user: userData,
    };
  }
}
