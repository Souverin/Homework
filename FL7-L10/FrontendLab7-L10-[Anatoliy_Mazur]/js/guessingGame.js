var min_number, max_number, guessed, a, max_value, mid_value, min_value, value_kof, value, wanna_play, cur_value;
function Wanna_Play(){
	wanna_play = confirm("Чи бажаєте почати гру?");
	if(!wanna_play){
		console.log("Сьогодні ви не виграли мільйон, а могли.");
		return;
	}
	return wanna_play;
}
function start_values(){
	min_number = 0;
	max_number = 5;
	max_value = 10;
	mid_value = 5;
	min_value = 2;
	value_kof = 1;
	value = 0;
}
function ThreeChoices(){
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
}
function Lost(){
	wanna_play = confirm("Ваш виграш 0$. Хочете зіграти ще раз?");
	if (wanna_play){
		Game();
	}
}
function Wanna_Play_More(){
	wanna_play = confirm("Хочете грати далі?");
		value+=cur_value;
		if(!wanna_play){
			alert(`Дякуємо за гру, ваш виграш становить ${value}$`);
		}
		max_number*=2;
		value_kof*=3;
		return wanna_play;
}
function startGame(){
		while(1){
			ThreeChoices();
			if (!guessed){
				Lost();
				if(!wanna_play){
					break;
				}
			}
			else{
				if(!Wanna_Play_More())
				{
					break;
				}
			}
		}
}
function Game(){
	if (Wanna_Play())
	{
		start_values();
		startGame();
	}
}
Game();