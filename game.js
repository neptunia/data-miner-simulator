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

function delete_data_2() {
	delete_data();
	location.reload();
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
	  	revenue: 0, // combine happiness and revenue to get market share?
	  	cost: 500,
	  	ad_amt: 10,
	  	ppu: 1, // profit per user
	  	users_mod: 1,
	  	news: [0],
	  	upgrades: [],
	  	money: 10000,
	  	users: 10000
	  },
	  turns_elapsed: 0,
	  npc: {name: "Yoohoo!",
	  	happiness: 70,
	  	revenue: 1000,
	  	cost: 500,
	  	money: 10000,
	  	users: 10000
	  	// enemy revenue just 500 * number of seconds elapsed
	  	// enemy # of users just 300 * number of seconds elapsed (assume 80 happiness) + 10K
	  } 

	};
	save(state);

}
console.log(JSON.stringify(state));

function display_news() {
	if (state.player.money >= 100000 && state.player.news.indexOf("rsc1") < 0) {
		state.player.news.push("rsc1");
		display_modal("Your programmers are ready to improve the search features!");
		return;
	}

	if (state.player.money >= 1000000 && state.player.news.indexOf("rsc2") < 0) {
		state.player.news.push("rsc2");
		display_modal("It's time to hop onto the internet mail bandwagon, and create our own client!");
		return;
	}

	if (state.player.money >= 5000000 && state.player.news.indexOf("rsc3") < 0) {
		state.player.news.push("rsc3");
		display_modal("People are fed up with netscape and internet explorer - time to make our own browser!");
		return;
	}


	if (state.player.money >= 100000000 && state.player.news.indexOf("rsc4") < 0) {
		state.player.news.push("rsc4");
		display_modal("Buying a GPS is such a hassle... what if we make an online version?");
		return;
	}

	if (state.player.money >= 500000000 && state.player.news.indexOf("rsc5") < 0) {
		state.player.news.push("rsc5");
		display_modal("Online collaborative office suites are no longer a pipe dream. We can make it a reality.");
		return;
	}

	if (state.player.money >= 10000000 && state.player.news.indexOf("buy1") < 0) {
		state.player.news.push("buy1");
		display_modal("A new \"smartphone\" related startup in California has caught our eye. We should buy them out!");
		return;
	}

	if (state.player.money >= 500000000 && state.player.news.indexOf("buy2") < 0) {
		state.player.news.push("buy2");
		display_modal("Our scouts have discovered a video sharing business.");
		return;
	}

	if (state.player.money >= 1000000000 && state.player.news.indexOf("buy3") < 0 && state.player.upgrades.indexOf("rsc4") >= 0) {
		state.player.news.push("buy3");
		display_modal("There are so many competing map softwares... What can we do about that?");
		return;
	}

	if (state.player.money >= 10000000000 && state.player.news.indexOf("buy4") < 0 && state.player.upgrades.indexOf("buy1") >= 0) {
		state.player.news.push("buy4");
		display_modal("Moterola is losing market share. Maybe we should 'help them out'.");
		return;
	}

	if (state.player.money >= 3000000000 && state.player.news.indexOf("buy5") < 0 && state.player.upgrades.indexOf("buy4") >= 0) {
		state.player.news.push("buy5");
		display_modal("Smart homes seem to be one of those new trends. We can get in on it by buying another company.");
		return;
	}
	if (state.player.money >= 500000000 && state.player.news.indexOf("buy6") < 0 && state.player.upgrades.indexOf("buy5") >= 0) {
		state.player.news.push("buy6");
		display_modal("AI is the future. We want to be part of the future.");
		return;
	}

	if (state.player.news.indexOf("newsbuy4") < 0 && state.player.upgrades.indexOf("buy4") >= 0) {
		state.player.news.push("newsbuy4");
		display_modal("LMAO buying Moterola was a flop, we got a bunch of patents and a trade deal with Sam Snug but it didn't really profit us anything feelsbadman");
		return;
	}

	if (state.player.news.indexOf("spec2") < 0 && state.player.income > 1000000) {
		state.player.news.push("spec2");
		display_modal("We make enough money to hire a full-time lobbying team!");
		return;
	}

	const income = Math.floor(state.player.users * state.player.ad_amt / 100.0 * state.player.ppu) - state.player.cost + state.player.revenue;


	if (income > 15000000 && state.player.news.indexOf("newsantitrust") < 0) {
		var count = 0;
		var x;
		for (x in state.player.upgrades) {
			if (state.player.upgrades[x].startsWith("buy")) {
				count += 1;
			}
		}
		if (count >= 3) {
			state.player.news.push("newsantitrust");
			display_modal("Antitrust legislation is imposed against you, since you're buying too many companies! Take a $10000000 hit to profit.");
			state.player.cost += 10000000;
			save(state);
		}

	} 

	if (state.player.happiness_modifiers >= 20 && state.player.ad_amt >= 20 && state.player.ppu >= 2 && state.player.news.indexOf("newsadblock") < 0) {
		state.player.news.push("newsadblock");
		display_modal("Tired of all the targeted ads they're seeing, some users have begun to install adblocking software on their browsers. This has slightly reduced the value of your users' data.");
		state.player.ppu -= 0.5;
		save(state);
	}

	if (state.player.money >= 1000000000 && state.player.news.indexOf("newshacked") < 0) {
		state.player.news.push("newshacked");
		state.player.news.push("spec1");
		display_modal("Oh no! You've been hacked by Russian hackers! This has made many of your customers very unhappy with your services, and you lost a lot of money. Better fix up security soon!");
		state.player.money -= 500000000
		state.player.happiness_modifiers -= 10;
		save(state);
	}


}



function marketshare() {
	if (!state) {
		state = load();
	}
	var p = document.querySelector("#p1");
	const income = Math.floor(state.player.users * state.player.ad_amt / 100.0 * state.player.ppu) - state.player.cost + state.player.revenue;
	p.MaterialProgress.setProgress((income) * 100.0 / (income + state.turns_elapsed * 500));
}

function display_modal(v) {
	document.getElementById("dialog_data").innerHTML = v;
	var dialog = document.querySelector('dialog');
	dialog.showModal();
}

function update() {
	if (!state) {
		state = load();
	}

	state.turns_elapsed += 1;

	get_ad_aggro();
	increment_users();
	increase_money();
	// check if requirements have been fulfilled to display news
	display_news();
	try {
		marketshare();	
	} catch(error) {

	}


	// if happiness below 50, lose members!!
	// if no free users, happiness > 50, and happiness > npc's happiness, gain difference
	try {
		document.getElementById("money").innerHTML = "Money: $"+state.player.money;
		document.getElementById("users").innerHTML = "Users: "+state.player.users;
		document.getElementById("pop").innerHTML = "Satisfaction: "+state.player.happiness+"%";
	} catch(error) {
 		//console.error(error);
	}
	
	save(state);
}

function increment_users() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}
	//console.log(state.player.users);
	const n = state.player.happiness - 50;
	if (n > 10) {
		state.player.users += (Math.floor(n * state.player.users_mod)) * 10;
	} else {
		state.player.users += n * 10;
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
	const income = Math.floor(state.player.users * state.player.ad_amt / 100.0 * state.player.ppu) - state.player.cost + state.player.revenue;
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

function rsc4() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 100000000 && state.player.upgrades.indexOf("rsc4") < 0) {
		state.player.money -= 100000000;
		state.player.cost += 1000;
		state.player.ppu += 0.5;
		state.player.users_mod += 1;
		state.player.upgrades.push("rsc4");
		save(state);
	}

	if (state.player.upgrades.indexOf("rsc4") >= 0) {
		itm = document.getElementById("rsc4btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("rsc4btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function rsc5() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 500000000 && state.player.upgrades.indexOf("rsc5") < 0) {
		state.player.money -= 500000000;
		state.player.cost += 1000;
		state.player.users_mod += 1;
		state.player.happiness_modifiers += 5;
		state.player.upgrades.push("rsc5");
		save(state);
	}

	if (state.player.upgrades.indexOf("rsc5") >= 0) {
		itm = document.getElementById("rsc5btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("rsc5btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function buy1() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 10000000 && state.player.upgrades.indexOf("buy1") < 0) {
		state.player.money -= 10000000;
		state.player.cost += 700;
		state.player.ppu += 0.3;
		state.player.users_mod += 1;
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

function buy2() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 500000000 && state.player.upgrades.indexOf("buy2") < 0) {
		state.player.money -= 500000000;
		state.player.cost += 1000;
		state.player.ppu += 1;
		state.player.users_mod += 2;
		state.player.upgrades.push("buy2");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy2") >= 0) {
		itm = document.getElementById("buy2btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy2btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function buy3() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 1000000000 && state.player.upgrades.indexOf("buy3") < 0) {
		state.player.money -= 1000000000;
		state.player.ppu += 0.2;
		state.player.upgrades.push("buy3");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy3") >= 0) {
		itm = document.getElementById("buy3btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy3btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function buy4() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 10000000000 && state.player.upgrades.indexOf("buy4") < 0) {
		state.player.money -= 10000000000;
		state.player.upgrades.push("buy4");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy4") >= 0) {
		itm = document.getElementById("buy4btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy4btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function buy5() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 3000000000 && state.player.upgrades.indexOf("buy5") < 0) {
		state.player.money -= 3000000000;
		state.player.revenue += 5000;
		state.player.ppu += 0.5;
		state.player.happiness_modifiers += 5;
		state.player.upgrades.push("buy5");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy5") >= 0) {
		itm = document.getElementById("buy5btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy5btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}


function buy6() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.money >= 500000000 && state.player.upgrades.indexOf("buy6") < 0) {
		state.player.money -= 500000000;
		state.player.cost -= 100;
		state.player.upgrades.push("buy6");
		save(state);
	}

	if (state.player.upgrades.indexOf("buy6") >= 0) {
		itm = document.getElementById("buy6btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("buy6btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function spec1() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.upgrades.indexOf("spec1") < 0) {
		state.player.cost += 1000;
		state.player.happiness_modifiers += 10;
		state.player.upgrades.push("spec1");
		save(state);
	}

	if (state.player.upgrades.indexOf("spec1") >= 0) {
		itm = document.getElementById("spec1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("spec1btn");
		itm.disabled = false;
		itm.innerHTML = "Purchase";

	}

}

function spec2() {
	if (!state) {
		console.log("uh oh");
		state = load();
	}

	if (state.player.upgrades.indexOf("spec2") < 0) {
		state.player.revenue += 1000000;
		state.player.happiness_modifiers -= 5;
		state.player.upgrades.push("spec2");
		save(state);
	}

	if (state.player.upgrades.indexOf("spec2") >= 0) {
		itm = document.getElementById("spec2btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	} else {
		itm = document.getElementById("spec2btn");
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

