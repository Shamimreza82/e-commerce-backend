import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';

const register = catchAsync(async (req, res) => {
  const user = req.body;

  const result = await AuthServices.register(user);

  sendResponse(res, {
    success: true,
    message: 'Users create successfully',
    statusCode: 201,
    data: result,
  });
});

export const AuthController = {
  register,
};
