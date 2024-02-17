import 'dotenv/config'
import { MAILER_PASSWORD, MAILER_SERVICE, MAILER_USER } from './dotenv/env_vars'
export const mailConfig = {
    service: MAILER_SERVICE,
    auth: {
        user: MAILER_USER,
        pass: MAILER_PASSWORD
    }
}