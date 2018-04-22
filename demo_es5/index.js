var _class;

const autobind = target => {
    const _prototype = target.prototype;
    const instance = new target();
    Object.getOwnPropertyNames(target.prototype).forEach(item => {
        if (item !== 'constructor' && typeof _prototype[item] === 'function') {
            _prototype[item] = _prototype[item].bind(instance);
        }
    });
};

let Demo = autobind(_class = class Demo {
    constructor() {
        this.x = 111;
        this.y = 222;
    }

    test() {
        console.log('this =====', this);
        console.log(this.x);
    }

    test2() {
        console.log(this.y);
    }

}) || _class;

// Demo.test();
// new Demo().test();


const ut = fn => {
    fn();
};

ut(new Demo().test);

ut(new Demo().test2);