/**
 * 
 * @param {*} tag 
 * @param {*} classes 
 * @param {*} href 
 * @param {*} title 
 * @param {*} textContent 
 * @param {*} rel 
 * @param {*} target 
 */
function update_element(tag, classes, href, title, textContent, rel, target) {

    // Update elements.
    if (rel != null && rel)                 tag.rel         = rel;
    if (target != null && target)           tag.target      = target;
    if (href != null && href)               tag.href        = href;
    if (title != null && title)             tag.title       = title;
    if (textContent != null && textContent) tag.textContent = textContent;
    
    // Update classes.
    if (classes != null && classes.length > 0) { 
        for (let cls of classes) {
            tag.classList.add(cls);
        }
    }
 
}


