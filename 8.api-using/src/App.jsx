import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";
//bütün http istekleri asenkron çalışır, hepsinde async-await yapısı kullanmak zorundayız.

function App() {
  //GET: veri almak için kullanılır.

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };
  // const getUserById = async (userId) => {
  //   const response = await axios.get(`${BASE_URL}/users/${userId}`);
  //   console.log(response.data);
  // };

  const createUser = async (newUser) => {
    //POST: veri eklemek için kullanılır.
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    //PUT: veri güncellemek için kullanılır.
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
    //DELETE: veri silmek için kullanılır.
    //clg enter yaparsak console.log çıkar.
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedResponse.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  };

  const getPostById = async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
  };

  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
  };

  useEffect(() => {
    // const newUser = {
    //   username: "nil",
    //   password: "xxxy",
    // };
    // createUser(newUser);
    //*******
    updateUser("394f", {
      username: "hazal nil",
      password: "xx-xy",
    });
    // deleteUserById(1);
  }, []);

  return <div></div>;
}

export default App;
