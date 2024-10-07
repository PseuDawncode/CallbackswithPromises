//ASYNC AND AWAIT WITH PROMISES

const playCards = async () => { //added async only
  // return new Promise((resolve, reject) => {
  // let result = Math.random();
          try {
              let result = Math.random();
              if (result > 0.5) {

        //fetch('https://api.adviceslip.com/advice')
        // .then(response => {
      const response = await fetch('https://api.adviceslip.com/advice');
              if (!response.ok) {
                      throw new Error('The Network was not ok.');
                    }
        //return response.json();
        
        //.then(data => {
       const data = await response.json();
          //changed resolve to return
           return `Congratulations! You have a result of ${result}. Here's some advice for you: "${data.slip.advice}"`;
      
              } else {
                    //reject(`Sorry, you lose with a result of ${result}.`);
                    throw new Error(`Sorry, you lose with a result of ${result}.`);
                  }
              //.catch(error => {
              } catch (error) {
                  //reject(`Sorry, you lose with a result of ${result}.`);
                  throw new Error('Error fetching advice: ' + error.message);
                }
              };
  

    //playCards()
    (async () => {
      
    //.then((message) => {
          try {
            const message = await playCards();
            console.log(message);
        
    //.catch((error) => {
          } catch (error) {
            console.error(error.message);
          }
          })();
      