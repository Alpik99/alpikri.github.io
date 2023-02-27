//PERCABANGAN 
//CONTOH
// let totalNilai = prompt("Masukan nilai?" , 0);

// if(totalNilai > 90){
//     document.write("<h2>anda sudah lolos ujian</h2>");
// }

// document.write("<p>terimakasih sudah mengikuti ujian</p>");


// let nilai = prompt("Masukan nilai" , 0);
// if(nilai >= 90){
//     document.write("<h2>selamat anda lolos </h2>");
// }else{
//     document.write("jangan menyerah");

// }
// document.write("<p>terimakasih sudah   berjuang</p>");

//let faiz = prompt("pergi atau tidak" , "");
// let pacarFaizkabur = "";
// if(faiz == "pergi"){
//     pacarFaizkabur = "oke kita putus"
// }else{
//     pacarFaizkabur = "jangan dong sayang";
// }
// document.write("<center><h1>pacar Faiz kabur</h1><center>"

//switch case
//PERCABANGAN
//percabangan switch/case adlah bentuk lain dari percabagan if/else/if
//struktur switch/case
// switch(kondisi){
//     case"1":
//     //code
//     break;
//     case"value":
//     //code
//     break;
//     default:
// }

//contoh
let hadiah = prompt("silahkan pilih hadiahmu dari 1-5!");
let hasilHadiah = "";

switch(hadiah){
    case "1":
        hasilHadiah = "aipon 14 bodrex";
        break;
    case "2":
        hasilHadiah = "vega bapak";
        break;
    case "3":
        hasilHadiah = "ROG ZYPRUS";
        break;
    case "4":
        hasilHadiah = "bebek goreng";
        break;
    case "5":
        hasilHadiah = "booth mixue";
        break;
    default:
        hasilHadiah = "tidak ada";
        document.write(`<h3>Opps! Pilihan anda ${hasilHadiah}</h3>`);

}

if (hasilHadiah ===""){
    document.write(`<p>kamu gagal mendapatkan hadiah`);
}else{
    document.write(`<h2>selamat kamu mendapatkan ${hasilHadiah}`);
}