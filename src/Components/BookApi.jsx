import React, { useEffect, useState } from "react";
import axios from "axios";
import './BookApi.css';

export default function BookApi({ search }) {
  const [booksData, setBooksData] = useState([]);
    // let search=searchTerm || ''
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "Whatever-you-want" },
        });

        setBooksData(response.data.books);
      } catch (error) {
        console.log(error); 
      }
    };

    fetchData();
  }, []);

  const filteredBooks = booksData.filter((book) => {
    return (book.title.toLowerCase().includes(search.toLowerCase()))
  });
  


  return (
    <div className="book-container">
      {filteredBooks.map((bookItem) => (
        <div key={bookItem.id} className="book-item">
          <img className="book-img" src={bookItem.imageLinks.smallThumbnail} alt={bookItem.title} />
          <div className="book-info">
            <h5>{bookItem.title}</h5>
            
          </div>
          <div className="rating">
              <span role="img" aria-label="Star">⭐</span>
              <p>
                <i>{bookItem.averageRating || "-.-"}</i>
              </p>
              
            </div>
            <p className="Free">Free</p>
            
        </div>
      ))}
    </div>
  );
}