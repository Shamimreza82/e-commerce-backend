import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";





const register = catchAsync(async(req, res) => {

sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Users create successfully',
    data: {},
  });
})





export const AuthController = {
       register 
}