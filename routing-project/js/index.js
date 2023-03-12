const doc = document;
const routes = [
    {path: '', component: homePage},
    {path: 'about', component: aboutPage},
    {path: 'blog', component: blogPage},
    {path: 'blog/1', component: postPage},
    {path: '**', component: _404Page},
];

renderProducts(notebooks);

function filerProduct(srcArr) {
    return srcArr.filter(item => true);
}

function renderProducts(prodArr) {
    const outlet = doc.querySelector('.router-outlet');
    prodArr.forEach(product => outlet.innerHTML += product({prod}));
}


