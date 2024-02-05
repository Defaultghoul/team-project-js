const scientistsList = document.querySelector(".allScientists")

const scientists = [ 
  { 
      name: "Albert", 
      surname: "Einstein", 
      born: 1879, 
      dead: 1955, 
      id: 1,
      src: "1.jpg"
  }, 
  { 
      name: "Isaac", 
      surname: "Newton", 
      born: 1643, 
      dead: 1727, 
      id: 2,
      src: "2.jpg"
  }, 
  { 
      name: "Galileo", 
      surname: "Galilei", 
      born: 1564, 
      dead: 1642, 
      id: 3,
      src: "3.jpg"
  }, 
  { 
      name: "Marie", 
      surname: "Curie", 
      born: 1867, 
      dead: 1934, 
      id: 4,
      src: "4.jpg"
  }, 
  { 
      name: "Johannes", 
      surname: "Kepler", 
      born: 1571, 
      dead: 1630, 
      id: 5,
      src: "5.jpg"
  }, 
  { 
      name: "Nicolaus", 
      surname: "Copernicus", 
      born: 1473, 
      dead: 1543, 
      id: 6,
      src: "6.jpg"
  }, 
  { 
      name: "Max", 
      surname: "Planck", 
      born: 1858, 
      dead: 1947, 
      id: 7,
      src: "7.jpg"
  }, 
  { 
      name: "Katherine", 
      surname: "Blodgett", 
      born: 1898, 
      dead: 1979, 
      id: 8,
      src: "8.jpg"
  }, 
  { 
      name: "Ada", 
      surname: "Lovelace", 
      born: 1815, 
      dead: 1852, 
      id: 9,
      src: "9.jpg"
  }, 
  { 
      name: "Sarah E.", 
      surname: "Goode", 
      born: 1855, 
      dead: 1905, 
      id: 10,
      src: "10.jpg"
  }, 
  { 
      name: "Lise", 
      surname: "Meitner", 
      born: 1878, 
      dead: 1968, 
      id: 11,
      src: "11.jpg"
  }, 
  { 
      name: "Hanna", 
      surname: "Hammarström", 
      born: 1829, 
      dead: 1909, 
      id: 12,
      src: "12.jpg"
  } 
];

const matchingScientists = scientists.filter((scientist) => {
  return scientist.name[0] === scientist.surname[0];
});

const scientistsIn19thCentury = scientists.filter((scientist) => {
  return scientist.born >= 1800 && scientist.born <= 1900;
});

const sortedScientists = scientists.slice().sort((a, b) => a.surname.localeCompare(b.surname));

const [longestLivedScientist, shortestLivedScientist] = scientists.reduce(([longest, shortest], scientist) => {
  const currentLifespan = scientist.dead - scientist.born;
  const longestLifespan = longest.dead - longest.born;
  const shortestLifespan = shortest.dead - shortest.born;

  return [
      currentLifespan > longestLifespan ? scientist : longest,
      currentLifespan < shortestLifespan ? scientist : shortest
  ];
}, [scientists[0], scientists[0]]);

const sortedScientistsYearsOfLife = scientists.sort((a, b) => {
  return b.dead - b.born - (a.dead - a.born);
});

const filteredScientists = scientists.filter((scientist) => {
  return scientist.born >= 1800;
});

const filteredScientistsA = scientists.filter((scientist) => {
  return scientist.name[0] !== "A";
});

const latestBornScientist = scientists.filter((scientist) => {
  return scientist.born === Math.max(...scientists.map((s) => s.born));
});

const einsteinYearOfBirth = scientists.filter((scientist) => {
  return scientist.name === "Albert" && scientist.surname === "Einstein";
});

const scientistsWithCSurname = scientists.filter((scientist) => {
  return scientist.surname[0] === "C";
});

const displayScientists = (scientists) => {
  scientistsList.innerHTML = "";
  scientists.forEach(scientist => {
    const scientistDiv = document.createElement('div');
    scientistDiv.innerHTML = `${scientist.name} ${scientist.surname} <br>(${scientist.born}-${scientist.dead})`;
    scientistDiv.style.backgroundImage = `url(./img/scientists/${scientist.src})`;
    scientistDiv.style.backgroundRepeat = "no-repeat";
    scientistDiv.style.backgroundSize = "100px 110px"
    scientistsList.appendChild(scientistDiv);
  });
};

// const displayScientists = (scientists) => {
//   scientistsList.innerHTML = "";
//   scientists.forEach(scientist => {
//     const scientistDiv = document.createElement('div');
//     const fullname = `${scientist.name} ${scientist.surname}`;
//     const years = `(${scientist.born}-${scientist.dead})`;
//     const br = document.createElement('br');
//     scientistDiv.textContent = fullname 
//     scientistsList.appendChild(scientistDiv);
//   });
// }