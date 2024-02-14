import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto, CreateUserDto } from 'src/shared/dtos';
import { UsersDataAccessService } from 'src/shared/data-access';
import { encryptPassword } from 'src/shared/tools';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    private usersDataAccess: UsersDataAccessService,
    private jwtService: JwtService,
  ) {}

  async create(user: CreateUserDto) {
    // Generate password encryption
    user.password = await encryptPassword(user.password);

    // Generate uuid
    user.uuid = uuidv4();

    // Save the new user in the database
    const userData = await this.usersDataAccess.create({ ...user });

    // New user log-in to generate the auth token
    const token = this.jwtService.sign({
      id: userData._id,
      uuid: user.uuid,
      email: userData.email,
    });

    return {
      token,
      user: {
        ...userData.toObject(),
      },
    };
  }

  async findAll() {
    return await this.usersDataAccess.findAll();
  }

  async findOne(id: string) {
    return await this.usersDataAccess.findOneById(id);
  }

  async update(id: string, user: UpdateUserDto) {
    return this.usersDataAccess
      .findOneById(id)
      .then(() => this.usersDataAccess.update(id, user));
  }

  async remove(id: string) {
    return await this.usersDataAccess.remove(id);
  }
}
