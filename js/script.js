const insert = (num) => {
    document.getElementById(`resultado`).innerHTML += num;
}

const clean = () =>{
    document.getElementById(`resultado`).innerHTML = '';
}

const back = () => {
    let res = document.getElementById(`resultado`).innerHTML;
    document.getElementById(`resultado`).innerHTML = res.substring(0, res.length - 1)
}

const equal = () => {
    let res = document.getElementById(`resultado`).innerHTML;
    if(res) {
        document.getElementById(`resultado`).innerHTML = eval(res);
    } 

    if(!res){
        document.getElementById(`resultado`).innerHTML = 'Error'
        setTimeout(function () {clean();},500);
    }
}



