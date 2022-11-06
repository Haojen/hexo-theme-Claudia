/*
    A img fancybox wrapper for img zoom in&out
    author: jackfromeast
 */


document.addEventListener("DOMContentLoaded", function(event) {
    var images = document.getElementsByTagName('img');
    Array.prototype.filter.call(images, function(img){
        wrap_image_with_fancybox(img);
    });

    // prevent returning to the top of the page after loading the fancybox
    $.fancybox.defaults.hideScrollbar = false;
});


function wrap_image_with_fancybox(img){
    var parent_node = img.parentNode;
    var wrap_link = document.createElement('a');
    parent_node.replaceChild(wrap_link, img);
    
    // add property to wrap_link
    wrap_link.appendChild(img);
    wrap_link.href = img.src;
    wrap_link.setAttribute("data-fancybox", "lightbox");

    if(img.title){
        wrap_link.setAttribute("data-caption", img.title);
    }
}