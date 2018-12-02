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

	if (state.player.news.indexOf("spec1") >= 0) {
		itm = document.getElementById("spec1div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("spec2") >= 0) {
		itm = document.getElementById("spec2div");
	    itm.classList.remove("hidden");
	}

	if (state.player.upgrades.indexOf("spec1") >= 0) {
		itm = document.getElementById("spec1btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
	if (state.player.upgrades.indexOf("spec2") >= 0) {
		itm = document.getElementById("spec2btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
}
