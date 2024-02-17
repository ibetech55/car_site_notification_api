import { CreateUserNotificationDto } from "../../Data/UserNotification/CreateUserNotificationDto";
import { UserNotifications } from "../../Entities/user_notification";

export interface IUserNotificationRepository {
    create(data: CreateUserNotificationDto): Promise<UserNotifications>;
    // getAll(): Promise<Notifications[]>;
    // getNotificationById(id: string): Promise<Notifications>;
    // deleteNoification(id: string): Promise<Notifications>;
    // updateNoification(id: string, data: Notifications): Promise<Boolean>;
  }