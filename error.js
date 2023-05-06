export  class InvalidPasswordError extends Error {
    constructor(message) {
      super(message || 'Invalid password');
      this.name = 'InvalidPasswordError';
    }
  }
  
  export  class OutOfRangeError extends Error {
    constructor(message) {
      super(message || 'Out of range');
      this.name = 'OutOfRangeError';
    }
  }