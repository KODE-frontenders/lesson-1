import { headers, baseUrl } from ".";

export const fetchTodosRequest = async () => {
  const requestOptions = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  const url = `${baseUrl}/task`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    const { data } = await JSON.parse(result);

    return [...data];
  } catch (error) {
    console.error("error", error);
  }
};
