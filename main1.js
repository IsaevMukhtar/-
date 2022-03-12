/*
if (21 != 21 || 15 < 30 ) {
    console.log('TRUE')
}
else{
    console.log('FOLSE')
}
*/

/*
let x = 10;


    if (x == 10) {
    x = 'true'
    }
    else{
        x = 'folse'
    };

x=(x==10) ? 'true' : 'fslse';
console.log(x);
*/

/* 
function counts(caunt1, caunt2){
    let counts= caunt1+caunt2
    console.log(counts)
    return counts
}
let countFruit = counts(10, 17)
let countVegetable = counts(20, 50)
counts(countFruit,countVegetable)
*/
/*
function counts(caunt1,caunt2){
    return caunt1+caunt2
}
console.log(counts(18, 25))
console.log(counts(20, 10))
*/
//anonimdi funk.
/*
let counts=function(){
    return 20+25
}
console.log(counts())
*/


// rekursiya
/*
number= 0
function go(number){
    number++
    console.log(number) 
    if (number <100) {
        go(number)
    }
} 
go(number)
*/


// continue-operatori
/*
for($i=0; $i<=100; $i++){
    if(50<$i && $i<70){
        continue
    }
    console.log($i)
}
*/

/*

//break- operatori
for($i=0; $i<=100; $i++){

    if($i==50){
        break
    }
    console.log($i)
}
*/

// while- operatorin qosu
/*
for($i=0; $i<2; $i++){
    let number=0

    while(number<50){
        number++
        if(number==5){
            break
        }
        console.log(number)
    }
}
*/

// Metka- qoldanu
/*
lableOne: for($i=0; $i<10; $i++){
    let number=0

    while(number<50){
        number++
        if(number==5){
            break lableOne
        }
        console.log(number)
    }
}
*/

/*
let myArray=[
    10,
        [20, 30,
            [40, 50, 60 
            ]
        ],
    11
        ]
console.log(myArray)
*/
//obektter
/*
let myCar1 = {
    name: 'Tayota',
    model: 'Camry',
    year: 2015,
    
}
let myCar2 = {
    name: 'Huyndai',
    model: 'Elantra',
    year: 2018,

    getFullname: function(){
        return this.name + ' ' + this.model
    },
    age: function(){
        return new Date().getFullYear() - this.year
    }
}
console.log(myCar2.getFullname())
console.log(myCar2.age())
*/

//klass
/*
class Car {
    constructor(name, model, year){
        this.name = name,
        this.model = model,
        this.year = year
    }
    getFullname(){
        return this.name + ' ' + this.model
    }
    age(){
        return new Date().getFullYear() - this.year 
    }
}
let car1 = new Car('Toyota','Camry', 2012)
let car2 = new Car('Huyndai','Accent', 2019)
 
console.log(car1.age())
*/