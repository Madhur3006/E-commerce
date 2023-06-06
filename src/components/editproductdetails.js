import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Edit = () => {

  const inputRef = useRef()

  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState(null);
  const [isPresent, setIsPresent] = useState(false);

  const [apiData, setApiData] = useState({});

  const searchProductById = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .then(() => setIsPresent(true));
  };

  const handleEdit = () => {
    localStorage.setItem('id', apiData.id)
    localStorage.setItem('title', apiData.title)
    localStorage.setItem('price', apiData.price)
    localStorage.setItem('description', apiData.description)
    localStorage.setItem('category', apiData.category)
    localStorage.setItem('image', apiData.image)
    localStorage.setItem('rate', apiData.rating.rate)
    localStorage.setItem('count', apiData.rating.count)
  }

  const getProductDetailsById = () => {
  
    return (
      <div>
        <>
          {apiData &&
            <ul>
              <li>{apiData.id}</li>
              <li>{apiData.title}</li>
              <li>
                <img src={apiData.image} height={"50px"}></img>
              </li>
              <li>
                <Link to = '/update'>
                <button onClick={() => handleEdit()}>Edit</button>
                </Link>
              </li>
              <li>
                <button onClick={() => handleDelete(apiData.id)}>Delete</button>
              </li>
            </ul>
          }
          <div>{isDeleted ? "deleted" : null}</div>
        </>
      </div>
    );
  };

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setIsDeleted(true);
        setApiData(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <label>Search Product by ID</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref = {inputRef} />
      <button onClick={() => searchProductById(inputValue)}>Search</button>
      <div>{isPresent ? getProductDetailsById() : "Id not found"}</div>
    </div>
  );
};

export default Edit;
