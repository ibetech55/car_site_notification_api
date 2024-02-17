import { Repository } from "typeorm";
import { CreateUserNotificationDto } from "../../Data/UserNotification/CreateUserNotificationDto";
import { UserNotifications } from "../../Entities/user_notification";
import { IUserNotificationRepository } from "./IUserNotificationRepository";
import { AppDataSource } from "../../Infra/Database/connection";

class UserNotificationsRepository implements IUserNotificationRepository {
    private readonly repository: Repository<UserNotifications>;

    constructor() {
        this.repository = AppDataSource.getRepository<UserNotifications>(UserNotifications);
    }
    async create(data: CreateUserNotificationDto): Promise<UserNotifications> {
        const createdUser = this.repository.create(data);
        const newUser = await this.repository.save(createdUser);
        return newUser;
    }
}

export {UserNotificationsRepository}