export const getToken = async () => {
  const response = await fetch(
    "https://elegant-liskov-b96e4b.netlify.app/.netlify/functions/get-token"
  );
  const json = await response.json();
  return json.token;
};

export const getPlantsData = async () => {
  const token = await getToken();
  const plantResponse = await fetch(
    `https://trefle.io/api/v1/plants?token=${token}`
  );
  return plantResponse.json();
};
