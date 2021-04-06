import React, { useEffect, useState } from "react";
import "./App.css";
import { getToken } from "./utils";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";

function App() {
  const [plantsData, setPlantsData] = useState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPlantsData = async () => {
      setLoading(true);
      const token = await getToken();
      const plantResponse = await fetch(
        `https://trefle.io/api/v1/plants/search?q=${query}&token=${token}`
      );
      const plantResponseJson = await plantResponse.json();
      console.log(plantResponseJson);
      setPlantsData(plantResponseJson.data);
      setLoading(false);
    };

    if (query) {
      getPlantsData();
    }
  }, [query]);

  if (loading) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>☘️ Plant Looker Upper ☘️</h1>
      <SearchForm onSubmit={setQuery} />
      {!query && (
        <div style={{ marginTop: "20px" }}>
          No search terms provided. Enter a plant name above to retrieve some
          plant data!
        </div>
      )}
      {plantsData && <SearchResults data={plantsData} query={query} />}
    </div>
  );
}

export default App;
