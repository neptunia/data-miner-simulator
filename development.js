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
	if (state.player.upgrades.indexOf("rsc1") >= 0) {
		itm = document.getElementById("rsc1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
}
