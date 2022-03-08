const promise = fetch("/calculatecooldinosaurs");

const dinosaurs = promise.then((res) => res.json());

const coolDinosaurs = document.getElementById("cool-dinosaurs");

dinosaurs.then((amountOfCoolDinosaur) => {
  console.log(amountOfCoolDinosaur);
  coolDinosaurs.innerText += amountOfCoolDinosaur.data;
});
