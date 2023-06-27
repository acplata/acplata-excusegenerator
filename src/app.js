const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const parrafo = document.getElementById("excuse");

function excuseGenerator(array){
  const getExcuseGenerator = Math.floor(Math.random() * array.length);
  return array[getExcuseGenerator];
}
 const randomWho = excuseGenerator(who);
 const randomAction = excuseGenerator(action);
 const randomWhat = excuseGenerator(what);
 const randomWhen = excuseGenerator(when);
 console.log(randomWho,randomAction,randomWhat,randomWhen);

 const excuse = excuseGenerator(`${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`);
 parrafo.innerText = excuse