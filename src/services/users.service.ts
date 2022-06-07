import { CRUD } from "../common/crud.interface";
import usersDao from "../DAO/users.dao";
import { CreateUserDto } from "../DTO/users/create.user.dto";
import { PatchUserDto } from "../DTO/users/patch.user.dto";
import { PutUserDto } from "../DTO/users/put.user.dto";

class UsersService implements CRUD {
    
    async create(resource: CreateUserDto) {
        return usersDao.addUser(resource);
    }

    async deleteById(id: string) {
        return usersDao.removeUserById(id);
    }

    async list(limit: number, page: number) {
        return usersDao.getUsers(limit,page);
    }

    async patchById(id: string, resource: PatchUserDto) {
        return usersDao.patchUserById(id, resource);
    }

    async readById(id: string) {
        return usersDao.getUserById(id);
    }

    async putById(id: string, resource: PutUserDto) {
        return usersDao.putUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return usersDao.getUserByEmail(email);
    }
    
    async getUserByEmailWithPassword(email: string) {
    return usersDao.getUserByEmailWithPassword(email);
}
}

export default new UsersService();