function Casino(InitialNumberOfSlotMachines, InitialAmountOfMoneyInCasino){
	var _NumberOfSlotMachines = InitialNumberOfSlotMachines;
	var _AmountOfMoneyInCasino = InitialAmountOfMoneyInCasino;
	var _SlotMachineArray = [];
	var MachineInitialMoney = Math.floor(InitialAmountOfMoneyInCasino/InitialNumberOfSlotMachines);
	var FirstMachineInitialMoney = InitialAmountOfMoneyInCasino - MachineInitialMoney*(InitialNumberOfSlotMachines-1);
	_SlotMachineArray.push(new SlotMachine(FirstMachineInitialMoney));
	for(var i = 1; i < InitialNumberOfSlotMachines; i++){
		_SlotMachineArray.push(new SlotMachine(MachineInitialMoney));
	}
	var luckyIndex = Math.floor((Math.random() * InitialNumberOfSlotMachines));
	_SlotMachineArray[luckyIndex].makeLucky();
	this.log_all = function(){
		console.log(`Number of Machines - ${_NumberOfSlotMachines}`);
		for(var i = 0; i < _NumberOfSlotMachines; i++){
			_SlotMachineArray[i].showMoney();
		}
	}
	this.getTotalCasinoMoney = function(){
		var sum = 0;
		for(var i = 0; i < _NumberOfSlotMachines; i++){
			sum += _SlotMachineArray[i].getMachineMoney();
		}
		return sum;
	}
	this.getTotalMachinesNumber = function(){
		return _NumberOfSlotMachines;
	}
	this.addNewMachine = function(){
		var max = _SlotMachineArray[0].getMachineMoney();
		var maxIndex = 0;
		for(var i = 1; i < _SlotMachineArray.length; i++){
			if (_SlotMachineArray[i].getMachineMoney() > max){
				max = _SlotMachineArray[i].getMachineMoney();
				maxIndex = i;
			}
		}
		_NumberOfSlotMachines++;
		_SlotMachineArray.push(new SlotMachine(Math.floor(max/2)));
		_SlotMachineArray[maxIndex].takeMoney(Math.floor(max/2));
	}
	this.removeMachineByNumber = function(MachineNumber){
		if(_SlotMachineArray[MachineNumber]){
			var spreadedMoney = _SlotMachineArray[MachineNumber].getMachineMoney();
			_SlotMachineArray.splice(MachineNumber,1);
			_NumberOfSlotMachines--;
			//I give the rest money which can't be spreaded among all machines to the first one
			_SlotMachineArray[0].putMoney(spreadedMoney%_NumberOfSlotMachines + Math.floor(spreadedMoney/_NumberOfSlotMachines));
			for(var i = 1; i < _SlotMachineArray.length; i++){
				_SlotMachineArray[i].putMoney(Math.floor(spreadedMoney/_NumberOfSlotMachines));
			}
		}
		else{
			console.log("There's no such a Machine");
		}
	}
	this.takeMoneyFromCasino = function(MoneyAmount){
		var leftMoneyToTake = MoneyAmount;
		while(leftMoneyToTake > 0){
			var max = _SlotMachineArray[0].getMachineMoney();
			var maxIndex = 0;
			for(var i = 1; i < _SlotMachineArray.length; i++){
				if (_SlotMachineArray[i].getMachineMoney() > max){
					max = _SlotMachineArray[i].getMachineMoney();
					maxIndex = i;
				}
			}
			if(leftMoneyToTake > max){
				if(max === 0){
					console.log(`We gave all the money that the casino has(${MoneyAmount-leftMoneyToTake}), but we can't give you more, all slot machines are empty)`);
					return _SlotMachineArray;
				}
				leftMoneyToTake -= max;
				_SlotMachineArray[maxIndex].takeMoney(max);
			}
			else{
				_SlotMachineArray[maxIndex].takeMoney(leftMoneyToTake);
				leftMoneyToTake = 0;
			}
		}
		return _SlotMachineArray;
	}
}

function SlotMachine(InitialAmountOfMoneyInMachine){
	var _AmountOfMoneyInMachine = InitialAmountOfMoneyInMachine;
	var _lucky = false;

	this.makeLucky = function(){
		_lucky = true;
	}
	this.showMoney = function(){
		console.log(_AmountOfMoneyInMachine);
	}
	this.getMachineMoney = function(){
		return _AmountOfMoneyInMachine;
	}
	this.changeMoney = function(delta){
		_AmountOfMoneyInMachine += delta;
	}
	this.takeMoney = function(delta){
		if(_AmountOfMoneyInMachine >= delta){
			this.changeMoney(-delta);
		}
		else{
			this.changeMoney(-_AmountOfMoneyInMachine);
		}
	}
	this.putMoney = function(delta){
		this.changeMoney(delta);
	}
	this.play = function(receivedMoney){
		this.putMoney(receivedMoney);
		var firstNumber = Math.floor((Math.random() * 10) );
		var secondNumber = Math.floor((Math.random() * 10) );
		var thirdNumber = Math.floor((Math.random() * 10) );
		if(this._lucky){
			while(firstNumber != 7 || secondNumber != 7 || thirdNumber != 7){
				var firstNumber = Math.floor((Math.random() * 10) );
				var secondNumber = Math.floor((Math.random() * 10) );
				var thirdNumber = Math.floor((Math.random() * 10) );
			}
		}
		if(firstNumber === secondNumber === thirdNumber){
			if(firstNumber === 7){
				this.takeMoney(_AmountOfMoneyInMachine);
				console.log(`${firstNumber}${secondNumber}${thirdNumber}
					Grats! You won all the money in the machine - ${_AmountOfMoneyInMachine}`);
				return _AmountOfMoneyInMachine;
			}
			else{
				this.takeMoney(receivedMoney*5);
				console.log(`${firstNumber}${secondNumber}${thirdNumber}
					Grats! You won 5 times more money than you put - ${receivedMoney*5}`);
				return receivedMoney*5;
			}
		}
		else{
			if(firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber ===thirdNumber){
				this.takeMoney(receivedMoney*2);
				console.log(`${firstNumber}${secondNumber}${thirdNumber}
					Grats! You won 2 times more money than you put - ${receivedMoney*2}`);
				return receivedMoney*2;
		}
		console.log(`${firstNumber}${secondNumber}${thirdNumber}
			Sorry! You lost this time.`)

		}

	}

}
var my_casino = new Casino(10, 209);
my_casino.log_all();
console.log(`Total casino money - ${my_casino.getTotalCasinoMoney()}`);
console.log(`Total machines number - ${my_casino.getTotalMachinesNumber()}`);
console.log("Adding a new machine");
my_casino.addNewMachine();
my_casino.log_all();
console.log("Removing machine number 5");
my_casino.removeMachineByNumber(5);
my_casino.log_all();
console.log("Taking 50 from the casino");
my_casino.takeMoneyFromCasino(50);
my_casino.log_all();
var my_machine = new SlotMachine(10);
my_machine.getMachineMoney();
my_machine.showMoney();
my_machine.takeMoney(5);
my_machine.showMoney();
my_machine.putMoney(300);
my_machine.showMoney();
for(var i = 0; i < 100; i++)
{
	my_machine.play(10);
}
my_machine.showMoney();
