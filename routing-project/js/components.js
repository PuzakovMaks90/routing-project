function homePage() {
    return `
        <h1>Home page</h1>
    `;
}
function aboutPage() {
    return `
        <h1>About page</h1>
    `;
}

function postPage(props) {
    console.log(props);
    return `
        <h1>Post page</h1>
    `;
}

function blogPage() {
    const postsHtml = posts.map(post => `
            <div class="post">
                <h3 class="post__title">${post.title}</h3>
                <p class="post__text">${post.text}</p>
            </div>
        `).join('');

    return `
    `;
}

function product({prod}) {
    let prod = `<div class="product">

    `;

    for (let param in prod) {
        if (param == 'brand' || param == 'model')
        prod += `
            <div class="product">
            <h3 class="title">${brand} ${model}</h3>
            <ul class="params">
        `;
    }
    prod += `
        </ul>
        </div>
        `;
    return `
                <li class="params-item">
                    <span>processor</span>
                    <span>Intel i7</span>
                </li>
                <li class="params-item">
                    <span>diagonal:</span>
                    <span>17</span>
                </li>
                <li class="params-item">
                    <span>ssd:</span>
                    <span>512Gb</span>
                </li>
                <li class="params-item">
                    <span>price:</span>
                    <span>30000</span>
                </li>
            </ul>
    `;
} 

function _404Page() {
    return `
        <h1>404 page</h1>
        <a href="#">Home</a>
    `;
}