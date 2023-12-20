const post={
  title:'',
  body:'',
};
const containerArticle=document.createElement('div');
const createElement=()=>{
  const header=document.createElement('h2');
  const paragraph=document.createElement('p');
  header.classList.add('header__article');
  paragraph.classList.add('text__article');
  containerArticle.appendChild(header);
  containerArticle.appendChild(paragraph);
  header.textContent=`Заголовок: ${post.title}`;
  paragraph.textContent=`Статья: ${post.body}`;
}
const container=document.querySelector('.container');
const addElement=()=>{
  container.appendChild(containerArticle);
}

document.addEventListener("DOMContentLoaded", function (event) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      data.forEach(element => {
        post.title=element.title;
        post.body=element.body;
        createElement();
        addElement();
      });
      console.log(data);
    })
    .catch((error) => console.log("Запрос не выполнен", error));
});
