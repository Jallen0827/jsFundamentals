//Object.keys() and Object.values()

//Object.keys() is a method that returns an array of a given objects own property names
//Object.values() is a method that returns an array of a given object's own enumerable property value. 
let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.values(spaceJam.toonSquad));

// // write your code here

// let favMovie = {
//   nameOfMovie:'Rocky',
//   runTime: 158,
//   characters: [{charOne:{name:'Rocky', 
//                          age:30,
//                          item:[{itemOne:'gloves',
//                                 itemTwo: 'hat'}]}}, 
//                {charTwo: {name:'Creed',
//                           age:31,
//                           items:[{itemOne:'shorts',
//                                   itemTwo: 'Flag'}]}}],
//   genre:'Action',
// }

// console.log(favMovie.nameOfMovie);
// console.log(favMovie.runTime);
// console.log(favMovie.characters);
// console.log(favMovie.characters[1].charTwo.name);
// console.log(favMovie.characters[1].charTwo.items[0].itemOne);
