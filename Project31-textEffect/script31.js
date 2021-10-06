const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I love Programming';
let idx = 1;
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx=1;
    }

    setTimeout(writeText, speed)  //fonksiyon ne kadar süre sonra çalışacak 1s=1000ms
}

speedEl.addEventListener('input',(e) => speed =300/e.target.value);//HTML dökümanı üzerinde belirtilen elementi dinleyip, istenilen olay gerçekleştiğinde bir metod çalıştırmak için kullanılır.