export const createError = (status, meesage) => {
  const err = new Error();
  err.message = meesage;
  err.status = status;
  err.stack = null;
  return err;
};
