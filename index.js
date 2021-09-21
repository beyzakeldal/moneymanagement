    var btn=document.querySelector('.saved');
    btn.onclick=function(){
      var dat=document.getElementById('date');

      var txt=document.getElementById('text');

      var num=document.getElementById('quantity');

      if (dat.value !== '' && txt.value !== '' && num.value !== ''){
        addtolocalStorage(dat.value, { txt: txt.value, num:parseFloat( num.value )});   

      }  
      
     
     if (dat.value==""){
       
        document.querySelector('.daterror').style.display='block';
        
        }
         else{
         document.querySelector('.daterror').style.display='none';
        
         }
      
     if(txt.value==""){
      
        document.querySelector('.txterror').style.display='block';
     }
          else{
             document.querySelector('.txterror').style.display='none'
         }
     if(num.value==""){
        
         document.querySelector('.numerror').style.display='block';
     }
         else{
             document.querySelector('.numerror').style.display='none'
         } 
     if(txt.value!==''){
            txt.value='';
        }
     if(num.value!==''){
         num.value=''
     }
         
} 
    
 
function addtolocalStorage(tarih, harcamaDetay){
    
    let harcamalarim = JSON.parse(localStorage.getItem("harcamalarim"));   
   
    if ( harcamalarim === null ) harcamalarim = {};

    if (harcamalarim[tarih]){
       
        let tempObject=[...harcamalarim[tarih]];
        tempObject.push({
            desc:harcamaDetay.txt,
            price:harcamaDetay.num
        });
        harcamalarim[tarih]=tempObject;
        localStorage.setItem("harcamalarim", JSON.stringify(harcamalarim));
    }else{
               harcamalarim[tarih]=[
           {
               desc:harcamaDetay.txt ,
               price:harcamaDetay.num
           }
       ];
         localStorage.setItem("harcamalarim", JSON.stringify(harcamalarim));
       }
       ekrana();
       maasYaz();
}

function refresh(){
    document.querySelector('.trash').addEventListener('click',()=>{
        localStorage.removeItem("harcamalarim"); 
        ekrana();
        maasYaz();
    }); 
}

function maasYaz(){
    let salary=2250.50;
    salary = salary.toFixed(2).toString();
    document.getElementById("salary").innerHTML=(Intl.NumberFormat('de-DE').format(salary));
    
    let harcamalarim = JSON.parse(localStorage.getItem("harcamalarim"));
    if(harcamalarim!==null){
    Object.keys(harcamalarim).forEach(tarih =>{
        harcamalarim[tarih].forEach(bilgi => {

            salary=salary-bilgi.price;
            console.log(salary);
            salary = salary.toFixed(2).toString();
            
             document.getElementById("salary").innerHTML=(Intl.NumberFormat('de-DE').format(salary));
             
        });
       
    })   
    
 }}   

function ekrana(){
    let harcamalarim = JSON.parse(localStorage.getItem("harcamalarim"));    
if(harcamalarim==null){document.getElementById('uyari').style.display='block'}
else{document.getElementById('uyari').style.display='none'}

    document.querySelector('.harcamalar').innerHTML = '';


let localspend=JSON.parse(localStorage.getItem("harcamalarim"));
if(localspend!==null){
Object.keys(localspend).forEach(tarih => {
    
    let div=document.createElement("div");
    div.className = 'harcamaTitle';
    div.innerHTML=tarih;
    document.querySelector('.harcamalar').appendChild(div);

    let div2=document.createElement("div");
    div2.className='harcamaDetay';
    
 
    localspend[tarih].forEach(bilgi => {
        
        let span=document.createElement("span");
        
        let em=document.createElement("em");
        em.innerHTML=bilgi.desc;

        let i=document.createElement("i");
        i.innerHTML=bilgi.price+' ₺';
        
        span.appendChild(em);
        span.appendChild(i);
        div2.appendChild(span);
        
    })
    document.querySelector('.harcamalar').appendChild(div2);
    
})

}}

maasYaz();
ekrana();
refresh();


date.max = new Date().toISOString().split("T")[0];
document.getElementById('date').valueAsDate = new Date();

 

