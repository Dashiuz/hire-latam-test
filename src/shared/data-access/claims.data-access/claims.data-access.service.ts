import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Claim } from 'src/shared/interfaces';
import { CreateClaimDto } from 'src/shared/dtos';

@Injectable()
export class ClaimsDataAccessService {
  constructor(@InjectModel('claims') private claimModel: Model<Claim>) {}

  async create(claim: CreateClaimDto) {
    try {
      const createdClaim = new this.claimModel(claim);
      return createdClaim.save();
    } catch (err) {}
  }

  async findAll() {
    try {
      return await this.claimModel.find();
    } catch (err) {}
  }

  async findOneById(id: string) {
    try {
      return await this.claimModel.findById(id);
    } catch (err) {}
  }

  async findOneByEmail(email: string) {
    try {
      return await this.claimModel.findOne({ email });
    } catch (err) {}
  }

  async update(id: string, claim: any) {
    try {
      return await this.claimModel.findByIdAndUpdate(id, claim, {
        new: true,
      });
    } catch (err) {}
  }

  async remove(id: string) {
    try {
      return await this.claimModel.findByIdAndDelete(id);
    } catch (err) {}
  }
}
