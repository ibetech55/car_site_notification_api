import { CreateNotificationDto } from "../../../Data/Notification/createNotificationDto";
import { INotificationRepository } from "../../../Repositories/Notification/INotificationRepository"
import { IUserNotificationRepository } from "../../../Repositories/UserNotification/IUserNotificationRepository";

class CreateNotificationUseCase {
    private _notificationRepository:INotificationRepository;
    private _userNotificationRepository: IUserNotificationRepository;
    constructor(notificationRepository:INotificationRepository, userNotificationRepository: IUserNotificationRepository) {
        this._notificationRepository = notificationRepository
        this._userNotificationRepository = userNotificationRepository
    }

    async execute(values:CreateNotificationDto){
        const data = await this._notificationRepository.create(values)
        const userData = JSON.parse(data.data)
        this._userNotificationRepository.create({
            first_name: userData.first_name ? userData.first_name : null,
            last_name: userData.last_name ? userData.last_name : null,
            dealership_name: userData.dealership_name ? userData.dealership_name : null,
            email: userData.email,
            user_id: userData.user_id,
            notification_id: data._id
        })
        return data
    }
}

export {CreateNotificationUseCase}