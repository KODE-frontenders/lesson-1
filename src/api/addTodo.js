import { headers, baseUrl } from ".";

export const addTodoRequest = async (description) => {
  const body = JSON.stringify({ description });

  const requestOptions = {
    method: "POST",
    headers,
    redirect: "follow",
    body,
  };

  try {
    const response = await fetch(`${baseUrl}/task`, requestOptions);
    const result = await response.text();

    console.info(result);
  } catch (error) {
    console.error("error", error);
  }
};
