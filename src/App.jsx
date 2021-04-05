import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "rebass";
import "./App.css";
import { getToken } from "./api";

function App() {
  const [plantsData, setPlantsData] = useState();
  useEffect(() => {
    const getPlantsData = async () => {
      const token = await getToken();
      const plantResponse = await fetch(
        `https://trefle.io/api/v1/plants?token=${token}`
      );
      const data = await plantResponse.json();
      setPlantsData(data);
    };

    getPlantsData();
  }, []);
  console.log(plantsData);

  if (!plantsData) return <div>Loading...</div>;
  return (
    <div className="App">
      {plantsData.data.map((plant) => (
        <Flex key={plant.id}>
          <Box>
            <Image
              alt={`${plant.common_name}`}
              src={plant.image_url}
              width="50px"
              height="50px"
            />
          </Box>
          <Box>
            <Text>{plant.common_name}</Text>
          </Box>
        </Flex>
      ))}
    </div>
  );
}

export default App;
