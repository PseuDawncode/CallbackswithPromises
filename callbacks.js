
    const playCards = () => {
        return new Promise((resolve, reject) => {
          let result = Math.random();
      
          if (result > 0.5) { 
            fetch('https://api.adviceslip.com/advice')
              .then(response => {
                if (!response.ok) {
                  throw new Error('The Network was not ok.');
                }
                return response.json(); 
              })
              .then(data => {
                resolve(`Congratulations! You have a result of ${result}. Here's some advice for you: "${data.slip.advice}"`);
              })
              .catch(error => {
                reject('Error fetching advice: ' + error.message);
              });
          } else {
            reject(`Sorry, you lose with a result of ${result}.`);
          }
        });
      }
      
      playCards()
        .then((message) => {
          console.log(message); 
        })
        .catch((error) => {
          console.error(error); 
        });