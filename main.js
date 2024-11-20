// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}





function quote(){
  var thing=``;

  const num = randomNumber(1, 4) 
  console.log(num)
  if (num == 1){
  thing = `
    <h4 class="text-center  my-5 ">“A friend is someone who knows all about you and still loves you.”</h4>
  <h4 class="text-center  my-5 ">--Frank Sinatra</h4>
`
  }

  if (num == 2){
  thing =  `
    <h4 class="text-center  my-5 ">“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”</h4>
      <h4 class="text-center  my-5 ">― William W. Purkey</h4>
    `
  }
  else{
  thing =`    
    <h4 class="text-center  my-5 ">“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”</h4>
         <h4 class="text-center  my-5 "> Mae West</h4>
         `
  }
 

  document.getElementById("zorar").innerHTML=thing


}



