import { QueueListener } from "./QueueListener"
import { AccessCodePrivateUserQueue } from "./Actions/AccessCodePrivateUserQueue"
import { sendAccessCodePrivateUserEmail } from "../../Containers/Email/SendAccesscodePrivateUserEmail"
import { AccessCodeDealershipQueue } from "./Actions/AccessCodeDealershipQueue"
import { sendAccessCodeEmailDealership } from "../../Containers/Email/SendAccesscodeEmailDealership"

const ql = new QueueListener(new AccessCodePrivateUserQueue(sendAccessCodePrivateUserEmail), new AccessCodeDealershipQueue(sendAccessCodeEmailDealership))
export default ql