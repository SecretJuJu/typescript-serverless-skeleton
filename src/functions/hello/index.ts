// response helloworld plain text with status code 200
export const handler = async () => {
  return {
    statusCode: 200,
    body: 'helloworld',
  };
};
