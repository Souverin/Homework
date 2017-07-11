var a = prompt("Введіть коефіцієнт 'а' рівнняння типу ax2+ bx + c = 0");
var b = prompt("Введіть коефіцієнт 'b' рівнняння типу ax2+ bx + c = 0");
var c = prompt("Введіть коефіцієнт 'c' рівнняння типу ax2+ bx + c = 0");
var D = b*b-4*a*c;
var res1 = (-b+Math.sqrt(D))/(2*a);
var res2 = (-b-Math.sqrt(D))/(2*a);
var str1 = `Рівняння ${a}x2+ ${b}x + ${c} = 0 має 2 розв’язки: x1 = ${res1}, x2 = ${res2}`
;
var str2 = "Рівняння не має дійсних розв’язків";
var str3 = D > 0 ? str1 : str2;
console.log(str3);