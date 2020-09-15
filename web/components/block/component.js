Vue.component('as-block', {
    props:
        {
            linePadding: { type: Boolean, default: false }
        },
    data: function ()
    {
        return {}
    },
    computed:
        {
            className:function()
            {
                let classes = ['as_block'];
                classes.push("as_block_linePadding_"+this.linePadding);
                return classes;
            }
        },
    methods:
        {},
    template: '' +
        '<div :class="className">' +
            '<slot></slot>'+
        '</div>'
});