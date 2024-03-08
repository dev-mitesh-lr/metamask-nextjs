export const apiClient = async (
  url,
  httpMethod,
  payload = null,
  token = null
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    let requestOptions = {
      method: httpMethod,
      headers: headers,
    };

    if (payload !== null) {
      requestOptions.body = JSON.stringify(payload);
    }

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    if (result.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return result.body;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
};
