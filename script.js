var func = function(){
    var name = document.getElementById("name").value;
    if (name == "ぐると"){
        location.href = "result_guruto.html";
    }else if(name == "かめ"){
        location.href = "result_kame.html";
    }else if(name == "よー"){
        location.href = "result_yoo.html";
    }else{
        location.href = "result.html";
    }
}