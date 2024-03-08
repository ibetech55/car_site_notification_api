import amqp from 'amqplib'
import { RABBITMQ_URL } from '../../../Configs/dotenv/env_vars';

export const queueConnection = async () => {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    return {channel}
}