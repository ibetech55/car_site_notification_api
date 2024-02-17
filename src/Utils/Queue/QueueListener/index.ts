import { AccessCodeDealershipQueue } from "../Actions/AccessCodeDealershipQueue";
import { AccessCodePrivateUserQueue } from "../Actions/AccessCodePrivateUserQueue";

class QueueListener {
  private _accessCodePrivateUserQueue: AccessCodePrivateUserQueue;
  private _accesCodeDealershipQueue: AccessCodeDealershipQueue;

  constructor(
    accesCodeQueue: AccessCodePrivateUserQueue,
    accesCodeDealershipQueue: AccessCodeDealershipQueue
  ) {
    this._accessCodePrivateUserQueue = accesCodeQueue;
    this._accesCodeDealershipQueue = accesCodeDealershipQueue;
  }

  execute() {
    console.log("Connected to que");
    this._accessCodePrivateUserQueue.execute();
    this._accesCodeDealershipQueue.execute();
  }
}

export { QueueListener };
