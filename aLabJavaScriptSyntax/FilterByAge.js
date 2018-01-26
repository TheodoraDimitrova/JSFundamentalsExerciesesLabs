function filterByAge(minAge, nameA, ageA, nameB, ageB) {

    let personA = {name:nameA, age:ageA};

    let personB = {name:nameB, age:ageB};

    if (personA.age >= minAge){
        console.log(personA);
    }
    if (personB.age >= minAge)
    {
        console.log(personB);
    }

}
console.log(filterByAge(10,'teddy',27,'Svet',25));
console.log(filterByAge(12, 'Ivan', 15, 'Asen', 9));