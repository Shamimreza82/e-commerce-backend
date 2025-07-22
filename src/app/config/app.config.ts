import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const appConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  databaseUrl: process.env.DATABASE_URL as string,
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  sslcommerz: {
    storeId: process.env.SSLC_STORE_ID || '',
    storePassword: process.env.SSLC_STORE_PASSWORD || '',
    isLive: process.env.SSLC_IS_LIVE === 'true',
  },
};
