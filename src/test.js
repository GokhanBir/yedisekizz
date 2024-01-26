function LetterCount(str){
    const words=str.split("");
    const eleman={};
    const totalStr="";
   words.forEach(e => {
        eleman[e]=eleman[e]? ++eleman[e]:1
   });

/*    for (const [key,value] of Object.entries(eleman)) {
    totalStr +=(value+key);
   }

   return totalStr; */

   const elt=Object.keys(eleman);

   const valt=Object.values(eleman);

   console.log("keys: "+elt+" "+"value: "+valt);;
let element;
  for (let i = 0; i < elt.length; i++) {
    element = valt[i]+elt[i];
    
    
  }
  console.log(element);
}