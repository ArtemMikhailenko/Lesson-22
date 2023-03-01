// Завдання 1

let car = {
    model : 'Tesla' ,
    year : 2020 ,
    color: 'grey' ,
    signal:function(){
        alert('!fa! fa')
    } 
}

car.color = 'black' ;
car.type = 'electric';
console.log(car)
car.signal();



// Завдання 2

let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay(){
        alert('We must pay salary on Tuesday!');
    },
    
total() {
    
    for (const key in salaries) {
        sum += salaries[key]
    }
    console.log(sum)
}
}
let sum = 0;
salaries.total(sum)
// Підскажіть , будь-ласка, як зробити так , щоб воно виводило тільки суму , без частини коду


//Завдання 3-4

function Computer(brand, system, coast) {
  this.brand = brand;
  this.system = system;
  this.coast = coast;

  this[Symbol.toPrimitive] = function (hint) {
    console.log(hint); 
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.coast;
      case "default":
        return this.brand + " " + this.system + " "+ this.coast + '//';
    }
  }
}
let dell = new Computer('Dell', 'windows', 800);
let apple = new Computer('Apple', 'MAC OS', 1700);

let group = {};
group[dell] = dell + apple;
console.log(group);
console.log(String(dell))
console.log(+apple)