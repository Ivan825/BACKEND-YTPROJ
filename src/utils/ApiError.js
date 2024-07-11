class ApiError extends Error { //Standardizing error format and making it simple to pass them.
    constructor(
        statusCode,
        message = "Something went wrong",
        errors= [],
        stack = ""
    ){ 
        super(message);
        this.statusCode= statusCode;
        this.error= error;
        this.stack= stack;
        this.data= null;
        this.success= false;
        this .errors= errors;

        if(stack){
            this.stack= stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };