import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersDataAccessService } from 'src/shared/data-access';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersDataAccess: UsersDataAccessService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('api.secret'),
    });
  }

  async validate({ id }) {
    const user = await this.usersDataAccess.findOneById(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
