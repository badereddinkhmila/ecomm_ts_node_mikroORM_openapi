export enum Roles {
    ROLE_CLIENT= 'ROLE_CLIENT',
    ROLE_PROVIDER= 'ROLE_PROVIDER',
    ROLE_SUPER_ADMIN= 'ROLE_SUPER_ADMIN'
}

export type Role = keyof typeof Roles;
