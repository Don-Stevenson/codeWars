// Each element in the periodic table has a symbol associated with it. For instance, the symbol for the element Yttrium is Y. A fun thing to do is see if we can form words using symbols of elements strung together. The symbol for Einsteinium is Es, so the symbols for Yttrium and Einsteinium together form:

const { ca } = require("date-fns/locale");

// Y + Es = YEs

// Yes! Ignoring capitalization, we can think of any string of letters formed by the concatenation of one or more element symbols as an elemental word -- per the above,yes is an elemental word. There is only one combination of element symbols that can form yes, but in general, there may be more than one combination of element symbols that can form a given elemental word. Let's call each different combination of element symbols that can form a given elemental word word an elemental form of word.

// Your task is to implement the function elementalForms(word), which takes one parameter (the string word), and returns an array (which we'll call forms). If word can be formed by combining element symbols from the periodic table, then forms should contain one or more sub-arrays, each consisting of strings of the form 'elementName (elementSymbol)', for each unique combination of elements that can form word.

// Example
// The word 'snack' can be formed by concatenating the symbols of 3 different combinations of elements:

// ----------------------------------------------------
// |       1        |       2        |       3        |
// |---------------------------------------------------
// | Sulfur    (S)  | Sulfur    (S)  | Tin       (Sn) |
// | Nitrogen  (N)  | Sodium    (Na) | Actinium  (Ac) |
// | Actinium  (Ac) | Carbon    (C)  | Potassium (K)  |
// | Potassium (K)  | Potassium (K)  |                |
// ----------------------------------------------------
// So elementalForms('snack') should return the following array:

// [
//   ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
//   ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
//   ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
// ]
// Guidelines
// Symbols can have length 1, 2 or 3 (this kata uses pre-2016 temporary symbols for elements 113, 115, 117 and 118).
// Capitalization does not matter:
// elementalForms('beach')
// // => [ ['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)'] ]
// elementalForms('BEACH')
// // => [ ['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)'] ]
// The order of the returned sub-arrays does not matter, but the order of the strings within each sub-array does matter -- they should be in the order that "spells out" word.
// If word is not an elemental word (that is, no combination of one or more element symbols can form word), return an empty array.
// You do not need to check the type of word. It will always be a (possibly empty) string.
// Finally, the helper object ELEMENTS has been provided, which is a map from each element symbol to its corresponding full name (e.g. ELEMENTS['Na'] === 'Sodium').

// Have fun!

// solution

// given elements object

const ELEMENTS = {
  H: "Hydrogen",
  He: "Helium",
  Li: "Lithium",
  Be: "Beryllium",
  B: "Boron",
  C: "Carbon",
  N: "Nitrogen",
  O: "Oxygen",
  F: "Fluorine",
  Ne: "Neon",
  Na: "Sodium",
  Mg: "Magnesium",
  Al: "Aluminium",
  Si: "Silicon",
  P: "Phosphorus",
  S: "Sulfur",
  Cl: "Chlorine",
  Ar: "Argon",
  K: "Potassium",
  Ca: "Calcium",
  Sc: "Scandium",
  Ti: "Titanium",
  V: "Vanadium",
  Cr: "Chromium",
  Mn: "Manganese",
  Fe: "Iron",
  Co: "Cobalt",
  Ni: "Nickel",
  Cu: "Copper",
  Zn: "Zinc",
  Ga: "Gallium",
  Ge: "Germanium",
  As: "Arsenic",
  Se: "Selenium",
  Br: "Bromine",
  Kr: "Krypton",
  Rb: "Rubidium",
  Sr: "Strontium",
  Y: "Yttrium",
  Zr: "Zirconium",
  Nb: "Niobium",
  Mo: "Molybdenum",
  Tc: "Technetium",
  Ru: "Ruthenium",
  Rh: "Rhodium",
  Pd: "Palladium",
  Ag: "Silver",
  Cd: "Cadmium",
  In: "Indium",
  Sn: "Tin",
  Sb: "Antimony",
  Te: "Tellurium",
  I: "Iodine",
  Xe: "Xenon",
  Cs: "Caesium",
  Ba: "Barium",
  Hf: "Hafnium",
  Ta: "Tantalum",
  W: "Tungsten",
  Re: "Rhenium",
  Os: "Osmium",
  Ir: "Iridium",
  Pt: "Platinum",
  Au: "Gold",
  Hg: "Mercury",
  Tl: "Thallium",
  Pb: "Lead",
  Bi: "Bismuth",
  Po: "Polonium",
  At: "Astatine",
  Rn: "Radon",
  Fr: "Francium",
  Ra: "Radium",
  Rf: "Rutherfordium",
  Db: "Dubnium",
  Sg: "Seaborgium",
  Bh: "Bohrium",
  Hs: "Hassium",
  Mt: "Meitnerium",
  Ds: "Darmstadtium",
  Rg: "Roentgenium",
  Cn: "Copernicium",
  Uut: "Ununtrium",
  Fl: "Flerovium",
  Uup: "Ununpentium",
  Lv: "Livermorium",
  Uus: "Ununseptium",
  Uuo: "Ununoctium",
  La: "Lanthanum",
  Ce: "Cerium",
  Pr: "Praseodymium",
  Nd: "Neodymium",
  Pm: "Promethium",
  Sm: "Samarium",
  Eu: "Europium",
  Gd: "Gadolinium",
  Tb: "Terbium",
  Dy: "Dysprosium",
  Ho: "Holmium",
  Er: "Erbium",
  Tm: "Thulium",
  Yb: "Ytterbium",
  Lu: "Lutetium",
  Ac: "Actinium",
  Th: "Thorium",
  Pa: "Protactinium",
  U: "Uranium",
  Np: "Neptunium",
  Pu: "Plutonium",
  Am: "Americium",
  Cm: "Curium",
  Bk: "Berkelium",
  Cf: "Californium",
  Es: "Einsteinium",
  Fm: "Fermium",
  Md: "Mendelevium",
  No: "Nobelium",
  Lr: "Lawrencium",
};

// single letter elements only

// double letters elements only

// mix of single and double elements

// higher order function

const mixOfSingleAndDoubleLetter = (word) => {
  console.log({ word });

  if (word === "") return [];

  let result = [];

  for (let i = 0; i < word.length; i++) {
    // for double letter ELEMENTS
    if (ELEMENTS[`${word[i].toUpperCase() + word[i + 1]}`]) {
      console.log(`here ${word[i].toUpperCase() + word[i + 1]}`);
      result.push(
        `${ELEMENTS[`${word[i].toUpperCase() + word[i + 1]}`]} (${
          word[i].toUpperCase() + word[i + 1]
        })`
      );
      i += 1;
    }
    // for single letter ELEMENTS
    else if (ELEMENTS[word[i].toUpperCase()]) {
      result.push(
        `${ELEMENTS[word[i].toUpperCase()]} (${word[i].toUpperCase()})`
      );

      // handle non elemental letters
    } else if (!ELEMENTS[word[i].toUpperCase()]) return [];
  }
  return result;
};

// single letter function

const singleLetter = (word) => {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (ELEMENTS[word[i].toUpperCase()]) {
      result.push(
        `${ELEMENTS[word[i].toUpperCase()]} (${word[i].toUpperCase()})`
      );
    }
  }
  return result;
};
// higher order function that returns results

const elementalForms = (word) => {

  if (word === "") return [];
  let result = [];

  if (mixOfSingleAndDoubleLetter(word))
    result.push(mixOfSingleAndDoubleLetter(word));
  if (singleLetter(word)) result.push(singleLetter(word));
  if (doubleLetter(word)) result.push(doubleLetter(word));
  // handle non elemental letters
  if (!ELEMENTS[word[i].toUpperCase()]) return [];
  return result;
};

console.log(elementalForms("beach"));
console.log(elementalForms("z"));
console.log(elementalForms("Si")); // =>   [ [ 'Silicon (Si)' ], [ 'Sulfur (S)', 'Iodine (I)' ]
