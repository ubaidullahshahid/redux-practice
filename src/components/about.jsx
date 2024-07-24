import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const About = () => {
  const no = useSelector((state) => state.changeNo);

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const getData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const postData = async () => {
    const res = await fetch(
      "https://database-ce18f-default-rtdb.firebaseio.com/Database.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          message: user.message,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {/* <h1>About</h1>
      <p>{no}</p> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "50%",
          margin: "50px auto",
        }}
      >
        <p>name</p>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={getData}
          id=""
        />
        <p>email</p>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={getData}
          id=""
        />
        <p>message</p>
        <textarea
          name="message"
          value={user.message}
          onChange={getData}
          id=""
        ></textarea>

        <button onClick={postData}>Submit</button>
      </div>
    </div>
  );
};

export default About;
