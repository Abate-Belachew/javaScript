/*
 4) Write a function that prints this version of children's song
"10 in the bed, the little one said rollover, 1 fell off" 
"9 in the bed.."
"8 in the bed.."
...
"1 in the bed, the little one said I am lonely!"

"The little one said, Everybody back on the bed!"
*/


function littleSaidRollover() {
    for (let i = 10; i > -1; i--) {
      let c = i + ' ' + 'in the bed, the little one said rollover, 1 fell off';
      if (i == 1) {
        c = i + ' ' + 'in the bed, the little one said I am lonely!';
      } else if (i == 0) {
        c = 'The little one said, Everybody back on the bed!';
                
      }
    
    console.log(c);
    }
}

// littleSaidRollover();