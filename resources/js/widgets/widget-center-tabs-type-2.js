const socialIconsImg = {
    'linkedin': 'resources/images/socialIcons/linkedin.svg'
}


function createCenterTab(tabData, tabIndex = 0) {
    const container = document.createElement('div');
    container.classList.add('center-tab');
    container.tabIndex = tabIndex;

    const tabHeading = document.createElement('h3');
    tabHeading.classList.add('tab-heading');
    tabHeading.dataset.font_family = 'OpenSans-Medium';
    tabHeading.innerHTML = capitalize(tabData.name);
    container.append(tabHeading);

    return container;
}

function addCenterTabs(mainContainerSelector, tabsData) {
    const container = document.querySelector(mainContainerSelector);
    container.innerHTML = '';

    const featureContainer = document.querySelector('#widget-tabs-popup-container');

    featureContainer.addEventListener('click', () => {
        toggleStatus(featureContainer);
    })

    let n = 0;
    for (let tabData of tabsData) {
        const tab = createCenterTab(tabData, n);
        container.append(tab);

        tab.addEventListener('click', () => {
            addFeature_membersInfo(featureContainer, tabData, 'click');
        })

        n++;
    }
}

function createMemberIntro(memberDetails, activeOn) {
    const memberContainer = document.createElement('div');
    memberContainer.classList.add('member-info');
    const complimentaryContainer = document.createElement('div');
    complimentaryContainer.classList.add('complimentary-container-type-2');
    complimentaryContainer.classList.add('complimentary-t1-2');
    complimentaryContainer.dataset.specificity = 'enhance';

    const column1 = document.createElement('div');
    column1.classList.add('column-1')

    const picture1 = document.createElement('picture');
    const picture1source = document.createElement('source');
    picture1source.setAttribute('srcset', memberDetails.memberImageSource);
    // picture1source.setAttribute('width',"100%");
    picture1.append(picture1source);

    const picture1Img = document.createElement('img');
    picture1Img.setAttribute('src', memberDetails.memberImageSource);
    picture1Img.setAttribute('width', "100%");
    picture1.append(picture1Img);

    column1.append(picture1);

    complimentaryContainer.append(column1);

    const column2 = document.createElement('div');
    column2.classList.add('column-2')

    const paras = memberDetails.description;

    for (let para of paras) {
        const pTag = document.createElement('p');
        pTag.dataset.fontFamily = 'Visuelt-Light';
        pTag.classList.add('p-b10');

        pTag.innerHTML = para;

        column2.append(pTag);
    }

    const memberName = document.createElement('h2');
    memberName.dataset.fontFamily = 'Visuelt-Medium';
    memberName.dataset.color = 'secondary-color';
    memberName.classList.add('p-t20');

    memberName.innerHTML = memberDetails.name;
    column2.append(memberName);

    const memberDesignation = document.createElement('h3');
    memberDesignation.dataset.fontFamily = 'Visuelt-Light'; 

    const memberDesignationName = document.createElement('span');
    memberDesignationName.classList.add('designation');
    memberDesignationName.innerHTML = memberDetails.vocation;
    memberDesignation.append(memberDesignationName);

    column2.append(memberDesignation);

    const socialContainer = document.createElement('a');
    socialContainer.classList.add('social-icon');
    socialContainer.classList.add('p-b10');
    socialContainer.style.display = 'block';

    for (let socialSite in memberDetails.social) {
        if (memberDetails.social[socialSite] == '') {
            continue;
        }
        // console.log(memberDetails.social[socialSite]);
        const socialImg = document.createElement('img');
        socialImg.src = memberDetails.socialIcons[socialSite];
        socialImg.addEventListener(activeOn, () => {
            hyperlinkTo(memberDetails.social[socialSite], false);
        })
        socialImg.setAttribute("target","_blank");
        socialImg.style.cursor = 'pointer';
        socialImg.style.maxWidth = '30px';
        socialImg.classList.add('p-tb10');
        socialContainer.append(socialImg);
        
    }

    column2.append(socialContainer);

    complimentaryContainer.append(column2);

    memberContainer.append(complimentaryContainer);

    return memberContainer;
}

function addFeature_membersInfo(container, tabData, activeOn = 'click') {
    container.innerHTML = '';
    container.classList.add('widget-team-info-type-1');

    const featureContainer = document.createElement('div');
    featureContainer.classList.add('feature-container');
    featureContainer.classList.add('main-container');


    const members = tabData.members;

    for (let member of members) {
        const memberContainer = createMemberIntro(member, activeOn);

        featureContainer.append(memberContainer);
    }

    const crossBarr = document.createElement('img');
    crossBarr.setAttribute('src', 'resources/images/about/close-button.svg');
    crossBarr.classList.add('member-cross-bar');

    featureContainer.append(crossBarr);

    container.append(featureContainer);

    toggleStatus(container);
}