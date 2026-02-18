function randInt(num) {
  const rand = Math.floor(Math.random() * (num + 1));
  return rand;
}

function generateRandomArray(length, min = 0, max = 100) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return arr;
}

function mergeSort(arr) {
  let aux = new Array(arr.length);

  function mergeSortRecursive(left, right) {
    if (right - left <= 1) return;

    const mid = Math.floor((right + left) / 2);

    mergeSortRecursive(left, mid);
    mergeSortRecursive(mid, right);

    let i = left,
      j = mid,
      k = left;
    while (i < mid && j < right) {
      if (arr[i] <= arr[j]) {
        aux[k++] = arr[i++];
      } else {
        aux[k++] = arr[j++];
      }
    }
    while (i < mid) {
      aux[k++] = arr[i++];
    }
    while (j < right) {
      aux[k++] = arr[j++];
    }

    for (let t = left; t < right; t++) {
      arr[t] = aux[t];
    }
  }
  mergeSortRecursive(0, arr.length);
  return arr;
}

let myArrayFor1 = [];
function zadanie1() {
  const randMax = randInt(5);
  myArrayFor1.push(randMax);
  console.log(myArrayFor1);
}

function zadanie2() {
  const myArray = [];
  while (myArray.length < 10) {
    const randMax = randInt(20);
    if (randMax % 2 === 0) {
      myArray.push(randMax);
    }
  }
  console.log(myArray);
}

let myArrayFor3i4 = [];
function zadanie3() {
  myArrayFor3i4 = [];
  for (let i = 0; i <= 10; i++) {
    const randMax = randInt(20);
    if (randMax % 2 === 0) {
      myArrayFor3i4.push(randMax);
    }
  }
  console.log(myArrayFor3i4);
  return myArrayFor3i4;
}

function zadanie4() {
  const usuniete = [];
  if (!myArrayFor3i4) {
    alert("Najpierw naciśnij przycisk");
    return;
  }
  while (myArrayFor3i4.length > 3) {
    usuniete.push(myArrayFor3i4.shift());
  }
  console.log(`Ucunięte elementy: ${usuniete}`);
  console.log(`Nowa zawartość tablicy to ${myArrayFor3i4}`);
}

function zadanie5() {
  const numbers = generateRandomArray(10000, 1, 10000);

  // 1
  //   while (true) {
  //     let i = +prompt("Podaj liczbę");
  //     if (isNaN(i)) {
  //       alert("Musisz podać tylko liczby");
  //       continue;
  //     }
  //     if (!i) {
  //       alert("Nic nie wpisałeś");
  //       break;
  //     }
  //     numbers.push(i);
  //   }

  console.log(`Tablica - ${numbers}`);

  // 2
  const minNum = Math.min(...numbers);
  const maxNum = Math.max(...numbers);

  console.log(`Najmniejsza podana wartość - ${minNum}`);
  console.log(`Największa podana wartość - ${maxNum}`);

  // 3
  let srednia = 0;

  for (let n = 0; n < numbers.length; n++) {
    srednia += numbers[n];
  }

  let sredniaRes = srednia / numbers.length;
  console.log(`Średnia wartość podanych liczb to - ${sredniaRes}`);

  // 4
  let numberOf3 = 0;
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] === 3) {
      numberOf3++;
    }
  }

  if (numberOf3) {
    console.log(`Ilość podanych trójek - ${numberOf3}`);
  } else {
    console.log("Nie podałeś żadnych trójek");
  }

  // 5
  const sortedNumbers = mergeSort(numbers);
  console.log(`Posortowana tablica - ${sortedNumbers}`);

  // 6
  const n = sortedNumbers.length;
  const middleIndex = Math.floor(n / 2);

  let median;
  let calculationDetails = "";

  if (n % 2 !== 0) {
    median = sortedNumbers[middleIndex];
    calculationDetails = `Środkowy element (indeks ${middleIndex}): ${median}`;
  } else {
    median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    calculationDetails = `Średnia dwóch środkowych elementów: (${
      sortedNumbers[middleIndex - 1]
    } + ${sortedNumbers[middleIndex]}) / 2 = ${median}`;
  }

  console.log(calculationDetails);

  // 7
  const smallest = sortedNumbers.slice(0, 3);
  const largest = sortedNumbers.slice(-3);

  console.log(`Trzy najmniejsze liczby: ${smallest}`);
  console.log(`Trzy największe liczby: ${largest}`);

  // 8
  const squares = sortedNumbers.map((x) => x * x);
  console.log(`Wszyskie liczby z tablicy podniesione do kwadratu: ${squares}`);

  // 9
  let numbersOfEven = 0;
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {
      numbersOfEven++;
    }
  }

  if (numbersOfEven) {
    console.log(`Ilość podanych parzystych liczb - ${numbersOfEven}`);
  } else {
    console.log("Nie podałeś żadnych parzystych liczb");
  }

  // 10
  let numbersOfPod3 = 0;
  for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {
      numbersOfPod3++;
    }
  }

  if (numbersOfPod3) {
    console.log(
      `Ilość podanych liczb podzielnych przez 3 bez reszty - ${numbersOfPod3}`
    );
  } else {
    console.log("Nie podałeś żadnych liczb podzielnych przez 3 bez reszty");
  }
}
