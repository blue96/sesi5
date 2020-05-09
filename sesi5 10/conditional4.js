let a = 'RIGHT';

switch (a) {
    case 'UP':{
        console.log('karakter berjalan ke atas')
        break;
    }

    case 'BOTTOM':{
        console.log('karakter berjalan ke bawah')
        break;        
    }

    case 'RIGHT':{
        console.log('karakter berjalan ke kanan')
        break;        
    }
        
    case 'LEFT':{
        console.log('karakter berjalan ke kiri')
        break;
    }
        
    default:{
        console.log('inputan tidak valid');
        break;
    }
}