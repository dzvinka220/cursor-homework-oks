function getRandomChinese (length){
  const start = Date.now();
  return new Promise((resolve,reject) =>{
    let result = '';

    if (length <= 0) {
      reject(new Error("Invalid input data!"))
    } else {
      for (let i = 0; i < length; i++) {
        setTimeout( ()=> {
          result += String.fromCharCode(Date.now().toString().slice(8));
            if(length === result.length) resolve(result)
        }, i * 50 + 50)
      }
    }
  })
  .then(
    result => {console.log(`Result: ${result}`);
    console.log(`Time: ${Date.now() - start} ms`)}
  )
  .catch(
    error => console.log(error)
  )
}
getRandomChinese(4);