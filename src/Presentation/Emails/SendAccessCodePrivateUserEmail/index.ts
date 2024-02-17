import { EmailHandler } from "../../../Utils/EmailHandler";
import { CreateNotificationUseCase } from "../../Notifications/CreateNotificationUseCase";
import accessCodeTempl from "../../../Utils/EmailHandler/Templates/accessCode.json";
import { EmailAccessCodePrivateUserDto } from "../../../Data/Emails/EmailAccessCodePrivateUserDto";
import { CAR_SITE_FRONTEND_URL } from "../../../Configs/dotenv/env_vars";

interface IEmailVars {
  access_code: string;
  access_code_token: string;
  frontend_url: string;
}
class SendAccessCodePrivateUserEmail {
  private _createNotificationUseCase: CreateNotificationUseCase;
  private _emailHandler: EmailHandler;
  constructor(
    createNotificationUseCase: CreateNotificationUseCase,
    emailHandler: EmailHandler
  ) {
    this._createNotificationUseCase = createNotificationUseCase;
    this._emailHandler = emailHandler;
  }

  async exexute(values: EmailAccessCodePrivateUserDto) {
    await this._createNotificationUseCase.execute({
      data: JSON.stringify(values),
      type: values.type,
    });
    await this._emailHandler.handle<IEmailVars>(
      {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
      },
      accessCodeTempl,
      {
        access_code: values.access_code,
        frontend_url: CAR_SITE_FRONTEND_URL,
        access_code_token: values.access_code_token,
      }
    );
  }
}

export { SendAccessCodePrivateUserEmail };
