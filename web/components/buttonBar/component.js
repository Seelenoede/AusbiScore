Vue.component('as-button-bar', {
    props:
        {
            href: String,
            // click: String,
            link: Boolean,
            label: String
        },
    computed:
        {
            myClass:function()
            {
                let myClass=this.link?'as_buttonBar_link':'as_buttonBar_button';
                return myClass;
            },
        },
    methods:
        {
        },
    template: '' +
        '<div class="as_buttonBar">' +
            '<div :class="myClass">' +
                '<a class="as_buttonBar_label" :href="href">{{label}}</a>' +
            '</div>' +
        '</div>'
});