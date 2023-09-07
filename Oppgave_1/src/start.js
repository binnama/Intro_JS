//import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  `Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger 
  bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. 
  Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. 
  Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape 
  YOLO XOXO listicle letterpress farm-to-table beard.`;

  let wordOne = 0
  let wordTwo = 0
  let tempWord = 0

const longestWord = () => {

  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  textElements = text.split(" ");

  // TODO: Velg første ord så du har noe å sammenlikne med
  wordOne = textElements[0].length;
  tempWord = textElements[0];

  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  for (i = 0; i < textElements.length; i++) {
    if (textElements[i].length > wordOne) {
      wordOne = textElements[i].length
      tempWord = textElements[i]
    }
  }
  console.log(tempWord)

};

console.log(longestWord());
