const obj = {a: 5};

obj.a = 10;

console.log(obj);
console.log(obj.a);
console.log(this);

const add = (a, b) => a + b;

let result = add(2,5);
console.log(result);

const myObj = {
    a: 5,
    foo: () => {
        console.log(this);
    },
    foo2: function() {
        console.log(this);
    }
}

myObj.foo();
myObj.foo2();
console.log(myObj.a);


// Spread & Rest

const arr = [1,2,3];

console.log(arr);
console.log(arr[2]);

console.log(1,2,3);
console.log(...arr);

const arr2 = [...arr, 4];

console.log(arr2);

const myObj2 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(myObj2);

const myObj3 = {
    ...myObj2,
    d: 4
}
console.log(myObj3);

function add2(...args) {
    console.log(args);
    
    let result = 0;
    for(const arg of args) {
        result += arg;
    }
    return result;
}
console.log(add2(3,9));

const recursive = n => {
    if(n == 0) {
        console.log(n);
    } else {
        console.log(n);
        recursive(n-1);
        console.log(n);
    }
}

recursive(5);


// Functions pures

let x = 2;

const add3 = y => x += y;

const add4 = (a, b) => a + b;

console.log(add3(5));
console.log(add3(5));
console.log(add3(5));
console.log(add3(5));

console.log(x);

console.log(add4(x,5));
console.log(add4(x,5));
console.log(add4(x,5));
console.log(add4(x,5));


// Fonctions d'ordre supérieur

const  arr3 = [3, 422, 12, 291, 67, 98, 734];

const newArr1 = [];

for(let i=0; i<arr3.length; i++) {
    if(arr3[i] > 100) {
        newArr1.push(arr3[i]);
    }
}
console.log(newArr1);

function superieur_inferieur(arr, fn) {
    const newArr2 = [];
    for(let number of arr) {
        if(fn(number)) {
            newArr2.push(number);
        }
    }
    return newArr2;
} 

const sup100 = superieur_inferieur(arr3, (item) => {
    if(item > 100) {
        return item;
    }
})
console.log(sup100);

const inf100 = superieur_inferieur(arr3, (item) => {
    if(item < 100) {
        return item;
    }
})
console.log(inf100);


// Les fonctions d'ordre supérieur des tableaux

const arr4 = [1,2,3,4,5,6];

const mappedArr = arr4.map(num => num + 10);
console.log(mappedArr);

const filteredArr = arr4.filter(num => num > 3);
console.log(filteredArr);

arr4.forEach(num => console.log(num));


// Destructuring

const pays = {
    nom: "Italie",
    pop: 60
}

const nom_old = pays.nom;
console.log(nom_old);

const {nom, pop} = pays;
console.log(nom, pop);

const data = ({nom}) => nom;
console.log(data(pays));

const arr5 = [1,2,3];
const [a,b,c] = arr5;
console.log(a, b, c);

