import './App.css'
import { useEffect, useState } from 'react'
import BookStore from './Components/BookStore'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/stores")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  const stores = data && data.data

  const books = data && data.included
    .filter(ele => ele.type === "books")
    .map(book => {
      return {
        id: book.id,
        name: book.attributes.name,
        copiesSold: book.attributes.copiesSold,
        authorID: book.relationships.author.data.id
      }
    })

  const countries = data && data.included
    .filter(ele => ele.type === "countries")
    .map(ele => {
      return { id: ele.id, code: ele.attributes.code }
    })

  const authors = data && data.included
    .filter(ele => ele.type === "authors")
    .map(ele => {
      return { id: ele.id, fullName: ele.attributes.fullName }
    })

  return (
    stores && stores.map((store, i) => {
      return (
        <BookStore
          i={i}
          key={store.id}
          data={store}
          books={books}
          countries={countries}
          authors={authors} />
      )
    })
  )
}

export default App
