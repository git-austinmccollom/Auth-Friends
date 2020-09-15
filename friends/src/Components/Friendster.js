import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

export default function Friendster(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={'friendster'}>
      <h1>Friendster</h1>
      {friends.map((fr) => {
        return <Friend key={fr.id} data={fr} />;
      })}
    </div>
  );
}
