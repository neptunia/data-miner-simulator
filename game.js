var SAVE_KEY = 'save';

function save(state) {
	localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function load() {
	return JSON.parse(localStorage.getItem(SAVE_KEY));
}

function delete_data() {
	localStorage.clear();
}

state = load();
// new file
if (!state) {
	// up to 10M users
	var state = {
	  player: {
	  	name: "Gewgle",
	  	base_happiness: 70,
	  	happiness_modifiers: 0,
	  	happiness: 70, // user satisfaction
	  	revenue: 1000, // combine happiness and revenue to get market share?
	  	cost: 500,
	  	ad_amt: 0,
	  	ppu: 1, // profit per user
	  	users_mod: 1,
	  	upgrades: [],
	  	research: [
	  		{
	  			id: "gmail",
	  			unlock: 100000, // users
	  			desc: "create an email client! is very good. +10 happiness",
	  			cost: 100000,
	  			time: 1000,
	  			requirements: []
	  		} // improving gmail -> steal user data will increase revenue per user 

	  	],
	  	acquisitions: [
	  		{
	  			id: "youtube",
	  			unlock: 1000000, // users
	  			desc: "buy a video client! is very good. +15 happiness",
	  			cost: 1000000,
	  			time: 0
	  		}
	  	],
	  	money: 10000,
	  	users: 10000
	  },
	  npc: {name: "Yoohoo!",
	  	happiness: 70,
	  	revenue: 1000,
	  	cost: 500,
	  	money: 10000,
	  	users: 10000
	  } 

	};
	save(state);

}
console.log(JSON.stringify(state));

function update() {
	if (!state) {
		state = load();
	}
	get_ad_aggro();
	increment_users();
	increase_money();
	// if happiness below 50, lose members!!
	// if no free users, happiness > 50, and happiness > npc's happiness, gain difference
	try {
		document.getElementById("money").innerHTML = "Money: $"+state.player.money;
		document.getElementById("users").innerHTML = "Users: "+state.player.users;
		document.getElementById("pop").innerHTML = "Satisfaction: "+state.player.happiness+"%";
	} catch(error) {
 		//console.error(error);
	}
	
}

function increment_users() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}
	//console.log(state.player.users);
	const n = state.player.happiness - 50;
	if (n > 10) {
		state.player.users += Math.floor(n * state.player.users_mod);
	} else {
		state.player.users += n + 10;
	}
	//console.log(state.player.users);
	save(state);
}

function get_ad_aggro() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}
	if (document.getElementById("myRange") != null) {
		state.player.ad_amt = document.getElementById("myRange").value;
	}
	state.player.happiness = state.player.base_happiness - state.player.ad_amt + state.player.happiness_modifiers;
	save(state);
}

function increase_money() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}
	const income = Math.floor(state.player.users * state.player.ad_amt / 100.0 * state.player.ppu) - state.player.cost;
	console.log(income);
	state.player.money += income;
	try {
		document.getElementById("income").innerHTML = "Income: $"+income;
	} catch(error) {
		//console.error(error);
	}
	
}

function rsc1() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 100000 && state.player.upgrades.indexOf("rsc1") < 0) {
		state.player.money -= 100000;
		state.player.happiness_modifiers += 5;
		state.player.upgrades.push("rsc1");
		save(state);
	}

	if (state.player.upgrades.indexOf("rsc1") >= 0) {
		itm = document.getElementById("rsc1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("rsc1btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function rsc2() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 1000000 && state.player.upgrades.indexOf("rsc2") < 0) {
		state.player.money -= 1000000;
		state.player.cost += 500;
		state.player.ppu += 0.25;
		state.player.happiness_modifiers += 5;
		state.player.upgrades.push("rsc2");
		save(state);
	}

	if (state.player.upgrades.indexOf("rsc2") >= 0) {
		itm = document.getElementById("rsc2btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("rsc2btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function rsc3() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 5000000 && state.player.upgrades.indexOf("rsc3") < 0) {
		state.player.money -= 5000000;
		state.player.cost += 1000;
		state.player.ppu += 0.5;
		state.player.happiness_modifiers += 5;
		state.player.users_mod += 1;
		state.player.upgrades.push("rsc3");
		save(state);
	}

	if (state.player.upgrades.indexOf("rsc3") >= 0) {
		itm = document.getElementById("rsc3btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("rsc3btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function buy1() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 500000000 && state.player.upgrades.indexOf("buy1") < 0) {
		state.player.money -= 500000000;
		state.player.cost += 1000;
		state.player.ppu += 1;
		state.player.users_mod += 2;
		state.player.upgrades.push("buy1");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy1") >= 0) {
		itm = document.getElementById("buy1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy1btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function sliderChange(value) {
	document.getElementById("adagg").innerHTML = "Advertisement Aggressiveness: "+value+"%"
}

try {
	myRange.value = state.player.ad_amt;
	sliderChange(state.player.ad_amt);
} catch(error) {

}

window.setInterval(function(){
	
	update();
	
}, 1000);

