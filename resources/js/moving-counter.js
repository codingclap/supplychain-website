async function sleep(ms) {
    return new Promise(resolve => {setTimeout(resolve, ms)})
}

async function runCounter(element) {
    const endNum = parseInt(element.dataset.counterValue);
    const startNum = 0;

    let parts = Math.round((endNum - startNum) / 100);

    while (true) {
        if (endNum % parts == 0 && parts > 1) {
            break;
        }

        console.log(`parts of ${endNum}: ${parts}`);

        parts++;
    }

    let nextValue = 0;
    let factor = endNum / parts;

    for (let i = startNum; i <= endNum; i+=parts) {
        nextValue = i;
        console.log('counter ' + endNum + ': ' + i);

        if (nextValue > 999) {
            nextValue = nextValue.toString();
            nextValueArray = [];

            for (let j = 0; j < nextValue.length; j++) {
                if (j > 0 && j % 3 == 0) {
                    nextValueArray.push(',');
                }

                nextValueArray.push(nextValue[nextValue.length - 1 - j]);
            }

            let temp = '';

            for (j = 0; j < nextValueArray.length; j++) {
                temp += nextValueArray[nextValueArray.length - 1 - j];
            }

            nextValue = temp;
        }

        element.innerHTML = nextValue;
        await sleep(100 / factor);
    }
}

const counterContainer = document.querySelector('.stat-box-container')

let callback = (entries, observer) => {
    for (let entry of entries) {
        const counterElements = entry.target.querySelectorAll('*[data-counter-value][data-run="false"]');
        if (entry.isIntersecting) {
            for (let counterElement of counterElements) {
                runCounter(counterElement);
                counterElement.dataset.run = true;
            }
        } else {
            console.log('Not intersecting')
        }
    }
}

