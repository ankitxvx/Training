import { Document, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import UserModel, {UserDocument}  from '../modals/user';

// Ensure the input type is an object that matches the user schema
export function createUser(input: Partial<UserDocument>) {
    return UserModel.create(input);
}

export function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = { lean: true }) {
    return UserModel.find(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    options: QueryOptions
) {
    return UserModel.findByIdAndUpdate(query, update, options);
}

export function deleteUser(query: FilterQuery<UserDocument>) {
    return UserModel.deleteOne(query);
}
