export const handleResponse = async (response) => {
  if (response.status === 204) return;
  if (response.ok) return response.json();
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }
  if (response.status === 404) {
    throw new Error(
      '404 Not Found: The server can not find the requested resource.'
    );
  }
  const errorMessage = await response.text();
  throw new Error(errorMessage);
};

export const handleError = (error) => {
  console.error('API call failed: ' + error);
  throw error;
};
