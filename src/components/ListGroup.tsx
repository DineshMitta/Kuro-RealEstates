import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Sanfranciso",
    "Washington",
    "Tokyo",
    "London",
    "Paris",
    "Rome"
  ];

  const [selectedIndex, setselectedIndex] = useState(-1);

 
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group'}
            key={item}
            onClick={() => {setselectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
