export default async function renderDetails(e,thumbnail,title,authors,publisher,date,pageCount,averageRating,description){
    const container = document.querySelector('.details')
    //container.style.display = 'flex'
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
        const value = parseInt(averageRating)

    }

    const bookDetail = document.createElement('div')
    bookDetail.classList.add('book-detail')

    const infoDetail = document.createElement('div')
    infoDetail.classList.add('info-details')

    const h3 = document.createElement('h3')
    h3.innerText = title
    
    const paragraphAuthor = document.createElement('p')
    paragraphAuthor.innerHTML = `<b>Autor: </b> ${authors}`
    
    const paragraphPublisher = document.createElement('p')
    paragraphPublisher.innerHTML = `<b>Editora: </b> ${publisher}`

    const paragraphDate = document.createElement('p')
    paragraphDate.innerHTML = `<b>Data: </b> ${date}`

    const numberOfPages = document.createElement('p')
    numberOfPages.innerHTML = `<b>Numeros de Páginas: </b> ${pageCount}`

    const avaliation = document.createElement('p')
    avaliation.innerHTML = `<b>Avaliação: </b><i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i>`
}