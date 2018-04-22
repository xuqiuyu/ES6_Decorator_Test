
const autobind = target => {
    const propertyNames = Object.getOwnPropertyNames(target.prototype);
    const instance = new target();
    propertyNames.forEach(item => {
        if(item !== 'constructor' && typeof target.prototype[item] === 'function'){
            target.prototype[item] = target.prototype[item].bind(instance);
        }
    });
}


@autobind
class Demo {
    constructor(){
        this.x = 111;
    }

    test(){
        console.log('this =====',this);
        console.log(this.x);
    }

}

// Demo.test();
// new Demo().test();
const ut  = fn => {
    fn();
}

ut(new Demo().test);