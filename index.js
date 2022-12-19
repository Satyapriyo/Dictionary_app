const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2650fb19damsh9d9e0722d849e13p1229c2jsn14114cfebe25",
    "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
  },
};
let definention = document.getElementById("definintion");
let word = document.getElementById("word");

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  fetch(
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${x}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      text = JSON.stringify(response);
      definention.innerHTML = response.definition;
      word.innerHTML =response.word;

    })
    .catch((err) => console.error(err));
}


// 1. Favored by hap, luck, or fortune; lucky; fortunate; successful; prosperous; satisfying desire; as, a happy expedient; a happy effort; a happy venture; a happy omen. Chymists have been more happy in finding experiments than the causes of them. Boyle.
//  2. Experiencing the effect of favorable fortune; having the feeling arising from the consciousness of well-being or of enjoyment; enjoying good of any kind, as peace, tranquillity, comfort; contented; joyous; as, happy hours, happy thoughts. Happy is that people, whose God is the Lord. Ps. cxliv. 15. The learned is happy Nature to explore, The fool is happy that he knows no more. Pope. 
//  3. Dexterous; ready; apt; felicitous. One gentleman is happy at a reply, another excels in a in a rejoinder. Swift. Happy family, a collection of animals of different and hostile propensities living peaceably together in one cage. Used ironically of conventional alliances of persons who are in fact mutually repugnant. -- Happy-go-lucky, trusting to hap or luck; improvident; easy-going. "Happy-go-lucky carelessness." W. Black.

// happy