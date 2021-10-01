for (let i = 0; i<=10;i++){
      console.log('outer loop: ',i);
       for(let j = 10; j >=0; j-=2) {
       console.log('  inner loop: ', j);
            }
      
         }

         const gameBoard = [
            [ 4, 32, 8, 4 ],
            [ 64, 8, 32, 2 ],
            [ 8, 32, 16, 4 ],
            [ 2, 8, 4, 2 ]
      ];
      
      let totalScore = 0;
      for(let i = 0; i < gameBoard.length; i++) {
          let row = gameBoard[i];
          
          for(let j = 0; j < row.length; j++) {
          totalScore += row[j];      
          }
      }
      const target1 = Math.floor(Math.random() * 10);
      let guess1 = Math.floor(Math.random() * 10);
      while(guess1 !== target1){
          console.log(`${target1} ${guess1}`)
          guess1 = Math.floor(Math.random() * 10);
      }
      console.log(`${target1} ${guess1}`)     