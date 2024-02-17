import { Repository } from "typeorm";
import { AppDataSource } from "../../Infra/Database/connection";
import { INotificationRepository } from "./INotificationRepository";
import { Notifications } from "../../Entities/notification";
import { CreateNotificationDto } from "../../Data/Notification/createNotificationDto";
export class NotificationRepository implements INotificationRepository {
  private readonly repository: Repository<Notifications>;

  constructor() {
    this.repository = AppDataSource.getRepository<Notifications>(Notifications);
  }

  async create(data: Notifications): Promise<any> {
    const createdUser = this.repository.create(data);
    const newUser = await this.repository.save(createdUser);
    return newUser;
  }
  getAll(): Promise<Notifications[]> {
    throw new Error("Method not implemented.");
  }
  getNotificationById(id: string): Promise<Notifications> {
    throw new Error("Method not implemented.");
  }
  deleteNoification(id: string): Promise<Notifications> {
    throw new Error("Method not implemented.");
  }
  updateNoification(id: string, data: Notifications): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
}
