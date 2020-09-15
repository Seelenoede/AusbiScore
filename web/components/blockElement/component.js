Vue.component('as-block-element', {
    props:
    {
        elementList:[]
    },
    data: function ()
    {
        return {}
    },
    computed:
        {},
    methods:
        {},
    template: '' +
        '<div class="as_blockElement">' +
            '<slot></slot>'+
        '</div>'
});