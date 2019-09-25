//1. Melakukan Looping Menggunakan While
var looping = 2
console.log('LOOPING PERTAMA')
while(looping <= 20){
    console.log(looping + ' - I love coding')
    looping += 2;
}
console.log('LOOPING KEDUA')
var looping2 = 20
while(looping2 >= 2 ){
    console.log(looping2 + ' I will become fullstack developer')
    looping2 -= 2;
}

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(var number = 1; number <= 20; number ++){
    console.log(number + ' - I love coding')
}
console.log('LOOPING KEDUA')
for(var number = 20; number > 0; number --){
    console.log(number + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
for(var number = 1; number <= 100; number++){
    if(number % 2 !== 0){
        console.log(number + ' GANJIL')
    }
    else if(number % 2 === 0){
        console.log(number + ' GENAP')
    }
}

for(var number = 1; number <= 100; number+=2){
    if(number % 3 === 0){
        console.log(number + ' Kelipatan 3')
    }
}

for(var number = 1; number <= 100; number+=5){
    if(number % 6 === 0){
        console.log(number + ' Kelipatan 6')
    }
}

for(var number = 1; number <= 100; number+=9){
    if(number % 10 === 0){
        console.log(number + ' Kelipatan 10')
    }
}