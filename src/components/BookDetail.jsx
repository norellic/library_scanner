import { useEffect, useState } from "react"

const BookDetail = ({ title, author, year, cover_id }) => {
    const [cover, setCover] = useState(null)

    useEffect(() => {

        const getBookCover = async () => {
            const response = await fetch(
                `https://covers.openlibrary.org/b/olid/${cover_id}-S.jpg`
            )
          
            const json = await response.json()
            console.log(json)
            setCover(json)
          }

        getBookCover().catch(console.error)

    }, [])

    const coverUrl = cover_id ? `https://covers.openlibrary.org/b/olid/${cover_id}-M.jpg` : null;
  
    return (
      <li className="main-list" key={cover_id}>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Year:</strong> {year}</p>
        
        {coverUrl ? (
          <img src={coverUrl} alt={`${title} cover`} />
        ) : (
          <p>`${title} cover`</p>
        )}
      </li>
    )
}

  
  
export default BookDetail
