/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..." 
    ]
};
const advertisment = document.querySelector('.promo__adv'),
genre = document.querySelector('.promo__genre'),
bg = document.querySelector('.promo__bg');



advertisment.remove();
genre.innerText = 'Драма';
bg.style.background = 'url(img/bg.jpg) center cover no-repeat';

const list = document.querySelector('.promo__interactive-list')


let sortArr;
function sort(array){
   sortArr = array.sort();
  return sortArr;
}

sort(movieDB.movies)

console.log(sortArr)

function renderList(array, red){
    list.innerHTML = '';
    array.forEach((item, index) => {
        list.innerHTML += `
        <li class="promo__interactive-item ${red}">${index + 1} ${item}
                                <div class="delete"></div>
                            </li>
                            `
    })
    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
         movieDB.movies.splice(i, 1)
        renderList(movieDB.movies)
        }) 
    })
}
renderList(sortArr)

//forms
const addForm = document.querySelector('form.add'),
addInput = addForm.querySelector('.adding__input'),
addCheckbox = addForm.querySelector('[type = "checkbox"]'),
addFormDelete = document.querySelector('.promo__interactive-list');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
   
    let newFilm = addInput.value;
    const favorite = addCheckbox.checked;
    if(newFilm){
        if(newFilm.length > 21){
        //    newFilm = `${newFilm.split('').slice(0, 22).join('')} ...`
        newFilm = `${newFilm.substring(0,22)}....`
           
        }
        movieDB.movies.push(newFilm);
        renderList(movieDB.movies)
       
    } 
    if(favorite){
        const red = 'promo__interactive-item--style'
        console.log('ADD FAVORITE FILM')
        renderList(movieDB.movies, red)
    }
   
    event.target.reset()
})






