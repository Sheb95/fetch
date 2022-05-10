async function getPoke() {
   const response = await fetch("https://pokeapi.co/api/v2/");

   const data = await response.json();

   return data;
}

async function pokeData() {
   let pokeStuff = await getPoke();
   const res = await fetch(pokeStuff["ability"]);
   const data = await res.json();
   const resultsArray = data.results;
   console.log(resultsArray[0]);
}

pokeData();
