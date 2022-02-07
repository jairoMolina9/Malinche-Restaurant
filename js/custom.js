function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
const elem = document.getElementsByClassName("wrap-gallery-sidebar");

for(let i = 1; i < 30; i++) {
    let node1 = document.createElement("a");
    let node2 = document.createElement("img");

    setAttributes(node1, {
        "class": "item-gallery-sidebar wrap-pic-w",
        "href": "images/gallery/gallery ("+i+").jpg",
        "data-lightbox": "gallery-footer"
    });

    setAttributes(node2, {
        "src": "images/gallery/gallery ("+i+").jpg",
        "alt": "GALLERY"
    });

    node1.appendChild(node2);
    elem[0].appendChild(node1);
}

