import { queueConnection } from "../../Connection";
import { ACCESS_CODE_DEALERSHIP } from "../../../../Configs/QueueTypes";
import { SendAccessCodeEmailDealership } from "../../../../Presentation/Emails/SendAccessCodeEmailDealership";
import { EmailAccessCodeDealershipDto } from "../../../../Data/Emails/EmailAccessCodeDealershipDto";

class AccessCodeDealershipQueue {
  private _sendAccessCodeEmailDealership: SendAccessCodeEmailDealership;
  constructor(sendAccessCodeEmailDealership: SendAccessCodeEmailDealership) {
    this._sendAccessCodeEmailDealership = sendAccessCodeEmailDealership;
  }

  async execute() {
    const { channel } = await queueConnection();
    await channel.assertQueue(ACCESS_CODE_DEALERSHIP);
    channel.consume(ACCESS_CODE_DEALERSHIP, async (message) => {
      const messageData: EmailAccessCodeDealershipDto = JSON.parse(
        message.content.toString()
      );
      await this._sendAccessCodeEmailDealership.exexute({
        email: messageData.email,
        user_id: messageData.user_id,
        type: ACCESS_CODE_DEALERSHIP,
        access_code: messageData.access_code,
        dealership_name: messageData.dealership_name,
        access_code_token: messageData.access_code_token
      });
      console.log(`Data Saved ${ACCESS_CODE_DEALERSHIP} ${new Date()}`);
      channel.ack(message);
    });
  }
}

export { AccessCodeDealershipQueue };
