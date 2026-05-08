// pics got changed from homer to normal
function changePics() {
  //names of figures
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
  //pictures
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
  const pics = document.querySelectorAll("img");
  for (let i = 0; i < pics.length; i++) {
    pics[i].src = "./bilder/" + newPictures[i];
  }

  // names bottom
  let namesOld = [
    document.getElementById("name1"),
    document.getElementById("name2"),
    document.getElementById("name3"),
    document.getElementById("name4"),
    document.getElementById("name5"),
    document.getElementById("name6"),
    document.getElementById("name7"),
    document.getElementById("name8"),
    document.getElementById("name9"),
    document.getElementById("name10"),
  ];

  for (let x = 0; x < namesOld.length; x++) {
    namesOld[x].innerText = figures[x];
  }

  //change color of background
  document.getElementById("rowone").style.backgroundColor = "orange";
  document.getElementById("rowtwo").style.backgroundColor = "blue";

  //new class plus background yellow
  let allBackgrounds = document.querySelectorAll(".place");
  for (let o = 0; o < allBackgrounds.length; o++) {
    if (!allBackgrounds[o].id) {
      allBackgrounds[o].classList.add("yellow");
    }
  }
}
