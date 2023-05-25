import getBooks from './modules/getBooks';
import './styles/style.css';


const btn = document.getElementById('button')

btn.addEventListener('click',getBooks)
