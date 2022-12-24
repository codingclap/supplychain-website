const socialIcons = {
    'linkedin': 'https://workforce.godspeedgroup.ca/wp-content/themes/godspeed/assets/images/social-icons/linkedin-hl-connect.svg',
    'email': 'https://workforce.godspeedgroup.ca/wp-content/themes/godspeed/assets/images/social-icons/email-hl-connect.svg',
    'phone': 'https://workforce.godspeedgroup.ca/wp-content/themes/godspeed/assets/images/social-icons/phone-hl-connect.svg',
}


function createCenterTab(tabData) {
    const container = document.createElement('div');
    container.classList.add('center-tab');

    const tabHeading = document.createElement('h3');
    tabHeading.classList.add('tab-heading');
    tabHeading.dataset.font_family = 'OpenSans-Medium';
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

function addFeature_social(container, tabData, activeOn = 'click') {
    const featureContainer = document.createElement('div');
    featureContainer.classList.add('feature-container');
    featureContainer.dataset.font_family = 'OpenSans-Regular';
    const members = tabData.members;

    for (let member of members) {
        const memberContainer = document.createElement('div');
        memberContainer.classList.add('member-social-container');

        const nameContainer = document.createElement('div');

        const memberName = document.createElement('div');
        memberName.classList.add('member-name');
        memberName.innerHTML = member.name;
        nameContainer.append(memberName);

        const memberDesignation = document.createElement('div');
        memberDesignation.classList.add('member-designation');
        memberDesignation.innerHTML = `(${member.vocation})`;
        nameContainer.append(memberDesignation);

        memberContainer.append(nameContainer);

        const socialContainer = document.createElement('div');
        socialContainer.classList.add('social-icons');

        for (let socialSite in member.social) {
            if (member.social[socialSite] == '') {
                continue;
            }

            const contactContainer = document.createElement('div');
            contactContainer.classList.add('social-contact');
            contactContainer.dataset.socialType = socialSite;

            const iconContainer = document.createElement('div');
            iconContainer.classList.add('social-icon');

            iconContainer.addEventListener(activeOn, () => {
                hyperlinkTo(member.social[socialSite]['src'], false);
            })

            const socialImg = document.createElement('img');
            socialImg.src = socialIcons[socialSite];
            // socialImg.style.width = '30px';
            iconContainer.append(socialImg);
            contactContainer.append(iconContainer);

            const socialTextContainer = document.createElement('div');
            socialTextContainer.classList.add('social-id');

            const textContainer = document.createElement('span');
            textContainer.innerHTML = member.social[socialSite]['face-value'];
            socialTextContainer.append(textContainer);
            contactContainer.append(socialTextContainer);

            socialContainer.append(contactContainer)
        }

        memberContainer.append(socialContainer)

        featureContainer.append(memberContainer);
    }

    container.append(featureContainer);
}