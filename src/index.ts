import { AuthInfo, TeamUP } from 'ts-teamup';
import { config } from 'dotenv';

config();

const auth: AuthInfo = {
  username: process.env.id as string,
  password: process.env.password as string,
  client_id: process.env.client_id as string,
  client_secret: process.env.client_secret as string,
};

const bot = new TeamUP();

// bot.
