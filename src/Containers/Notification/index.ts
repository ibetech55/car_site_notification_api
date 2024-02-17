import { CreateNotificationUseCase} from "../../Presentation/Notifications/CreateNotificationUseCase";
import { NotificationRepository } from "../../Repositories/Notification/notification.repository";
import { UserNotificationsRepository } from "../../Repositories/UserNotification/user.notification.repository";

const notificationRepsoitory = new NotificationRepository();
const userNotificationRepository = new UserNotificationsRepository();
const createNotification = new CreateNotificationUseCase(notificationRepsoitory, userNotificationRepository);

export { createNotification };
