export const SearchResults = (props) => {
  if (!props.data || props.data.length === 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        No results found. Try another search term.
      </div>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <div>Showing results for "{props.query}"</div>
      <ul>
        {props.data.map((plant) => (
          <li key={plant.id} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                alt={`${plant.common_name}`}
                src={plant.image_url}
                width="100px"
                height="100px"
              />
            </div>
            <div style={{ paddingLeft: "20px" }}>
              <p>{plant.common_name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
