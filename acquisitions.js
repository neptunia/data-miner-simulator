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

	if (state.player.news.indexOf("buy1") >= 0) {
		itm = document.getElementById("buy1div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("buy2") >= 0) {
		itm = document.getElementById("buy2div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("buy3") >= 0) {
		itm = document.getElementById("buy3div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("buy4") >= 0) {
		itm = document.getElementById("buy4div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("buy5") >= 0) {
		itm = document.getElementById("buy5div");
	    itm.classList.remove("hidden");
	}
	if (state.player.news.indexOf("buy6") >= 0) {
		itm = document.getElementById("buy6div");
	    itm.classList.remove("hidden");
	}


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
	if (state.player.upgrades.indexOf("buy4") >= 0) {
		itm = document.getElementById("buy4btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
	if (state.player.upgrades.indexOf("buy5") >= 0) {
		itm = document.getElementById("buy5btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
	if (state.player.upgrades.indexOf("buy6") >= 0) {
		itm = document.getElementById("buy6btn");
		itm.disabled = true;
		itm.innerHTML = "Purchased";
	}
}
