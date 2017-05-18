define(function(require, exports, module) {
    var avalon = require('avalon'),
        jquery = require('jquery');

    var vm1 = avalon.define({
        $id: "navController",
        titles: ['t1', 't2', 't3'],
    });

    var vm = avalon.define({
        $id: "contentController",

        category: ['c1', 'c2', 'c3'],

        contents: { tit1: 'tt1', tit2: 'tt2' },

        tag: false,
        callback: function() {
            vm.tag = true;
        }

        /*name: "somair",
        array: [11,22,33],


        arr: [{color: 'red'},{color:'green'},{color:'red'}],

        filterFn1: function(el) {
        	console.log(el.color);
        	return el.color === 'red';
        },
        filterFn2: function(el) {
        	return el.color === 'green';
        },

		
        objArray: {s1: 's1', s2: 's2', s3: 's3'},
        grid: [{a: 1, b: 2, c: 3}, {c: 11, b: 22, a: 33}, {b: 23, a: 44}],

        defaults: {

        },

        //str: '',
        getType: function(x) {
        	console.log(typeof(x));
        },

        date: new Date,

        log: function(x) {
        	return console.log(x);
        },

        elementTest: function() {
        	$("p").on("click", function(){
        		console.log( $(this));
        	});
        },*/


    });

    $("p").mouseenter(function() {
        vm.tag == true;
        console.log(vm.tag);
    });
    /*setTimeout(function(){
    	vm.array.set(1, 444)
    }, 3000);*/

    /*function init(e) {
    	comp = e.vmodel
    }*/

    //var obj = avalon.oneObject("a,b,c");




    var c1, c2;

    avalon.component('ms-view', {
        template: '<div class="view" ms-click = "@click">{{@content}}</div>',
        defaults: {
            content: "fsdf",
            onInit: function(e) {
                c1 = e.vmodel;
            },
            click: function() {
                console.log('inner..');
            }
        }
    });

    avalon.component('ms-pager', {
        template: '<div><input type="text" ms-duplex-number="@num"/><button type="button" ms-on-click="@onPlus">+++</button></div>',
        defaults: {
            num: 1,
            onPlus: function() {
                this.num++;
            },
            onInit: function(e) {
                c2 = e.vmodel;
            }
        }
    });
})




/*(function(){
	vm.array.set(1, 444)
})();

function test1() {
	this.name = "test1";
	this.fn1 = function() {
		console.log(this.name);
	}
}

function test2() {
	this.name = "test2";
}


var t1 = new test1();
var t2 = new test2();

t1.fn1.call(t2);*/