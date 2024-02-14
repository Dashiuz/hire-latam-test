import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/shared/interfaces';
import { CreateUserDto } from 'src/shared/dtos';

@Injectable()
export class UsersDataAccessService {
  constructor(@InjectModel('users') private userModel: Model<User>) {}

  async create(user: CreateUserDto) {
    try {
      const createdUser = new this.userModel(user);
      return createdUser.save();
    } catch (err) {}
  }

  async findAll() {
    try {
      return await this.userModel.find();
    } catch (err) {}
  }

  async findOneById(id: string) {
    try {
      return await this.userModel.findById(id);
    } catch (err) {}
  }

  async findOneByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email });
    } catch (err) {}
  }

  async update(id: string, user: any) {
    try {
      return await this.userModel.findByIdAndUpdate(id, user, {
        new: true,
      });
    } catch (err) {}
  }

  async remove(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id);
    } catch (err) {}
  }
}
