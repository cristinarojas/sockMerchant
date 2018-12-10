// John works at a clothing store.
// He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

// [10, 20, 20, 10, 10, 30, 50, 10, 20]

function pairsSocks(stocks) {
  let counter = 0;
  let sortedStocks = stocks.sort((a,b) => a - b); // [10, 10, 10, 10, 20, 20, 20, 30, 50]

  for(var i = 0; i < sortedStocks.length - 1; i ++) {
    if (sortedStocks[i] === sortedStocks[i + 1]) {
      counter += 1; // or counter ++
      i += 1; // or i ++ - increment the i to select the second element after this selected element.
    }
    // here the i++ of the for will be add 1 again.
  }

  return counter;
}

pairsSocks([10, 20, 20, 10, 10, 30, 50, 10, 20]);


/*
for (statement 1; statement 2; statement 3) {
  code block to be executed
}

Statement 1 is executed (one time) before (ANTES) the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after (DESPUES) the code block has been executed.

*/
