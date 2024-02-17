import { SendAccessCodeEmailDealership } from "../../Presentation/Emails/SendAccessCodeEmailDealership";
import { EmailHandlerDealership } from "../../Utils/EmailHandler/Dealership";
import { createNotification } from "../Notification";

const emailHandlerDealership = new EmailHandlerDealership();
const sendAccessCodeEmailDealership = new SendAccessCodeEmailDealership(
  createNotification,
  emailHandlerDealership
);
export { sendAccessCodeEmailDealership };
