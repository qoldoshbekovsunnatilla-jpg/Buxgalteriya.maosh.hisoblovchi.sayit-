let i1 =document.querySelector (".t1")
let i2 =document.querySelector (".t2")
let i3 =document.querySelector (".t3")
let bt =document.querySelector (".bt")
bt.onclick = function () {
    let oylik = i2.value *i3.value
    let avans = (oylik /100) *40
    let daromats =(oylik/100 ) *12
    let pens =(daromats/100) *1
    let oydaromt = oylik - (avans+ daromats + pens)
    let sofdr = avans+oydaromt
    let res =document.querySelector ("#res")
    res.innerHTML += `
                         <tr>

                         <td>${i1.value}</td>
                         <td>${i2.value}</td>
                         <td>${i3.value}</td>
                         <td>${oylik} mil</td>
                         <td>${avans}</td>
                         <td>${daromats}</td>
                         <td>${pens}</td>
                         <td>${oydaromt}</td>
                         <td>${sofdr}</td>

                        </tr>
                        

    `
}