
  const promise = new Promise((resolve, reject) => {
    const term1 = 2;
    const term2 = 2;
    const expression = term1 + term2;
    const answer = 4;
    const expressionIsCorrect = expression === answer;
  
    // 2 + 2 = 4, and 4 = 4, so this is true!
    if (expressionIsCorrect) {
      resolve('The promise was fulfilled!');
    } else {
      reject({
        errorType: 'ArithmeticError',
        message: "The expression didn't evaluate correctly.",
        originalExpression: `${term1} + ${term2} === ${answer}`,
      });
    }
  });
  
  promise
    .then((message) => {
      console.log(`Success: ${message}`);
    })
    .catch((err) => {
      console.log(
        `${err.errorType}: ${err.message} \nOriginal Expression: ${err.originalExpression}`
      );
    })
    .finally((message) => {
      console.log('Operations finished');
    });
  
  // Output: Success: The promise was fulfilled!