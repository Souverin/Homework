function compose() {
    return Array.prototype.reduceRight.call(arguments, function(prev, curr) {
        return function() {
            return curr(prev.apply(null, arguments));
        };
    })
}
const toUpper = string => string.toUpperCase();
const classyGreeting = (firstName, lastName) =>
"The name's " + lastName + ", " + firstName + " " + lastName;
const yellGreeting = compose(
  toUpper,
  classyGreeting,
);

console.log(yellGreeting('James', 'Bond')); //=> "THE NAME'S BOND, JAMES BOND"

module.exports = compose;