import { Migration } from '@mikro-orm/migrations';

export class Migration20220210223810 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` varchar(36) not null, `created_at` datetime not null, `updated_at` datetime not null, `username` varchar(255) not null, `email` varchar(255) not null, `password` varchar(255) not null, `firstname` varchar(255) null, `lastname` varchar(255) null, `authority` varchar(255) not null, `address` varchar(255) null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user` add unique `user_username_unique`(`username`);');
    this.addSql('alter table `user` add unique `user_email_unique`(`email`);');
    this.addSql('alter table `user` add primary key `user_pkey`(`id`);');

    this.addSql('create table `product` (`id` varchar(36) not null, `created_at` datetime not null, `updated_at` datetime not null, `name_product` varchar(255) not null, `description_product` varchar(255) not null, `price_product` int not null, `is_available` tinyint(1) not null, `created_by` varchar(255) not null, `edited_by` varchar(255) not null, `discount_product` varchar(255) not null, `color_product` varchar(255) not null, `product_owner_id` varchar(36) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `product` add index `product_product_owner_id_index`(`product_owner_id`);');
    this.addSql('alter table `product` add primary key `product_pkey`(`id`);');

    this.addSql('create table `order` (`id` varchar(36) not null, `created_at` datetime not null, `updated_at` datetime not null, `status` varchar(255) not null, `creator_id` varchar(36) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `order` add index `order_creator_id_index`(`creator_id`);');
    this.addSql('alter table `order` add primary key `order_pkey`(`id`);');

    this.addSql('create table `category` (`id` varchar(36) not null, `created_at` datetime not null, `updated_at` datetime not null, `libelle` varchar(255) not null, `created_by` varchar(255) not null, `updated_by` varchar(255) not null, `description` varchar(255) not null, `creator_id` varchar(36) not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `category` add index `category_creator_id_index`(`creator_id`);');
    this.addSql('alter table `category` add primary key `category_pkey`(`id`);');

    this.addSql('alter table `product` add constraint `product_product_owner_id_foreign` foreign key (`product_owner_id`) references `user` (`id`) on update cascade;');

    this.addSql('alter table `order` add constraint `order_creator_id_foreign` foreign key (`creator_id`) references `user` (`id`) on update cascade;');

    this.addSql('alter table `category` add constraint `category_creator_id_foreign` foreign key (`creator_id`) references `user` (`id`) on update cascade;');
  }

}
