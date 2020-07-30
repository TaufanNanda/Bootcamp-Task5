const WORDS = ['aku','ingin','dapat']
const sentence = "Aku ingin begini \nAku ingin begitu \nIngin ini itu banyak sekali \n\nSemua semua semua \nDapat dikabulkan \nDapat dikabulkan \nDengan kantong ajaib \n\nAku ingin terbang bebas \nDi angkasa \nHei… baling baling bambu \n\nLa... la... la... \nAku sayang sekali \nDoraemon \n\nLa... la... la... \nAku sayang sekali"

var Aku =  sentence.match(/\bAku\b/g);
var aku =  sentence.match(/\baku\b/g);
var ingin =  sentence.match(/\bingin\b/g);
var Dapat =  sentence.match(/\bDapat\b/g);
var dapat =  sentence.match(/\bdapat\b/g);

Aku = Aku? Aku.length : 0;
aku = aku? aku.length : 0;
ingin = ingin? ingin.length : 0;
Dapat = Dapat? Dapat.length : 0;
dapat = dapat? dapat.length : 0;

console.log('Aku = ',Aku);
console.log('aku = ',aku);
console.log('ingin = ',ingin);
console.log('Dapat = ',Dapat);
console.log('dapat = ',dapat);