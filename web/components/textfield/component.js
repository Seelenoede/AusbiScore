Vue.component('as-textfield', {
    props:
        {
            label: String,
            value: Object,
            maxlength: String,
            readonly: Boolean
        },
    template: '' +
        '<div class="as_textfield">' +
            '<div>' +
                '<div class="as_textfield_label">{{label}}</div>' +
                '<input type="text" v-model="value.value" :maxlength="maxlength" :class="value.error!=\'\'?\'as_inputfield_error\':\'\'"/>' +
                '<div v-if="value.error!=\'\'" class="as_textfield_error">{{value.error}}</div>' +
            '</div>' +
        '</div>'+
        '<style lang="scss">'+
            '@import "component.scss";'+
        '</style>'

});