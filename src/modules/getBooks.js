import renderBook from "./renderBook";

export default async function getBooks(){
   const input = document.getElementById('input')

   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}&maxResults=12`)
   const books = await response.json()
   const volumes = books.items
   
   volumes.forEach(book => {
       const id = book?.id
       const title = book.volumeInfo?.title
       const authors = book.volumeInfo?.authors
       const publisher = book.volumeInfo?.publisher
       const publishedDate = book.volumeInfo?.publishedDate
       const description = book.volumeInfo?.description
       const pageCount = book.volumeInfo?.pageCount
       const averageRating = book.volumeInfo?.averageRating
       const thumbnail = book.volumeInfo.imageLinks?.thumbnail

       renderBook(id,thumbnail,title,authors,publisher,publishedDate)
   });
}