import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("user_notifications")
class UserNotifications {
  @PrimaryColumn()
  _id?: string;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @Column()
  dealership_name?: string;

  @Column()
  email: string;

  @Column()
  user_id: string;

  @Column()
  notification_id: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { UserNotifications };
