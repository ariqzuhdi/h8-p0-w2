var nama = 'Ariq'
var peran = 'Ksatria' //Ksatria, Tabib, atau Penyihir

if (nama === '' && peran === ''){
    console.log('Nama harus diisi!')
}   
    else if (nama === 'Ariq' && peran === '') {
    console.log ('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}
    else if (nama === 'Ariq' && peran === 'Ksatria'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama + '!')
        console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
    }
    else if (nama === 'Ariq' && peran === 'Tabib'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama + '!')
        console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
    }
    else if (nama === 'Ariq' && peran === 'Penyihir'){
        console.log('Selamat datang di Dunia Proxytia, ' + nama + '!')
        console.log('Halo penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
   
}