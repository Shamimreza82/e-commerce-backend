import { Response } from 'express';

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const { statusCode, ...rest } = data;
  res.status(statusCode).json(rest);
};

export default sendResponse;
