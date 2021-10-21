import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindOneUserDto } from './dto/find-one.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async findOne(userFilterQuery: FindOneUserDto): Promise<User> {
        return this.userModel.findOne(userFilterQuery);
    }

    async find(userFilterQuery): Promise<User[]> {
        return this.userModel.find(userFilterQuery);
    }

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async findOneAndUpdate(
        userFilterQuery,
        user: Partial<User>,
    ): Promise<User> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user, {
            new: true,
        });
    }
}
