const asyncHandler = (requestHendelar) => {
    return (req, res, next) => {
        Promise.resolve(requestHendelar(req, res, next)).catch((error)=>{
            next(error);
        })
    }

}

export {asyncHandler}