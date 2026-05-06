let figures = [
  "apu",
  "barney",
  "bart",
  "charles",
  "glancy",
  "grandpa",
  "hibbert",
  "homer",
  "krusty",
  "marge",
];
let newPictures = [
    
  "apu_1.png",
  "barney_2.png",
  "bart_3.png",
  "charles_4.png",
  "glancy_5.png",
  "grandpa_7.png",
  "hibbert_6.png",
  "homer_8.png",
  "krusty_9.png",
  "marge_10.png",
  "maggie_11.png",
  "lisa_12.png",
];

function changePics() {
  const pics = document.querySelectorAll("img");
  const clearPlace = document.getElementsByClassName('placeclear');
  for (let i = 0; i < pics.length; i++) {
    pics[i].src = "./bilder/"+newPictures[i];
  }
  for (let x = 0; x < pics.length; x++){
    clearPlace[x] = figures[x];
  }
}

//clear place geht nicht weil es nur zwei divs sind und zu viele namen als nächstens einfach
//  viellecht die images holen


