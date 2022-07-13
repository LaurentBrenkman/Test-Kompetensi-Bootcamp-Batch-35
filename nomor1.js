function hitungdata(barang, qty){
	if(barang==='A'){
        if(qty>13){
            var hargaawal=4550;
            var totalharga=hargaawal*qty;
            var potongan=231*qty;
            var totalbayar = totalharga-potongan;
        }
    }else if(barang==='B'){
        if(qty>7){
            var totalharga = qty*5330;
            var potongan = totalharga*0.23;
            var totalbayar = totalharga-potongan;
        }
    }else if(barang==='C'){
            var totalharga =qty*8653;
            var potongan = 0;
            var totalbayar = totalharga-potongan;
    }else{
        // untuk memunculkan hasil apabila data yang di kirim diluar variable data barang
        var totalharga=0;
        var totalbayar=0;
        var potongan=0;
    }
    console.log("total harga barag =" + totalharga);
    console.log("potongan =" + potongan);
    console.log("total bayar =" + totalbayar);
    // console.log(barang)
}
hitungdata('A',14);
