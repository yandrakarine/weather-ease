type ResponseType = {
  data: any;
  status: number;
};

const requestAdapter = async (query: string): Promise<ResponseType> => {
  const response = await fetch(query);
  const responseJson = await response.json();

  return {
    data: responseJson,
    status: response.status,
  };
};

export { requestAdapter };
