import { queueConnection } from "../../Connection";
import { SendAccessCodePrivateUserEmail } from "../../../../Presentation/Emails/SendAccessCodePrivateUserEmail";
import { ACCESS_CODE_PRIVATE_USER } from "../../../../Configs/QueueTypes";
import { EmailAccessCodePrivateUserDto } from "../../../../Data/Emails/EmailAccessCodePrivateUserDto";
import { CAR_SITE_FRONTEND_URL } from "../../../../Configs/dotenv/env_vars";

class AccessCodePrivateUserQueue {
  private _sendAccessCodePrivateUserEmail: SendAccessCodePrivateUserEmail;
  constructor(sendAccessCodePrivateUserEmail: SendAccessCodePrivateUserEmail) {
    this._sendAccessCodePrivateUserEmail = sendAccessCodePrivateUserEmail;
  }

  async execute() {
    const { channel } = await queueConnection();
    await channel.assertQueue(ACCESS_CODE_PRIVATE_USER);
    channel.consume(ACCESS_CODE_PRIVATE_USER, async (message) => {
      const messageData: EmailAccessCodePrivateUserDto = JSON.parse(
        message.content.toString()
      );
      await this._sendAccessCodePrivateUserEmail.exexute({
        email: messageData.email,
        user_id: messageData.user_id,
        type: ACCESS_CODE_PRIVATE_USER,
        access_code: messageData.access_code,
        last_name: messageData.last_name,
        first_name: messageData.first_name,
        access_code_token: messageData.access_code_token
      });
      console.log(`Data Saved ${ACCESS_CODE_PRIVATE_USER} ${new Date()}`);
      channel.ack(message);
    });
  }
}

export { AccessCodePrivateUserQueue };
