// Closure
function salamKenal() {
  let orang = {
    nama: 'Revan',
    nim: 120140049,
    kelas: 'PAM - RA',
  }

  const perkenalan = () => {
    console.log(
      `Saya ${orang.nama} dengan NIM: ${orang.nim} kelas ${orang.kelas}`
    )
  }

  perkenalan();
}

salamKenal();


// Immediately Invoked Funtion Expression
((nama, nim) => {
  console.log(`Halo saya ${nama} dengan NIM: ${nim}`);
})("Revan", 120140049);


// First-Class Function
let arr = ['Revan', 'Fauzi', 'Algifari'];
arr.forEach((surname) => console.log(surname)); // Fungsi jadi argumen

const square = (num) => { // Fungsi disimpan dalam variabel
  console.log(num ** 2);
}

square(4);


// Higher-Order Function
let number = [1, 2, 3];
number.forEach((num) => console.log(`Kelipatan 2 dari ${num} adalah ${num * 2}`));


// Execution Stack
let kelas ='PAM - RA';

const first = () => {
  let name = 'Algifari';
  second();
  console.log(`${name}`);
}

const second = () => {
  let name = 'Fauzi';
  third();
  console.log(`${name}`);
}

const third = () => {
  let name = 'Revan';
  console.log(`${name}`);
}

first();

// Callbacks
const masakAir = callback => {
  let air = null;
  console.log('Air sedang panaskan....');
  setTimeout(() => {
    air = 'Air sudah mendidih';
    callback(air);
  }, 3000)
}

masakAir(air => {
  console.log(air);
});


// Promises
const tabungan = {
  uang: 100000,
};

const cekUang = () => {
  return new Promise((resolve, reject) => {
    if (tabungan.uang >= 75000) {
      resolve('Uang mencukupi');
    } else {
      reject('Uang kurang!');
    }
  });
};

const handleSuccess = successMsg => {
  console.log(successMsg);
}

const handleReject = rejectMsg => {
  console.log(rejectMsg);
}

cekUang()
  .then(handleSuccess)
  .catch(handleReject);


// Async - Await
const ambilGaji = () => {
  return new Promise((resolve, reject) => {
    let gaji = 2000000;
    setTimeout(() => {
      if (gaji >= 0) {
        resolve('Gaji didapatkan');
      } else {
        reject('Tidak dapat Gaji');
      }
    }, 2000);
  });
}

async function gajian() {
  const gaji = await ambilGaji();
  console.log(gaji);
}

gajian();
