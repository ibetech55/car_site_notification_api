import { CreateNotificationDto } from "../../Data/Notification/createNotificationDto";
import { Notifications } from "../../Entities/notification";

export interface INotificationRepository {
    create(data: CreateNotificationDto): Promise<Notifications>;
    getAll(): Promise<Notifications[]>;
    getNotificationById(id: string): Promise<Notifications>;
    deleteNoification(id: string): Promise<Notifications>;
    updateNoification(id: string, data: Notifications): Promise<Boolean>;
  }