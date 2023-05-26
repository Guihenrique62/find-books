export default async function removeElements(){
    const books = document.querySelectorAll('.book')
    books.forEach((book)=>{
        book.parentNode.removeChild(book)
    })
}