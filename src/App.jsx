import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `${API_URL}/${reqType.toLowerCase().trim()}`
        );
        if (!response.ok) throw Error("Data not received");
        const data = await response.json();
        //console.log(listItems);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType]);
  return (
    <>
      <div>
        <Form reqType={reqType} setReqType={setReqType} />
        <List items={items} />
      </div>
    </>
  );
}

export default App;
