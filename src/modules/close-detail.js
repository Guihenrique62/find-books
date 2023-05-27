export default function closeDetail(){
   const container = document.querySelector('.details')
   const info = document.querySelector('.book-detail')

   container.removeChild(info)
   container.style.display = 'none'
}