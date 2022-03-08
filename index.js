const readline = require('readline');
const operations = require('./operations');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nilai = [];

const hitungNilai = () => {
  console.log(nilai);
  rl.question('Input nilai: ', (answer) => {
    if (answer === 'q') {
      rl.close();
      operations.nilaiMaxMin(nilai);
      operations.mean(nilai);
      operations.filterLulus(nilai);
    } else {
      if (!operations.validateNumbers(answer)) {
        console.log('nilai yang anda masukan tidak valid');
      } else {
        nilai.push(answer);
      }
      hitungNilai();
    }
  });
};

hitungNilai();