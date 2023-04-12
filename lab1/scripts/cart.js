window.onload=init;

function UpdateCart(){
    var items = Object.keys(localStorage);
    var sum = 0;
    for(var item of items){
        var v = localStorage.getItem(item);
        v = Number(v);
        sum += v;
    }
    sum = sum.toString();
    document.getElementById("suma").innerHTML = sum;
    document.getElementById("suma").style.display = "flex";
    document.getElementById("suma").style.visibility = "visible";
}

function Dogadaj(event){
    var button = event.target;
    var id = button.id;
    console.log(id);
    var item = button.parentNode;
    item = item.id;
    console.log(item);
    var value = localStorage.getItem(item);
    value = Number(value);
    if(id=="minus"){
        value-=1;
    }else{
        value += 1;
    }
    if(value > 0){
        value = value.toString();
        localStorage.setItem(item,value);
        var parent = document.getElementById(item);
        var el = parent.getElementsByClassName("q");
        el[0].innerHTML = value;
    }else{
        localStorage.removeItem(item);
        parent = document.getElementById(item);
        sibling = parent.previousElementSibling;
        parent.remove();
        sibling.remove();
    }
    if(localStorage.length!=0){
        UpdateCart();
    }else{
        document.getElementById("g").style.display = "none";
        document.getElementById("g").style.visibility = "hidden";
        document.getElementById("emptybasket").style.display = "block";
        document.getElementById("emptybasket").style.visibility = "visible";
        document.getElementById("suma").style.display = "none";
        document.getElementById("suma").style.visibility = "hidden";
    }

}

function init(){
    var storage  = Object.keys(localStorage)
    var i = 0;
    for(item of storage){
        
        var parent = document.getElementById("g");
        var divP = document.createElement('div');
        divP.className = "gridel";
        divP.id = "proizvod"+i;
        divP.innerHTML = item;
        parent.appendChild(divP);

        var num = localStorage.getItem(item);
        var divQ = document.createElement('div');
        divQ.className = "gridel";
        divQ.id = item;
        parent.appendChild(divQ)

        parent = document.getElementById(item);
        var button1 = document.createElement('button');
        button1.className = "gumb";
        button1.id = "minus";
        button1.innerHTML = "-";
        button1.addEventListener("click",Dogadaj);
        parent.appendChild(button1);
        var divNum = document.createElement('div');
        divNum.className = "q";
        divNum.innerHTML = num;
        parent.appendChild(divNum);
        var button2 = document.createElement('button');
        button2.className = "gumb";
        button2.id = "plus";
        button2.innerHTML = "+";
        button2.addEventListener("click",Dogadaj);
        parent.appendChild(button2);
        i += 1;

    }
    if(localStorage.length!=0){
        document.getElementById("g").style.display = "grid";
        document.getElementById("g").style.visibility = "visible";
        document.getElementById("emptybasket").style.display = "none";
        document.getElementById("emptybasket").style.visibility = "hidden";
        UpdateCart();
    }else{
        document.getElementById("suma").style.display = "none";
        document.getElementById("suma").style.visibility = "hidden";
    }
}

