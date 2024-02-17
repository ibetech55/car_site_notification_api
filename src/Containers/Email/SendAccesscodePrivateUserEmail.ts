import { SendAccessCodePrivateUserEmail } from "../../Presentation/Emails/SendAccessCodePrivateUserEmail";
import { EmailHandler } from "../../Utils/EmailHandler";
import { createNotification } from "../Notification";

const emailHandler = new EmailHandler();
const sendAccessCodePrivateUserEmail = new SendAccessCodePrivateUserEmail(
  createNotification,
  emailHandler
);
export { sendAccessCodePrivateUserEmail };
