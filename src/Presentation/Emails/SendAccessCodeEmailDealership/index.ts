import { CreateNotificationUseCase } from "../../Notifications/CreateNotificationUseCase";
import accessCodeTemplDealership from "../../../Utils/EmailHandler/Templates/accessCodeDealership.json";
import { EmailHandlerDealership } from "../../../Utils/EmailHandler/Dealership";
import { EmailAccessCodeDealershipDto } from "../../../Data/Emails/EmailAccessCodeDealershipDto";
import { CAR_SITE_FRONTEND_URL } from "../../../Configs/dotenv/env_vars";

interface IEmailVars {
  access_code: string;
  access_code_token: string;
  frontend_url: string;
}
class SendAccessCodeEmailDealership {
  private _createNotificationUseCase: CreateNotificationUseCase;
  private _emailHandler: EmailHandlerDealership;
  constructor(
    createNotificationUseCase: CreateNotificationUseCase,
    emailHandler: EmailHandlerDealership
  ) {
    this._createNotificationUseCase = createNotificationUseCase;
    this._emailHandler = emailHandler;
  }

  async exexute(values: EmailAccessCodeDealershipDto) {
    console.log(CAR_SITE_FRONTEND_URL)
    await this._createNotificationUseCase.execute({
      data: JSON.stringify(values),
      type: values.type,
    });
    await this._emailHandler.handle<IEmailVars>(
      {
        dealership_name: values.dealership_name,
        email: values.email,
      },
      accessCodeTemplDealership,
      {
        access_code: values.access_code,
        access_code_token: values.access_code_token,
        frontend_url: CAR_SITE_FRONTEND_URL,
      }
    );
  }
}

export { SendAccessCodeEmailDealership };
