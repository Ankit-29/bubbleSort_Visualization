function show(arr) {
    const visualDiv = document.querySelector('.visual');
    visualDiv.innerHTML = "";
    arr.forEach((val, i) => {
        str = "";
        str += "<div id='v_" + i + "'class='col' style='height:" + (val + 10) + "px;'>";
        str += val;
        str += "</div>";
        visualDiv.innerHTML += str;
    });
}

function bubbleSort() {
    let arr = document.querySelector('#arrayVal').value.split(/,/);
    arr = arr.map(val => parseInt(val, 10));
    const len = arr.length;
    show(arr);
    for (let i = 0; i < len - 1; i++) {
        setTimeout(() => {
            for (let j = 0; j < len - i - 1; j++) {
                setTimeout(function () {
                    if (arr[j] > arr[j + 1]) {
                        arr[j] = arr[j] ^ arr[j + 1];
                        arr[j + 1] = arr[j] ^ arr[j + 1];
                        arr[j] = arr[j] ^ arr[j + 1];
                        show([...arr]);
                    }
                }, j * 100);
            }
        }, len * i * 100);
    }
}


// 217 ,588 ,442 ,130 ,564 ,212 ,328 ,485 ,293 ,139 ,157 ,387 ,395 ,126 ,481 ,323 ,431 ,208 ,431 ,337