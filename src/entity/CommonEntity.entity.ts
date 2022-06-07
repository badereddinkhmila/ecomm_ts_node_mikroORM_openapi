import { PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

export abstract class CommonEntity {

  @PrimaryKey({ type: 'uuid' })
  public id: string = v4();

  @Property()
  public created_at: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updated_at: Date = new Date();

}