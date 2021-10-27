const data = require("./db.json");

//console.log({data})
   
/*const soal1 = (name) =>
        data.filter((v) => v.placement.name === name).map((v)=>v.name);
console.log(soal1("Meeting Room"));

const result = data.map((a)=>a.tags);
console.log({result});

const result2 = (name) =>
data.map((b)=>b.placement.name === name);
console.log(result2("Meeting Room"));

const result = data.map((a)=>a.placement.name.match("Meeting Room"));
console.log({result})*/
console.log("Soal Pertama \n");
const item = data.filter((a)=>a.placement.name.match("Meeting Room"))
console.log(item);

console.log("Soal Kedua \n");
const electronic = data.filter((b)=>b.type.match("electronic"))
console.log(electronic)

console.log("Soal Ketiga \n");
const furniture = data.filter((c)=>c.type.match("furniture"))
console.log(furniture);

console.log("Soal Keempat \n");
/*const unixTime = data.filter((d)=>d.purchased_at);
console.log(unixTime);

console.log("Soal Kelima \n");
/*const brown = data.filter((e)=>e.tags.match("brown"))
console.log(brown);*/


