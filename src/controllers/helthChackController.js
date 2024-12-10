import { apiResponce } from "../utils/apiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const helthCheck = asyncHandler(async(req, res) =>{
    return res
    .status(200)
    .json (new apiResponce (200, "ok", "Helthcheck passed"))

})
export {helthCheck}