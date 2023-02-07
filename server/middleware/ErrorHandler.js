module.exports = (error, req, res, next) => {
  // console.log(error);
  let code = 500;
  let message = "Internal Server Error";

  if (error.name === "JsonWebTokenError") {
    code = 401;
    message = "Invalid Token";
  } else if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = error.errors[0].message;
  } else if (error.name === "SequelizeDatabaseError") {
    code = 404;
    message = "Data not found";
  } else if (error.code) {
    code = error.code;
    message = error.message;
  }
  res.status(code).json({
    message: message,
  });
};
