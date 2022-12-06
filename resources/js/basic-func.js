async function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function reachIntoView(elementSelector) {
    const element = document.querySelector(elementSelector);

    options = {
        behaviour: 'smooth',
        block: 'center',
        inline: 'center'
    }

    element.scrollIntoView(options)
}

function hyperlinkTo(href, relative=true, newWindow=true) {
    let url;

    if (relative) {
        let currentUrl = window.location.href;

        while (currentUrl.includes(href)) {
            currentUrl = currentUrl.replace(href, '');
        }

        url = currentUrl + href;

    } else {
        url = href;
    }

    if (newWindow) {
        return window.open(url, '_blank');
    } else {
        return window.open(url, '_self');
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function isIn(key, array) {
    for (let element of array) {
        if (key == element) {
            return true;
        }
    }

    return false;
}

function toggleStatus(element) {
    let foot_title = document.getElementById('footer-title');
    console.log(foot_title);
    const currentStatus = element.dataset.status;
    
    
    if (currentStatus == 'active') {
        element.dataset.status = 'passive';
        foot_title.style = "color:#FFD729";
    } else {
        element.dataset.status = 'active';
        foot_title.style = "color:#fff";
    }
}

function toggleElementsState(datasetName) {
    const elements = document.querySelectorAll(`[data-toggle-state="${datasetName}"]`);
    console.log(elements);
    for (let element of elements) {
        const action = element.dataset.toggleAction;
       
        toggleStatus(element);
    }
}


 