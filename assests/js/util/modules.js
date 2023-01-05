/**
 * Add attributes to TAG Element.
 * @param {*} tag 
 * @param {*} typesValues [type, value, type, value, ...]
 */
function add_attributes(tag, typesValues) {

    if (typesValues != null && typesValues.length > 0) {
        for (var i = 0; i < typesValues.length; i+=2) {
            switch (typesValues[i]) {
                case "textContent":
                    tag.textContent = typesValues[i+1];
                    break;

                case "innerHTML":
                    tag.innerHTML += typesValues[i+1];
                    break;

                default:
                    tag.setAttribute(typesValues[i], typesValues[i+1]);
            }            
        }
    }
 
}