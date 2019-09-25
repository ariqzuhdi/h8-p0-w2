function konversiMenit(menit){
    var jam = menit/60
    if(jam < 1){
        jam = 0
    }

var minute =menit % 60
if(minute < 10){
    minute = '0' + minute
}

return Math.round(jam) + ':' + minute
}


console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
