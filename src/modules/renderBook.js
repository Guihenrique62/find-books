export default function renderBook(id,thumbnail,title,authors,publisher,date){
   const container = document.getElementById('books')
   const book = document.createElement('div')
   book.classList.add('book')

   const imgContainer = document.createElement('div')
   imgContainer.classList.add('img-container')
   const img = document.createElement('img')
   img.src = thumbnail
   imgContainer.append(img)

   const info = document.createElement('div')
   info.classList.add('info')
   const h3 = document.createElement('h3')
   h3.innerText = title
   const paragraphAuthor = document.createElement('p')
   paragraphAuthor.innerHTML = `<b>Autor: </b> ${authors}`
   const paragraphPublisher = document.createElement('p')
   paragraphPublisher.innerHTML = `<b>Editora: </b> ${publisher}`
   const paragraphDate = document.createElement('p')
   paragraphDate.innerHTML = `<b>Data: </b> ${date}`

   const btn = document.createElement('button')
   btn.classList.add('info-btn')
   btn.id = id
   btn.innerHTML= `Detalhes <i class='bx bx-chevron-right'></i>`

   info.append(h3,paragraphAuthor,paragraphPublisher,paragraphDate,btn)
   book.append(imgContainer,info)
   container.append(book)

   //remove div com foto padrão
   const divImageBook = document.querySelector('.image-book')
   if (divImageBook) {divImageBook.parentNode.removeChild(divImageBook)}
}