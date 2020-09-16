new Vue({
    el:'#as_page_anmeldung',
    data:
    {
        as_tabs:
        [
            {active:true, visible:true, disabled:false, loaded:false, errorText:"", name:"tab1", label:""}
        ],
        user:{value:"", error:""},
        passwort:{value:"", error:""}
    },
    mounted:function()
    {
    },
    computed:
    {

    },
    methods:
    {
        anmelden:function () {
            // hier wird die Verbindung mit dem Server hergestellt
        }
    }

});
