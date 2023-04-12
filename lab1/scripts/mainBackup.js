window.onload = init;
function init(){
    if(localStorage.length!=0){
        UpdateCart();
    }else{
        document.getElementById("suma").style.display = "none";
        document.getElementById("suma").style.visibility = "hidden";
    }
}
function UpdateCart(){
    var items = Object.keys(localStorage);
    var sum = 0;
    for(var item of items){
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

function UpdateItem(name,i){
    var item = localStorage.getItem(name);
    document.getElementById("suma"+i).style.display = "none";
    document.getElementById("suma"+i).style.visibility="hidden";
    if(item != null){
        document.getElementById("suma"+i).innerHTML=item;
        document.getElementById("suma"+i).style.display = "flex";
        document.getElementById("suma"+i).style.visibility="visible";
    }
}

function AddValue(event){
    contentId = event.target.id;
    contentId = contentId[4];
    var text = document.getElementById("p"+contentId).innerHTML;
    var value = localStorage.getItem(text);
    if(value == null){
        value = "1";
    }else{
        value = Number(value);
        value += 1;
        value = value.toString();
    }
    localStorage.setItem(text,value);
    UpdateCart();
    UpdateItem(text,Number(contentId));
}
function cartShow(event){
    var div = event.target.id;
    var num = div[div.length-1];
    var el = document.getElementById(num);
    el = el.getElementsByClassName("kosarica");
    el[0].style.display = "block";
    el[0].style.visibility = "visible";
}
function cartHide(event){
    var div = event.target.id;
    var num = div[div.length-1];
    var el = document.getElementById(num);
    el = el.getElementsByClassName("kosarica");
    el[0].style.display = "none";
    el[0].style.visibility = "hidden";
}
function showContent(num){
    var c = document.getElementById("showcategory");
    c.innerHTML = data.categories[num].name;
    var text = document.getElementById("con");
    cate = text.getElementsByClassName("cat");
    ime = text.getElementsByClassName("proizvod");
    slike = text.getElementsByClassName("pic");
    kosarica = text.getElementsByClassName("kosarica");
    cart_kos = text.getElementsByClassName("slika_kosarica");
    var len = data.categories[num].products.length;
    for(var i = 0;i<len;i++){
        cate[i].innerHTML = data.categories[num].name;
        var name = data.categories[num].products[i].name;
        ime[i].innerHTML = name;
        slike[i].src="images/"+ data.categories[num].name.toLowerCase() + "/"+data.categories[num].products[i].image;
        kos = kosarica[i].getElementsByClassName("cartpic");
        kos[0].src = "images/cart-icon.png";
        kos[0].addEventListener("click",AddValue);
        cart_kos[i].addEventListener("mouseover",cartShow);
        cart_kos[i].addEventListener("mouseout",cartHide); 
        UpdateItem(name,i+1);
    }

    document.getElementById("con").style.visibility = 'visible';
    document.getElementById("con").style.display = 'flex';
}
