// Create fetch API function
export const apiCall = (url, method) => {
  // Request data
  let requestData = {
    method: method,
    headers: {
      "Content-Type":  "application/json"
    }
  };

  return (
    fetch(url, requestData)
      .then(response => {
        switch (response.status) {
          case 400:
            const error_400 = { message: 'error 400' };
            throw error_400;
          default:
            break;
        }
        return response.json()
      })
  )
};