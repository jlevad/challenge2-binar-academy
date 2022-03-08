const validateNumbers = (nilai) => {
  if (isNaN(nilai)) {
    return false;
  }
  return true;
}

const nilaiMaxMin = (nilai) => {
  if (nilai.length > 0) {
    console.log(`nilai tertinggi : ${Math.max(...nilai)}`);
    console.log(`nilai terendah : ${Math.min(...nilai)}`);
  } else {
    console.log(`nilai tertinggi : 0`);
    console.log(`nilai terendah : 0`);
  }
}

const mean = (nilai) => {
  let count = 0;
  let hitungMean;
  nilai.forEach(value => {
    count += Number(value)
  });
  hitungMean = count / nilai.length;
  console.log(`Nilai rata - rata: ${hitungMean}`)
}

const filterLulus = (nilai) => {
  let lulus = [];
  let tidakLulus = [];
  nilai.forEach(value => {
    if (value >= 75) {
      lulus.push(value);
    } else {
      tidakLulus.push(value)
    }
  });
  console.log(`Jumlah lulus : ${lulus.length}`)
  console.log(`Jumlah tidak lulus : ${tidakLulus.length}`)
}

module.exports = {
  validateNumbers,
  nilaiMaxMin,
  mean,
  filterLulus,
}