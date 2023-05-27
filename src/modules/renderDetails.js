import closeDetail from "./close-detail"

export default async function renderDetails(e,thumbnail,title,authors,publisher,date,pageCount,averageRating,description){
    const container = document.querySelector('.details')
    const bookId = e.target.id

    if(!authors){authors = 'Não encontrado'}
    if(!title){title = 'Sem Titulo'}
    if(!thumbnail){thumbnail = './media/no-image.jpg'}
    if(!publisher){publisher = 'Não encontrada'}
    if(!date){date = 'Não encontrada'}
    if(!pageCount){pageCount = 'Não Definido'}
    if(!averageRating){averageRating = '0'}
    if(!description){description = 'Não possui descrição'}

    function countStars(){
        const bxs = document.querySelectorAll('.bxs-star')
        const value = parseInt(averageRating)
        for(let i =0; i < value;i++){
            bxs[i].classList.add('active')
        }
    }

    const bookDetail = document.createElement('div')
    bookDetail.classList.add('book-detail')

    //informações do book
    const infoDetail = document.createElement('div')
    infoDetail.classList.add('info-details')
    infoDetail.id = bookId

    const h3 = document.createElement('h3')
    h3.innerText = title
    
    const paragraphAuthor = document.createElement('p')
    paragraphAuthor.innerHTML = `<b>Autor: </b> ${authors}`

    const limiteAtuthor = 50; // Define o limiteAtuthor de caracteres
    if (paragraphAuthor.innerHTML.length > limiteAtuthor) {
       paragraphAuthor.innerHTML = paragraphAuthor.innerHTML.substring(0, limiteAtuthor) + '...'; // Limita a quantidade de caracteres
      }
    
    const paragraphPublisher = document.createElement('p')
    paragraphPublisher.innerHTML = `<b>Editora: </b> ${publisher}`

    const paragraphDate = document.createElement('p')
    paragraphDate.innerHTML = `<b>Data: </b> ${date}`

    const numberOfPages = document.createElement('p')
    numberOfPages.innerHTML = `<b>Numeros de Páginas: </b> ${pageCount}`

    const avaliation = document.createElement('p')
    avaliation.innerHTML = `<b>Avaliação: </b><i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i>`
    
    const paragraphDescription = document.createElement('p')
    paragraphDescription.innerHTML = `<b>Descrição: </b> ${description}`
    paragraphDescription.classList.add('desc')

    const limiteDescription = 200; // Define o limiteAtuthor de caracteres
    if (paragraphDescription.innerHTML.length > limiteDescription) {
       paragraphDescription.innerHTML = paragraphDescription.innerHTML.substring(0, limiteDescription) + '...'; // Limita a quantidade de caracteres
      }
    
    //imgagem do container
    const imgDetails = document.createElement('div')
    imgDetails.classList.add('img-details')

    const img = document.createElement('img')
    img.src = thumbnail

    const closeBtn = document.createElement('button')
    closeBtn.id = 'close-details'
    closeBtn.innerHTML = `<i class='bx bx-x'></i>`
    closeBtn.addEventListener('click', closeDetail)
    
    imgDetails.append(img,closeBtn)
    infoDetail.append(h3,paragraphAuthor,paragraphPublisher,paragraphDate,numberOfPages,avaliation,paragraphDescription)
    bookDetail.append(infoDetail,imgDetails)
    container.append(bookDetail)
    container.style.display = 'flex'
    countStars()
}