// Creating a hndler function to use to handle async functions in a standard format so we dont have to keep creating try and catch again and again.
const asyncHandler = (func) => {
    return async (req,res,next)=> {
        try {
            await func(req,res,next);
        } catch (error) {
            res.status(err.code() || 500).json({
                status: 'error',
                message: err.message
            })
        }
    }
} 

export { asyncHandler };