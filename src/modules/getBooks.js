import renderBook from "./renderBook";

export default async function getBooks(){
   const input = document.getElementById('input')

   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}&maxResults=12`)
   const books = await response.json()
   const volumes = books.items
   
   volumes.forEach(book => {
       const id = book?.id
       const title = book.volumeInfo && book.volumeInfo.title;
       const authors = book.volumeInfo && book.volumeInfo.authors;
       const publisher = book.volumeInfo && book.volumeInfo.publisher;
       const publishedDate = book.volumeInfo && book.volumeInfo.publishedDate;
       const description = book.volumeInfo && book.volumeInfo.description;
       const pageCount = book.volumeInfo && book.volumeInfo.pageCount
       const averageRating = book.volumeInfo && book.volumeInfo.averageRating
       const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;

       renderBook(id,thumbnail,title,authors,publisher,publishedDate)
   });
}