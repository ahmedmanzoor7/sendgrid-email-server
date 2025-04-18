function CustomResponse({ data, status, error }) {
  return {
    data,
    error,
    status,
  };
}

module.exports = { CustomResponse };
