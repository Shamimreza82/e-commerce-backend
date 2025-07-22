import { prisma } from '../../config/db.config';

const register = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const result = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    },
  });
  return result;
};

export const AuthServices = {
  register,
};
