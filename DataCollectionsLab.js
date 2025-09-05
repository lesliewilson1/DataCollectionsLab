//Part 1 & 2

/* 
let employee = ["ID", "Name","Occupation", "Age"];
let id = [42, 57, 63, 98];
let name = ['Bruce', 'Bob', 'Blaine', 'Bill'];
let occupation = ['Knight', 'Fry Cook', 'Quiz Master', 'Doctor/s Assistant'];
let age = [41, 19, 58, 26];

 let employeearray = []; 
 let employeetable = [];

employeetable.push(employee);

for (let i = 0; i < id.length; i++) {
  let row = [id[i], name[i], occupation[i], age[i]];
  employeetable.push(row);
}

 employeearray.push(employeetable);

console.log(employeearray);
*/ 

//Part 3 - Please comment out Part 1 & 2 to run

let employee = ["ID", "Name","Occupation", "Age"];
let id = [42, 57, 63, 98];
let name = ['Bruce', 'Bob', 'Blaine', 'Bill'];
let occupation = ['Knight', 'Fry Cook', 'Quiz Master', 'Doctor/s Assistant'];
let age = [41, 19, 58, 26];

 let employeetable = [];

employeetable.push(employee);

for (let i = 0; i < id.length; i++) {
  let row = [id[i], name[i], occupation[i], age[i]];
  employeetable.push(row);
}


employeeobject = {
  table: employeetable
};

let employeetableLowercase = employeetable.map(row => row.map(cell => {let str = cell.toString();
  return str.toLowerCase();
})
);

console.log(employeetableLowercase);


//Part 4



//Part 5


/* Old Code
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";
let rows = csv.split("\n");

for (let i = 0; i < csv.length; i++) {
  let cells = rows[i].split(",");

console.log(cells);

}
*/


 

  
  
  
  
  
  
  
  
  
