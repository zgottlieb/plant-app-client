export const getToken = async () => {
  const response = await fetch(
    "https://elegant-liskov-b96e4b.netlify.app/.netlify/functions/get-token"
  );
  const json = await response.json();
  return json.token;
};
