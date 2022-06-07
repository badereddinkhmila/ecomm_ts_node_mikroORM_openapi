import { EntityManager, Connection, IDatabaseDriver } from '@mikro-orm/core';
import debug from 'debug';
import { CreateUserDto } from '../DTO/users/create.user.dto';
import { PatchUserDto } from '../DTO/users/patch.user.dto';
import { PutUserDto } from '../DTO/users/put.user.dto';
import { Roles } from '../entity/RolesEnum';
import User from '../entity/User.entity';
import { UserRepository } from '../repository/UserRepository';
import MicroORMService from '../services/mikro-orm.service';

const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    
    private userRepository!:UserRepository;
    private em!:EntityManager<IDatabaseDriver<Connection>>;
    private allowedPatchFields = [
        'password',
        'firstname',
        'lastname',
        'authority',
    ];
    
    constructor() {
        MicroORMService.getORM()
            .then(em => {
                this.userRepository = em.fork().getRepository(User);
                this.em = em.fork();
            }); 
        log('Created new instance of UsersDao');
    }
    
    async addUser(user: CreateUserDto) {
        let newUser = new User();
        try{
            newUser=this.mapDtoToEntity(newUser,user,Object.keys(user))
            newUser.authority=Roles.ROLE_CLIENT;
            await this.userRepository.persistAndFlush(newUser);
            return newUser;
        }catch(error){
            console.log(error);
        }
    }

    async getUsers(limit: number, page: number) {
        const users:User[] = await this.userRepository.find({},{limit:limit ,offset:page*limit});
        return users;
    }
    
    async getUserById(userId: string) {
        const user:User = await this.userRepository.findOne({id:userId});
        return user;
    }

    async putUserById(userId: string, user: PutUserDto) {
        let currentUser:User = await this.userRepository.findOne({id : userId});
        if(currentUser){
            currentUser = this.mapDtoToEntity(currentUser,user,Object.keys(user));
            await this.userRepository.flush();
            return `${currentUser.id} updated via put`;
        }
        return `unable to update ${currentUser.id} via put`;
    }
    
    async patchUserById(userId: string, user: PatchUserDto) {
        let currentUser:User = await this.userRepository.findOne({id : userId});
        if(currentUser){
            currentUser= this.mapDtoToEntity(currentUser,user,this.allowedPatchFields)
            await this.userRepository.flush();
            return `patch success`;
        }
        return 'patch fail';
    }

    async removeUserById(userId: string) {
        const user = await this.userRepository.findOne({id:userId});
        if(user) {
            this.userRepository.remove(user);
            return true;
        }
        return false;
    }

    async getUserByEmail(email: string) {
        const currentUser = await this.userRepository.findOne({ email: email })
        return currentUser;
    }

    async getUserByEmailWithPassword(email: string) {
        return await this.userRepository.findOne({ email: email });
    }

    mapDtoToEntity(entity: User,
        DTO: CreateUserDto|PatchUserDto|PatchUserDto,
        allowedFeilds:string[]
        ){
        for (let field of allowedFeilds) {
            if (field in DTO) {
                // @ts-ignore
                entity[field] = DTO[field];
            }
        }
        return entity;
    }
    
}
export default new UsersDao();
