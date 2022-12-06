function createPost(jsonData) {
    const container = document.createElement('div');
    container.classList.add('blog-type-1-container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('blog-image-container');
    const img = document.createElement('img');
    img.src = jsonData.src;
    imageContainer.appendChild(img);
    container.append(imageContainer);

    const date = document.createElement('p');
    date.innerHTML = jsonData.date;
    date.classList.add('blog-date');
    date.classList.add('p-t10');
    date.dataset.font_family='OpenSans-Regular'; 
    container.append(date);

    const heading_4 = document.createElement('h4');
    heading_4.innerHTML = jsonData.heading;
    heading_4.classList.add('blog-heading');
    heading_4.classList.add('p-tb5');
    heading_4.dataset.font_family='OpenSans-Regular'; 
    container.append(heading_4);

    const description = document.createElement('p');
    description.innerHTML = jsonData.description;
    description.classList.add('blog-description');
    description.classList.add('p-b5');
    description.dataset.font_family='OpenSans-Regular'; 
    container.append(description);

    const learnBtn = document.createElement('p');
    learnBtn.innerHTML = 'Learn More';
    learnBtn.addEventListener('click', () => {
        hyperlinkTo(jsonData.url, false);
    })
    learnBtn.classList.add('blog-learn-btn');
    learnBtn.classList.add('p-tb10');
    learnBtn.dataset.font_family='OpenSans-Medium'; 
    container.append(learnBtn);
    
    return container
}

function addPosts(containerSelector, jsonData) {
    const container = document.querySelector(containerSelector);

    for (let data of jsonData) {
        const post = createPost(data);
        container.append(post);
    }
}