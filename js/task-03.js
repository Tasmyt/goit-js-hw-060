const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const imgRef = ({url, alt}) => {
//   const liRef = document.createElement(`li`);
//   liRef.classList.add(`img__box`);
//   const imageRef = document.createElement(`img`);
//   imageRef.src = url;
//   imageRef.textContent = alt;
//   imageRef.classList.add(`image`);

//   liRef.append(imageRef);
//   return liRef;
// }
// const gallery = images.map(imgRef);


// const galleryRef = document.querySelector(`.gallery`);
// galleryRef.append(...gallery);


const imgRef = ({url, alt}) => {
  const liRef = `<li class="img__box"> <img src= ${url} alt= ${alt} class="image"></li>`;
  return liRef;
}
const gallery = images.map(imgRef);


const galleryRef = document.querySelector(`.gallery`);

galleryRef.insertAdjacentHTML(`beforeend`, gallery.join(``));