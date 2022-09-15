class GuestBookError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

class ValidationError extends GuestBookError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

module.exports = {
  GuestBookError,
  ValidationError,
};
