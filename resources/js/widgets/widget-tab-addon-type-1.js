// Creation functions

function createTab(tabname, num, defaultTabNum = 1) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.dataset.tabNum = num;
    tab.addEventListener('click', function (e) {
        showSelected(this, tabsContainerSelector, tabsContentSelector)
    })

    if (num == defaultTabNum) {
        tab.dataset.status = 'active';
        setTimeout(function () {
            showSelected(tab, tabsContainerSelector, tabsContentSelector)
        }, 1000)
    }

    const tabHeading = document.createElement('h4');
    tabHeading.classList.add('tab-heading');
    tabHeading.dataset.font_family = 'Visuelt-Bold';
    tabHeading.innerHTML = tabname;
    tab.append(tabHeading);

    return tab;
}

function addTabs(tabsContainerSelector, tabsData) {
    const tabsContainer = document.querySelector(tabsContainerSelector);
    tabsContainer.innerHTML = '';

    let n = 0;
    for (let tabData of tabsData) {
        n++
        const tab = createTab(tabData.tabName, n, 1);
        tabsContainer.append(tab);
    }
}

// content creation: this may change from use case to use case





// Execution functions

function showSelected(tab, tabsContainerSelector, tabsContentSelector) {
    const tabNum = tab.dataset.tabNum;

    const tabsContainer = document.querySelectorAll(`${tabsContainerSelector} .tab`);

    for (let tabContainer of tabsContainer) {
        tabContainer.dataset.status = 'passive'
    }

    tab.dataset.status = 'active';

    const contentContainer = document.querySelector(tabsContentSelector);
    const tabs = contentContainer.querySelectorAll('.tab-content');
    const activeTab = contentContainer.querySelector(`[data-tab-num="${tabNum}"]`);

    for (let tab of tabs) {
        tab.dataset.status = 'passive';
    }

    activeTab.dataset.status = 'active';
}

function updateTabContainerHeight(tabContainerSelector) {
    const container = document.querySelector(tabContainerSelector);
    const tabs = container.querySelectorAll('.tab-content .complimentary-container-type-1');

    const resizeObserver = new ResizeObserver(function () {
        let maxHeight = 0;
        for (let tab of tabs) {
            let height = tab.offsetHeight;
            console.log(height);
            if (maxHeight < height) {
                maxHeight = height;
            }
        }

        container.style.setProperty('--tab-content-height', `${maxHeight}px`);
    });

    resizeObserver.observe(tabs[0])
}