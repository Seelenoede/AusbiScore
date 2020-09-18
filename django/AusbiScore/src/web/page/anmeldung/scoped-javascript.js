new Vue({
    el:'#as_page_anmeldung',
    data:
    {
        as_tabs:
        [
            {active:true, visible:true, disabled:false, loaded:false, errorText:"", name:"tab1", label:""}
        ],
        user:{value:"Testuser", error:""},
        passwort:{value:"1234", error:""}
    },
    mounted:function()
    {
    },
    computed:
    {

    },
    methods:
    {
        anmelden:function ()
        {
            let anmeldeDaten={user:this.user.value, passwort:this.passwort.value};
            let success = false;
            axios.post('./anmeldung', anmeldeDaten).then(function (response) {
                console.log(response);
                if(response.status = 200) {
                    window.location.href = '/uebersicht/';
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        passwortAnzeigen:function()
        {
            let input= $("#as_page_anmeldung #asl_eye_passwort input");
            if (input.attr("type") === "password")
            {
                input.attr("type", "text");
            }
            else
            {
                input.attr("type", "password");
            }
        }
    }

});
