import nodemailer from "nodemailer";
import { mailConfig } from "../../Configs/mailer";
import { JsonParser } from "./JsonParser";
import { MAILER_USER } from "../../Configs/dotenv/env_vars";
interface ITemplate {
  title: string;
  template: string;
  name: string;
}

interface IEmailData {
  first_name: string;
  last_name: string;
  email: string;
}

class EmailHandler {
  private _mailer = nodemailer.createTransport(mailConfig);
  private _jsonParser: JsonParser;
  constructor() {
    this._jsonParser = new JsonParser();
  }

  async handle<T>(emailData: IEmailData, template: ITemplate, emailVars:T) {
    await this._mailer.sendMail({
      from: `Car Site <${MAILER_USER}>`,
      to: `${emailData.first_name} ${emailData.last_name} <${emailData.email}>`,
      subject: this._jsonParser.parse(emailData, template.title),
      html: this._jsonParser.parse({...emailData, ...emailVars}, template.template),
    });
    console.log("Mail Sent");
  }
}

export { EmailHandler };
