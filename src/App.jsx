import { useEffect, useState } from 'react'
import BookDetail from './components/bookDetail';
import './App.css'

//  setList(staticJson);

function App() {
  const [list, setList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  //const query = `https://openlibrary.org/search.json?q=social+media`;

  const query = `https://openlibrary.org/search.json?q=diane+mullen`;

  

  useEffect(() => {

    const fetchallData = async (query) => {
      try {
        const response = await fetch(query);
        const json = await response.json(); 
        setList(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching from API:", error);
    }}

    fetchallData(query)
  }, []);

  return (
    <>
      <div>

        <h1>Books:</h1>

        {list?.num_found !== undefined && (
        <p>Number of results found: {list.num_found}</p>
        )}

        {list?.num_found !== undefined && (
        <p>Stat 2: {list.num_found}</p>
        )}

        {list?.num_found !== undefined && (
        <p>Stat 3: {list.num_found}</p>
        )}

        <input
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />

        <label>Min Year:</label>
        <input type="range" name="moonphase" min="1950" max="2025" step="5"></input>

        <ul>
        {list?.docs &&
            list.docs
            .filter((book) => book.lending_edition_s)
            
            .map((book, idx) => (
                //<li key={idx}>{book.title} {book.author_name} {book.first_publish_year}</li>
                <BookDetail key={idx}
                title={book.title} 
                author={book.author_name}
                year={book.first_publish_year}
                cover_id={book.lending_edition_s}
                />
            ))}
        </ul>

      </div>
    </>
  )
}

export default App
