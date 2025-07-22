
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";





const register = catchAsync(async (req, res) => {

  const user = req.body;


  sendResponse(res, {
    success: true,
    message: 'Users create successfully',
    statusCode: 201,
    data: {},
  });
})





export const AuthController = {
  register
}