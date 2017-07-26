Function.bind = function(){
    var fn = this,
    args = Array.prototype.slice.call(arguments),
    context = args.shift();
    return function(){
        return fn.apply(context , args);
    }
}

function log(){
    console.log(this.a);
}

cloneLog = log.bind({a:3})

cloneLog()