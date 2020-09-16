Vue.component('as-textareafield', {
	props:
	{
		label: String,
		rows: String,
		value: Object,
		maxlength: String,
        readonly: Boolean
	},
	template: '' +
		'<div class="as_textareafield">' +
			'<div :class="value.value!==\'\'?\'as_textareafield_filled\':\'as_textareafield_not_filled\'">' +
				'<div class="as_textareafield_label">{{label}}</div>' +
				'<textarea v-model="value.value" :rows="rows" :maxlength="maxlength" :autosize="true" :class="value.error!=\'\'?\'as_textareafield_error\':\'\'"></textarea>'+
				'<div v-if="value.error!=\'\'" class="as_textareafield_error">{{value.error}}</div>' +
			'</div>' +
		'</div>'
});