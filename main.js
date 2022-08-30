let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;


  let increment = () =>  {
  
  count += 1;
  countEl.textContent /*innerText*/ = count;
  return count;
  
}

let save = () => {
 saveEl.textContent  /*innerText*/ += (` ${count} - `);
 countEl.textContent = 0;
 count = 0;
}

