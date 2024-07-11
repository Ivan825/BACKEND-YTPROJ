class ApiResponse  {  //Standardizing response format and making it simple to pass them.
    constructor(statusCode, data, message= "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success= statusCode < 400;
}
}

export {ApiResponse};