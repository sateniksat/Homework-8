let splitBill = (amount, numPeople) =>
  `Each person needs to pay ${amount / numPeople} `;
console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
////////////////********************
let countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return decrease=()=>{
    countFromNum -= step;
    return countFromNum;
  };
};
const countingDown = countdown(20, 2);
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
console.log(countingDown());