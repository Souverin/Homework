var eur_amount = prompt("Enter the amount of euros");
var dollar_amount = prompt("Enter the amount of dollars");
var eur_in_uah = 29.6223153*eur_amount;
var dollar_in_uah = 26.0023922*dollar_amount;
var euro_dollar = 29.6223153/26.0023922;
alert(`${eur_amount} euros are equal ${eur_in_uah} UAH, ${dollar_amount} dollars are equal ${dollar_in_uah} UAH, one euro is equal ${euro_dollar} dollars.
`)