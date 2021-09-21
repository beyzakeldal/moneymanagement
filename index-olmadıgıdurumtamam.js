var btn=document.querySelector('.saved');
btn.onclick=function(){
    var dat=document.getElementById('date');

    var txt=document.getElementById('text');

    var num=document.getElementById('quantity');
    
    addtolocalStorage(dat.value, { txt: txt.value, num: num.value });
    
}

function addtolocalStorage(tarih, harcamaDetay){

  const harcamalarim = JSON.parse(localStorage.getItem("harcamalarim"));

  if (harcamalarim[tarih]){
      console.log("Bu tarih var!");
      console.log(harcamalarim[tarih])
  }else{
      console.log("Bu tarih yok ")
      
      // harcamalarim objesinin sonuna bir değer eklenmeli ve localStroage tekrardan set edilmeli.
     harcamalarim[tarih]=[
         {
             desc:harcamaDetay.txt ,
             price:harcamaDetay.num
         }
     ];
     localStorage.setItem("harcamalarim", JSON.stringify(harcamalarim));
     }

  }
