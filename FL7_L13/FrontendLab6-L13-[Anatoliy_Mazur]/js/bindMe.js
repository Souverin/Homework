Function.prototype.bindMe = function(context) {
    var thisOne = this;
    return function() {
        return thisOne.apply(context, arguments);
    }
}

function addPropToNumber(number) {
    return this.prop + number;
}

var bound = addPropToNumber.bindMe({
    prop: 9
});
console.log(bound(1));