import { headers, baseUrl } from ".";

export const updateTodoRequest = async (id) => {
  const body = JSON.stringify({ completed: true });

  const requestOptions = {
    method: "PUT",
    headers,
    body,
    redirect: "follow",
  };

  try {
    const response = await fetch(`${baseUrl}/task/${id}`, requestOptions);
    const result = await response.text();

    console.info(result);
  } catch (error) {
    console.error("error", error);
  }
};
