require.config({
	baseUrl: "../js_module",
	paths: {
		"jquery": "jquery-3.2.1.min",
		"avalon": "avalon",
		"test": "./../src/js/test",
	}
})

require(['test'],function () {
	console.log("test");
})