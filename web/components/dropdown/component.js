Vue.component('as-dropdown', {
	props:
	{
		label: String,
		options: Array,
		value: Object
	},
	template: '' +
		'<div class="as_dropdown">' +
			'<div :class="value.value!=\'\'?\'as_dropdown_filled\':\'\'">' +
				'<div class="as_dropdown_label">{{label}}</div>' +
				'<select v-model="value.value"  :class="value.error!=\'\'?\'as_dropdown_error\':\'\'">'+
					'<option v-for="option in options" :value="option.code">{{option.decode}}</option>'+
				'</select>'+
				'<div  v-if="value.error!=\'\'" class="as_dropdown_error">{{value.error}}</div>' +
			'</div>' +
		'</div>' +
		'<style lang="scss">' +
			'@import "style.css";'+
		'</style>'
});