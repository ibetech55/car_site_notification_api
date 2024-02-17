import nodemailer from "nodemailer";
import { mailConfig } from "../../../Configs/mailer";
import { MAILER_USER } from "../../../Configs/dotenv/env_vars";
import { JsonParser } from "../JsonParser";
interface ITemplate {
  title: string;
  template: string;
  name: string;
}

interface IEmailData {
  dealership_name: string;
  email: string;
}

class EmailHandlerDealership {
  private _mailer = nodemailer.createTransport(mailConfig);
  private _jsonParser: JsonParser;
  constructor() {
    this._jsonParser = new JsonParser();
  }

  async handle<T>(emailData: IEmailData, template: ITemplate, emailVars:T) {
    await this._mailer.sendMail({
      from: `Car Site <${MAILER_USER}>`,
      to: `${emailData.dealership_name} <${emailData.email}>`,
      subject: this._jsonParser.parse(emailData, template.title),
      html: this._jsonParser.parse({...emailData, ...emailVars}, template.template),
    });
    console.log("Mail Sent");
  }
}

export { EmailHandlerDealership };
