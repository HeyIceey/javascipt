// Himanish :D
// Jan 18
const reviews = [
  {
    id: 1,
    name: 'Jermaine Lamarr Cole',
    job: 'Rapper',
    img: 'https://i.pinimg.com/564x/f9/33/ae/f933ae244533f20727d0daba173128b8.jpg',
    text: "J Cole is an American rapper, singer, and record producer. Born on a military base in Germany and raised in Fayetteville, North Carolina, Cole initially gained attention as a rapper following the release of his debut mixtape, The Come Up, in early 2007. ",
  },
  {
    id: 2,
    name: 'The Weeknd',
    job: 'Singer',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzqGjaCnEWCHJZ4AJ0W-KTmiS2p87TouahuLlUQ1HlKPJ0z-NchkJzrszrTLgW8y8_Rw&usqp=CAU',
    text: 'Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and record producer. He is noted for his unconventional music production, artistic reinventions, and his signature use of the falsetto register.',
  },
  {
    id: 3,
    name: '21 Savage',
    job: 'Rapper',
    img: 'https://yt3.googleusercontent.com/OuA5qrxDeTVaIc6_13Z9WTOZ60jZTzMFOLp9wc1AE7N29GehEPwNQR2zK9y1V3fhD0PXAbe4bw=s176-c-k-c0x00ffffff-no-rj',
    text: 'Shéyaa Bin Abraham-Joseph, known professionally as 21 Savage, is a British-American rapper. Born in London and raised in Atlanta, Georgia, he began his recording career in 2013 and released three self-released mixtapes to regional acclaim.',
  },
  {
    id: 4,
    name: 'Charlie Puth ',
    job: 'Musician',
    img: 'https://studybreaks.com/wp-content/uploads/2021/09/charlieputh-e1631307648988.jpeg',
    text: 'Charles Otto Puth Jr. is an American singer, songwriter, and record producer. His initial exposure came through the viral success of his song covers uploaded to YouTube.',
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const scrollTopBtn = document.querySelector('.scroll-top-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showPerson(0); // Reset to Jermaine Cole's review
});

// End Button (Goes to 4th Review: Charlie Puth)
const goToEndBtn = document.querySelector('.go-to-end-btn');
goToEndBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1; // "Set to the index of Charlie Puth's review"
  showPerson(currentItem);
});

