var z = require('zetam-client');

z.registerComponent({
	name:'<%= componentName %>',
	init:function () {
		this.bindEvent('button','click','showMessage');
	},
	showMessage:function(){
		this.controller('testMethod',function(err,res){
			alert(res.text);
		})
	}
})