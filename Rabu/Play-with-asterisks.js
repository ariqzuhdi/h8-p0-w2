//1. Menyusun Barisan Bintang
var row = 5
for(var i = 0; i < row; i++){
    console.log('*')
}

//2. Menyusun Barisan Bintang dengan Nested Looping
var row = 5
for(var i = 0; i < row; i++){
   var hasil = ''
   for(var j = 0; j < row; j++){
       hasil += '*'
   }
   console.log(hasil)
    }


//3. Menyusuh Barisan Tangga Bintang dengan Nested Looping
var row = 5
for(var i = 4; i < row; i++){
    var hasil = ''
    for(var j = 0; j < row; j++){
        hasil += '*'
        console.log(hasil)
    }
}