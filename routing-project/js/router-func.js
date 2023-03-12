function renderComponent(component) {
    const outlet = doc.querySelector('.router-outlet');
    outlet.innerHTML = component;
}

function renderRoute() {
    const basePath = router.getHash();
    let path = basePath;

    let serchParamStr = '';
    let route = routes.find(r => {
        if (path.includes('/')) {
            return r.path == router.getBasePath(path);
        }

        return r.path == path;
    });

    if (router.isUndefined(route)) {
        route = routes.find(r => r.path == '**');
    }

    serchParamStr = route.path.split('/')[1];
    console.log(serchParamStr);

    renderComponent(route.component({params: serchParamStr}));
}

function initRoute() {
    addEventListener('hashchange', renderRoute);
}