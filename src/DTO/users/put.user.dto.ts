import { Roles } from '../../entity/RolesEnum';

type Role = keyof typeof Roles;

export interface PutUserDto {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  authority: Role;
  address: string;
}
