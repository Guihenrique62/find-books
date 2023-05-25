export default function renderBook(title){
   const container = document.getElementById('books')
   const p = document.createElement('p')
   p.innerText = title

   container.append(p)
}