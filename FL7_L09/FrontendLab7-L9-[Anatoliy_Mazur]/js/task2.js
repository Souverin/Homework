var min_number, max_number, guessed, a, max_value, mid_value, min_value, value_kof, value, wanna_play, cur_value;
wanna_play = confirm("Чи бажаєте почати гру?");
if(!wanna_play){
	console.log("Сьогодні ви не виграли мільйон, а могли.");
}
else{
	while(1){
		min_number = 0;
		max_number = 5;
		max_value = 10;
		mid_value = 5;
		min_value = 2;
		value_kof = 1;
		value = 0;
		while(1){
			guessed = false;
			var random_number = Math.floor(Math.random() * max_number);
			for(var i = 1; i < 4;i++){
				//I used a hint for easier testing
				var entered_number = prompt(`Вгадайте випадкове число від ${min_number} до ${max_number}(підказка:${random_number})`, '');
				if (entered_number==random_number){
					switch(i){
						case 1:
						cur_value = max_value*value_kof;
						alert(`Вітаємо! Ви вгадали з першої спроби і виграли ${cur_value}$ зверху`);
						break;
						case 2:
						cur_value = mid_value*value_kof;
						alert(`Вітаємо! Ви вгадали з другої спроби і виграли ${cur_value}$ зверху`);
						break;
						case 3:
						cur_value = min_value*value_kof;
						alert(`Вітаємо! Ви вгадали з третьої спроби і виграли ${cur_value}$ зверху`);
						break;
						default:
						break;
					}
					guessed = true;
					break;
				}
			}
			if(!guessed){
				wanna_play = confirm("Ваш виграш 0$. Хочете зіграти ще раз?");
				break;
			}
			else{
				wanna_play = confirm("Хочете грати далі?");
				value+=cur_value;
				if(!wanna_play){
					alert(`Дякуємо за гру, ваш виграш становить ${value}$`);
					break;
				}
				max_number*=2;
				value_kof*=3;
			}
		}
		if(!wanna_play){
					break;
				}
	}
}