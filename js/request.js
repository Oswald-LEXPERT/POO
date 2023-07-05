'use strict'
class Request {
    getImputs (elements){
        this.inputValue = elements;

        for (let i = 0; i < elements.length; i++) {
            console.log(elements[i].value );
            
        }
    }
}

//On peut toutefois fait exportation comme suit :
export default  Request ;
// export default { Request} ;