var bodyTag,bigdiv,select1,select2,select3,img,pls,email,yourname,submitbtn;

window.onload = function() {
    bodyTag = document.getElementsByTagName("body")[0];
    heading = document.createElement("h1");
    prepSelectTag();
    prepInputTag();
    submitbtn = document.createElement("button");
    img = document.createElement("img");
    heading.setAttribute("class","jumbotron");
    heading.setAttribute("style","text-align:center; background-color: beige; ");
    heading.appendChild(document.createTextNode("CAR DEALER"));
    bodyTag.append(heading);
    for(i in carsJSON.makes) {
        var x = carsJSON.makes[i];
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(x.makeName));
        console.log(x);
        select1.appendChild(opt);
    }
    bigdiv = document.createElement("div");
    bigdiv.setAttribute("align","center");
    bigdiv.setAttribute("class","d-flex flex-column p-5");
    bigdiv.appendChild(select1);
    bodyTag.appendChild(bigdiv);
    select1.onchange = function(){improvise()};
    select2.onchange = function(){improvise2()};
    select3.onchange = function(){loadimage()};
}

function prepInputTag() {
    email = document.createElement("input");
    yourname = document.createElement("input");
    email.setAttribute("placeholder","Enter your email to order the car");
    yourname.setAttribute("placeholder","Your name");
}
function prepSelectTag() {
    select1 = document.createElement("select");
    pls = document.createElement("option");
    pls.appendChild(document.createTextNode("Please choose an option"));
    select1.appendChild(pls);
    select2 = document.createElement("select");
    select3 = document.createElement("select");
    select1.setAttribute("class","form-control");
    select2.setAttribute("class","form-control");
    select3.setAttribute("class","form-control");
}


function improvise() {
    //console.log("cal");
    if(img.parentNode === bigdiv) bigdiv.removeChild(img);
    if(email.parentNode === bigdiv) bigdiv.removeChild(email);
    if(submitbtn.parentNode === bigdiv) bigdiv.removeChild(img);
    if(name.parentNode === bigdiv) bigdiv.removeChild(name);
    while(select2.lastChild!==null) select2.removeChild(select2.lastChild);
    while(select3.lastChild!==null) select3.removeChild(select3.lastChild);
    if(select2!== null && select2.parentNode === bigdiv) bigdiv.removeChild(select2);
    if(select3!== null && select3.parentNode === bigdiv) bigdiv.removeChild(select3);
    select2.appendChild(pls);
    for(i in carsJSON.makes) {
        var x = carsJSON.makes[i];
        if(x.makeName === select1.value) {
            for(j in x.models) {
                var t = x.models[j];
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(t.modelName));
                select2.appendChild(opt); 
            }
        }
    }
    bigdiv.appendChild(select2);
}

function improvise2() {
    //console.log("cal");
    if(img.parentNode === bigdiv) bigdiv.removeChild(img);
    if(email.parentNode === bigdiv) bigdiv.removeChild(email);
    if(submitbtn.parentNode === bigdiv) bigdiv.removeChild(img);
    if(name.parentNode === bigdiv) bigdiv.removeChild(name);
    while(select3.lastChild!==null) select3.removeChild(select3.lastChild);
    if(select3!== null && select3.parentNode === bigdiv) bigdiv.removeChild(select3);
    select3.appendChild(pls);
    for(i in carsJSON.makes) {
        var x = carsJSON.makes[i];
        if(x.makeName === select1.value) {
            for(j in x.models) {
                var t = x.models[j];
                if(t.modelName === select2.value)
                for(k in t.trimOptions) {
                    var l = t.trimOptions[k];
                    var opt = document.createElement("option");
                    opt.appendChild(document.createTextNode(l));
                    select3.appendChild(opt); 
                }
            }
        }
    }
    bigdiv.appendChild(select3);
}

function loadimage() {
    var imgadd = "img/" + select1.value + '_'  + select2.value + '_' + select3.value + ".jpg";
    img.setAttribute("src",imgadd);
    img.setAttribute("style","height: 400px; width:700px");
    bigdiv.appendChild(img);
    bigdiv.appendChild(yourname);
    bigdiv.append(email);
    submitbtn.appendChild(document.createTextNode("Submit"));
    submitbtn.onclick = function() {
        sendEmail();
    }
    bigdiv.append(submitbtn);
}

function sendEmail() {
    if(email.value!==null) var tmp = email.value;
    var thecar = select1.value + " " + select2.value + " " + select3.value + " Customer:" + yourname.value;
    window.open("mailto:"+tmp+'?cc='+ " " + '&subject=' + "Ordering car" +'&body='+ thecar);
}