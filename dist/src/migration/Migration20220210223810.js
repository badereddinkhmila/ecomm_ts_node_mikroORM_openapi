"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220210223810 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220210223810 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.Migration20220210223810 = Migration20220210223810;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyMjAyMTAyMjM4MTAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlncmF0aW9uL01pZ3JhdGlvbjIwMjIwMjEwMjIzODEwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTlDLEVBQUU7O1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnWUFBZ1ksQ0FBQyxDQUFDO1lBQzlZLElBQUksQ0FBQyxNQUFNLENBQUMsbUVBQW1FLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsTUFBTSxDQUFDLDZEQUE2RCxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBRXJFLElBQUksQ0FBQyxNQUFNLENBQUMseWZBQXlmLENBQUMsQ0FBQztZQUN2Z0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO1lBQ3JHLElBQUksQ0FBQyxNQUFNLENBQUMsNkRBQTZELENBQUMsQ0FBQztZQUUzRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9PQUFvTyxDQUFDLENBQUM7WUFDbFAsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMseURBQXlELENBQUMsQ0FBQztZQUV2RSxJQUFJLENBQUMsTUFBTSxDQUFDLHFWQUFxVixDQUFDLENBQUM7WUFDblcsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsK0RBQStELENBQUMsQ0FBQztZQUU3RSxJQUFJLENBQUMsTUFBTSxDQUFDLHNKQUFzSixDQUFDLENBQUM7WUFFcEssSUFBSSxDQUFDLE1BQU0sQ0FBQyxzSUFBc0ksQ0FBQyxDQUFDO1lBRXBKLElBQUksQ0FBQyxNQUFNLENBQUMsNElBQTRJLENBQUMsQ0FBQztRQUM1SixDQUFDO0tBQUE7Q0FFRjtBQTNCRCwwREEyQkMifQ==