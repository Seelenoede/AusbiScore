Vue.component('as-textfield', {
    props:
    {
        label: String,
        value: Object,
        type:{type: String, default:"text"},
        maxlength: String,
        readonly: Boolean
    },
    data: function ()
    {
        return {}
    },
    methods:
        {},
    template: '' +
        '<div class="as_textfield">' +
            '<div>' +
                '<div class="as_textfield_label">{{label}}</div>' +
                '<input :type="type" v-model="value.value" :maxlength="maxlength" :class="value.error!=\'\'?\'as_inputfield_error\':\'\'"/>' +
                '<span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>' +
                '<div v-if="value.error!=\'\'" class="as_textfield_error">{{value.error}}</div>' +
            '</div>' +
        '</div>'
});