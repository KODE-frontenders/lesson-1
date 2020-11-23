import { headers, baseUrl } from ".";

export const removeTodoRequest = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers,
    redirect: "follow",
  };

  const url = `${baseUrl}/task/${id}`;

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.text();
    console.info(result);

    return undefined;
  } catch (error) {
    console.error("error", error);
  }
};
