function isFruitVegetable(item) {
    let fruits="banana, apple, kiwi, cherry, lemon, grapes, peach";
    let vegetables="tomato, cucumber, pepper, onion, garlic, parsley";
    if(fruits.includes(item)){
        console.log('fruit');
    }else if(vegetables.includes(item)){
        console.log('vegetable');
    }else{
        console.log('unknown');
    }

}
isFruitVegetable('apple');