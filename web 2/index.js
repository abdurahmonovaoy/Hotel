let index = 1;
let jjj=0
let Honalar = getHonalar();
// localStorage.setItem('Honalar', JSON.stringify(Honalar))

    function addHona() {
        const Nomeri = document.getElementById('hona_raqam').value;
        const Turini = document.getElementById('turi').value;
        const Narxi = document.getElementById('narx').value;
        let honalar = getHonalar()
        let temp = []
        let qoshildi = false
        for (let h of honalar) {
            if(h.Nomeri == Nomeri){
                const Hona = { Nomeri, Turini, Narxi};
                h = Hona
                qoshildi = true
                temp.push(h)
            }
            else temp.push(h)
        }
        localStorage.setItem('Honalar', JSON.stringify(temp))
        if(qoshildi){
            console.log('qoshildi');
            render()
        }

        else if (Nomeri && Turini && Narxi && qoshildi==false) {
            const Hona = { Nomeri, Turini, Narxi};
            body.innerHTML+= 
            `<tr class="ustun"><td>${index}</td><td>${Nomeri}</td><td>${Turini}</td><td>${parseInt(Narxi).toLocaleString("uz-UZ") }</td></tr>`;
            index++;
            Honalar.push(Hona);
            localStorage.setItem('Honalar', JSON.stringify(Honalar))
        } else {
            alert("Nomeri va Turi Narxi to'liq kiriting!");
        }
        
       
        

        document.getElementById('hona_raqam').value = null
        document.getElementById('turi').value = "bir kishilik"
        document.getElementById('narx').value = null

}
function render() {
    Honalar = getHonalar()
    document.getElementById('body').innerHTML = ``
    for (let i = 0; i < Honalar.length; i++) {
        document.getElementById('body').innerHTML += ` 
        <tr id="h">
        <td>${i+1}</td>
        <td>${Honalar[i].Nomeri}</td>
        <td>${Honalar[i].Turini}</td>
        <td>${Honalar[i].Narxi}</td>
    </tr>`
    }
}

function getHonalar() {
    let temp = JSON.parse(localStorage.getItem('Honalar')) || [];
    let arr = [];

    for (let h of temp) {
        arr.push(h);
    }
    return arr;
}
render()
