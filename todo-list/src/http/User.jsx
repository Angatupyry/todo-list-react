import "./style.css";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );

        if (!response.ok) {
          throw new Error(`Hubo un error en el servidor`);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>API Get</h1>
      {loading && <div>A moment please...</div>}
      <ul>
        {user &&
          user.map((item, index) => (
            <li key={index}>
              <h3>{item.id}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default User;
