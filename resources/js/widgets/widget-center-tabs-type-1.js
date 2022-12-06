const socialIconsImg = {
    'linkedin': 'resources/images/socialIcons/linkedin.svg'
}


function createCenterTab(tabData) {
    const container = document.createElement('div');
    container.classList.add('center-tab');

    const tabHeading = document.createElement('h3');
    tabHeading.classList.add('tab-heading');
    tabHeading.dataset.font_family='OpenSans-Medium';
    tabHeading.innerHTML = capitalize(tabData.name);
    container.append(tabHeading);

    addFeature_social(container, tabData, 'click')

    return container;
}

function addCenterTabs(mainContainerSelector, tabsData) {
    const container = document.querySelector(mainContainerSelector);
    container.innerHTML = '';

    for (let tabData of tabsData) {
        const tab = createCenterTab(tabData);
        container.append(tab);
    }
}

function addFeature_social(container, tabData, activeOn='click') {
    const featureContainer = document.createElement('div');
    featureContainer.classList.add('feature-container');

    const members = tabData.members;

    for (let member of members) {
        const memberContainer = document.createElement('div');
        memberContainer.classList.add('member-social-container');
        const memberName = member.name;
        const memberSocialLinks = member.social;

        for (let social in memberSocialLinks) {
            if (memberSocialLinks[social] == '') {
                continue;
            }

            const socialContainer = document.createElement('div');
            socialContainer.classList.add('member-social-links');
            socialContainer.addEventListener(activeOn, () => {
                hyperlinkTo(memberSocialLinks[social], false);
            })

            const nameContainer = document.createElement('span');
            nameContainer.classList.add('member-name');
            nameContainer.dataset.font_family='OpenSans-Regular';
            nameContainer.innerHTML = memberName;
            socialContainer.append(nameContainer);

            const iconContainer = document.createElement('span');
            iconContainer.setAttribute("target","_blank");
            iconContainer.classList.add('social-icon');
            const icon = document.createElement('img');
            icon.src = member.socialIcons[social];
            iconContainer.append(icon);
            socialContainer.append(iconContainer);

            memberContainer.append(socialContainer)
        }

        featureContainer.append(memberContainer);
    }

    container.append(featureContainer);
}


