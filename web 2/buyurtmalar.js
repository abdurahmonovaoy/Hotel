let index = 1;
let arrBuyurtma = [];
function resedB() {
    body.innerHTML = '';
    arrBuyurtma.forEach((itemB, index) => {
        body.innerHTML +=
        `<tr class="ustun">
        <td>${index}</td>
        <td>${itemB.hona_raqam}</td>
        <td>${itemB.bosh_sana}</td>
        <td>${itemB.tug_sana}</td>
        <td>${parseInt(1)}</td>
        <td>100$</td>
        </tr>`;
    index++
    
});

}
function getBuyurtma() {
    let saveB = localStorage.getItem("arrBuyurtma")
    if (saveB) {
        arrBuyurtma = JSON.parse(saveB);
        resedB()
    }
    console.log(arrBuyurtma)
}
function addGuest() {
    let hona_raqam = document.getElementById('hona_raqam').value;
    let bosh_sana = document.getElementById('bosh_sana').value;
    let tug_sana = document.getElementById('tug_sana').value;

  
   

    function saveBuyurtma() {
        let ObjB = {
            "hona_raqam": hona_raqam,
            "bosh_sana": bosh_sana,
            "tug_sana": tug_sana
        }
        console.log(hona_raqam, bosh_sana, tug_sana)
        if (hona_raqam && bosh_sana && tug_sana) {
            
            arrBuyurtma.push(ObjB)
            console.log("arr", arrBuyurtma)
            localStorage.setItem('arrBuyurtma', JSON.stringify(arrBuyurtma));
        }
        else{
            alert("Malumodlarni togri kiriting !");
           
        }
    }
    saveBuyurtma()
    getBuyurtma()
   
  

  

    document.getElementById('hona_raqam').value = null;
    document.getElementById('bosh_sana').value = null;
    document.getElementById('tug_sana').value = null;
}


//////////////////////////////////////

// function ochirish() { 
//     localStorage.setItem(0, JSON.stringify([])); 
//     localStorage.setItem('id', 0) 
// } 



/* function addTolet() {
    let kun_miqdor = document.getElementById('kun_miqdor').value
    let tug_sana = document.getElementById('tug_sana').value;
    let bosh_sana = document.getElementById('bosh_sana').value;
    let hona_raqam = document.getElementById('hona_raqam').value;

    document.getElementById('hona_raqam').value = null
    document.getElementById('bosh_sana').value = null
    document.getElementById('tug_sana').value = null
    document.getElementById('kun_miqdor').value = null
    // massivga qo'shish 
    if (Honalar == '') {
        alert('Hona raqam kirgizing!');
        return;
    }

    if (!isNaN(Honalar)) {
        alert("Honani xato kiritilgan!");
        return;
    }
    // if (isNaN(miqdori)) { 
    //     alert("Miqdor butun sonda emas !"); 
    //     return; 
    // } 
    // if (miqdori == "") { 
    //     alert("Miqdor kiritilmagan!"); 
    //     return; 
    // } 
    if (miqdori % Math.floor(miqdori) == 0) {

        Honalar.push({
            id: tolet_id,
            hona_raqam: hona_raqam,
            bosh_sana: bosh_sana,
            tug_sanai: tug_sana,
            kun_miqdor: kun_miqdor

        });
        tolet_id++
        localStorage.setItem('id', Hona_id_id);
        localStorage.setItem(0, JSON.stringify(Honalar))
        // printTable(); 
        render()
    }
} */


/* function render() {
    let cl;
    console.log(Honalar)
    // console.log(miqdori) 
    document.getElementById('Honalar').innerHTML = ``
    document.getElementById('body').innerHTML = ``

    // for (let i = 0; i < Honalar.length; i++) { 
    //     console.log(Honalar[i].miqdori) 
    //     if (Honalar[i].miqdori < 1) { 
    //         cl = "red" 
    //     } 
    //     else { 
    //         cl = ""; 
    //     };
    document.getElementById('body').innerHTML += `  
    <tr class=${cl}>  
    <td>${Honalar[i].id}</td> 
    <td>${Honalar[i].hona_raqam}</td> 
    <td>${Honalar[i].bosh_sana}</td> 
    <td>${Honalar[i].tug_sana}</td> 
    <td>${Honalar[i].kun_miqdor}</td>
    </tr>`;
    document.getElementById('hona_raqami').innerHTML += ` 
    <option value='${Honalar[i].id}'> ${Honalar[i].hona_raqam}</option>`;
}


function jami() {
    document.getElementById('Honalar').innerHTML = ``
    for (let i = 0; i < mahsulot.length; i++);

    document.getElementById('Honalar').innerHTML += `  
    
             <tr> 
             <td>${Honalar[i].id}</td> 
             <td>${Honalar[i].hona_raqam}</td>                                                                  ````}</td> 
             <td>${Honalar[i].bosh_sana}</td> 
             <td>${Honalar[i].tug_sana}</td> 
             <td>${Honalar[i].kun_miqdor}</td>
             </tr>`;
}
render() */