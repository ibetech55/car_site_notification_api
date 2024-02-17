import amqp from 'amqplib'
import { QUEUE_URL } from '../../../Configs/dotenv/env_vars';

export const queueConnection = async () => {
    const connection = await amqp.connect(QUEUE_URL);
    const channel = await connection.createChannel();
    return {channel}
}