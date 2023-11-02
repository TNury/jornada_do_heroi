async function callAPI(
  requestURL: string,
  options?: Record<string, any>,
  payload?: Record<string, any>
): Promise<any> {
  const parsedURL = new URL(requestURL);

  const requestOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    ...options,
  };

  const rawResponse = await fetch(parsedURL, requestOptions);

  const parsedResponse = await rawResponse.json();

  return parsedResponse;
}

export default callAPI;
