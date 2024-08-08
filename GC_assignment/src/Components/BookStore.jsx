import React from 'react'
import { motion } from "framer-motion"
import Rating from './Rating'
import './BookStore.css'

export default function BookStore({ data, books, countries, authors, i }) {
    const details = { ...data.attributes, books: [], country: "" }

    // adding all the book of that store to details object
    const storeBooks = data.relationships.books
    const storeBooksList = []
    storeBooks &&
        storeBooks.data.forEach(storeBook => {
            const bookObj = books.find(book => book.id === storeBook.id)
            bookObj.author = authors.find(author => author.id === bookObj.authorID).fullName
            storeBooksList.push(bookObj)
        })
    details.books = storeBooksList.sort((b1, b2) => b2.copiesSold - b1.copiesSold).slice(0, 2)

    // adding the country code to details obj
    const storeCountry = data.relationships.countries.data.id
    details.country = countries.find(country => country.id === storeCountry).code.toLowerCase()

    // converting the date into dd.mm.yyyy format
    const date = new Date(details.establishmentDate)
    const doe = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className='bookStoreCard'>
            <div className='upper'>
                <img className='BSimg' src={details.storeImage} />

                <div className='storeInfo'>
                    <div className='storeRating'>
                        <h1>{details.name}</h1>
                        <Rating rating={details.rating} />
                    </div>

                    <table className='booksTable'>
                        <thead>
                            <tr>
                                <th colSpan={2}>Best-selling books</th>
                            </tr>
                        </thead>
                        {
                            details.books.length > 0 ?
                                <tbody>
                                    {
                                        details.books.map(book => {
                                            return (
                                                <tr key={book.id}>
                                                    <td>{book.name}</td>
                                                    <td>{book.author}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                :
                                <tbody>
                                    <tr>
                                        <td>No data available</td>
                                        <td>No data available</td>
                                    </tr>
                                </tbody>
                        }
                    </table>

                </div>
            </div>

            <div className='lower'>
                <p>{`${doe} - `} <a target='_blank' href={details.website}>Website Link</a></p>
                <img src={`https://flagcdn.com/w80/${details.country}.jpg`} />
            </div>
        </motion.div>
    )
}