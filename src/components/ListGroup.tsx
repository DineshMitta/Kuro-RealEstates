function ListGroup() {
  let items = [
    "New York",
    "Sanfranciso",
    "Washington",
    "Tokyo",
    "London",
    "Paris",
  ];
  items = [];

  
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No Items Found</p> }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
