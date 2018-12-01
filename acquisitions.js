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

if (state) {
	if (state.player.upgrades.indexOf("buy1") >= 0) {
		itm = document.getElementById("buy1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
	if (state.player.upgrades.indexOf("buy2") >= 0) {
		itm = document.getElementById("buy2btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
	if (state.player.upgrades.indexOf("buy3") >= 0) {
		itm = document.getElementById("buy3btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
}
