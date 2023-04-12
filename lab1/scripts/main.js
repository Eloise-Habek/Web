window.onload = init;
function init() {
    if (localStorage.length != 0) {
        UpdateCart();
    } else {
        document.getElementById("suma").style.display = "none";
        document.getElementById("suma").style.visibility = "hidden";
    }
}
function UpdateCart() {
    var items = Object.keys(localStorage);
    var sum = 0;
    for (var item of items) {
        var v = localStorage.getItem(item);
        v = Number(v);
        sum += v;
    }
    console.log(sum);
    sum = sum.toString();
    document.getElementById("suma").innerHTML = sum;
    document.getElementById("suma").style.display = "flex";
    document.getElementById("suma").style.visibility = "visible";
}

function UpdateItem(name, i) {
    var item = localStorage.getItem(name);
    console.log(name);
    console.log(i);
    console.log(document.getElementById("sume"+i));
    document.getElementById("suma" + i).style.display = "none";
    document.getElementById("suma" + i).style.visibility = "hidden";
    if (item != null) {
        document.getElementById("suma" + i).innerHTML = item;
        document.getElementById("suma" + i).style.display = "flex";
        document.getElementById("suma" + i).style.visibility = "visible";
    }
}

function AddValue(event) {
    contentId = event.target.id;
    contentId = contentId[4];
    var text = document.getElementById("p" + contentId).innerHTML;
    var value = localStorage.getItem(text);
    if (value == null) {
        value = "1";
    } else {
        value = Number(value);
        value += 1;
        value = value.toString();
    }
    localStorage.setItem(text, value);
    UpdateCart();
    UpdateItem(text, Number(contentId));
}
function cartShow(event) {
    var div = event.target.id;
    var num = div[div.length - 1];
    var el = document.getElementById(num);
    el = el.getElementsByClassName("kosarica");
    el[0].style.display = "block";
    el[0].style.visibility = "visible";
}
function cartHide(event) {
    var div = event.target.id;
    var num = div[div.length - 1];
    var el = document.getElementById(num);
    el = el.getElementsByClassName("kosarica");
    el[0].style.display = "none";
    el[0].style.visibility = "hidden";
}
function showContent(num) {
    var c = document.getElementById("showcategory");
    c.innerHTML = data.categories[num].name;
    var len = data.categories[num].products.length;
    console.log(len);
    var wipe = document.querySelectorAll(".slika");
    for(var j = 0;j<wipe.length;j++){
        wipe[j].remove();
        console.log(-1);
    }
    for (var i = 0; i < len; i++) {
        var name = data.categories[num].products[i].name;
        var d = i + 1;
        var slika = document.createElement('div');
        slika.className = "slika";
        slika.id = (d).toString();
        var slika_kosarica = document.createElement('div');
        slika_kosarica.className = "slika_kosarica";
        slika_kosarica.id = "sk" + d;
        slika_kosarica.addEventListener("mouseover", cartShow);
        slika_kosarica.addEventListener("mouseout", cartHide);
        var pic = document.createElement('img');
        pic.className = "pic";
        pic.id = "pic" + d;
        pic.src = "images/" + data.categories[num].name.toLowerCase() + "/" + data.categories[num].products[i].image;
        var kosarica = document.createElement('div');
        kosarica.className = "kosarica";
        kosarica.id = "kos" + d;
        let cartpic = document.createElement('img');
        cartpic.className = "cartpic";
        cartpic.id = "item" + d;
        cartpic.src = "images/cart-icon.png";
        cartpic.addEventListener("click", AddValue);
        var cartelement = document.createElement('div');
        cartelement.className = "cartelement";
        cartelement.id = "suma" + d;
        var proizvod = document.createElement('div');
        proizvod.className = "proizvod";
        proizvod.id = "p" + d;
        proizvod.innerHTML = name;
        var cat = document.createElement('div');
        cat.className = "cat";
        cat.innerHTML = data.categories[num].name;
        var hr = document.createElement('hr');
        kosarica.appendChild(cartpic);
        slika_kosarica.appendChild(pic);
        slika_kosarica.appendChild(kosarica);
        slika_kosarica.appendChild(cartelement);
        slika.appendChild(slika_kosarica);
        slika.appendChild(proizvod);
        slika.appendChild(hr);
        slika.appendChild(cat);
        var text = document.getElementById("con");
        text.appendChild(slika);
        UpdateItem(name, i + 1);
    }
    document.getElementById("con").style.visibility = 'visible';
    document.getElementById("con").style.display = 'flex';
}
