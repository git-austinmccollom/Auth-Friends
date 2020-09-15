import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


const initialFriend = {
  age: "",
  email: "",
  name: "",
};

export default function FriendForm(props) {
  const [newFriend, setNewFriend] = useState(initialFriend);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFriend({
      ...newFriend,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', newFriend)
    props.getFriends();
  };

  return (
    <form className={'friend-form'} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </label>
      <button>Add Friend</button>
    </form>
  );
}
