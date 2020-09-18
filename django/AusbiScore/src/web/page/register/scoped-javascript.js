new Vue({
    el:'#as_page_register',
    data:
    {
        as_tabs:
        [
            {active:true, visible:false, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Registrieren"}
        ],
        benutzer:
        {
            name:{value:"", error:""},
            vorname:{value:"", error:""},
            adresse:{value:"", error:""},
            klasse:{value:"", error:""},
            ausbildungsstaette:{value:"", error:""},
            ausbildungsberuf:{value:"", error:""},
            ausbilder:{value:"", error:""},
            userName:{value:"", error:""},
            passwort:{value:"", error:""},
        }
    },
    mounted:function()
    {},
    computed:
    {},
    methods:
    {
        passwortAnzeigen:function()
        {
            let input= $("#as_page_register #asl_eye_passwort input");
            if (input.attr("type") === "password")
            {
                input.attr("type", "text");
            }
            else
            {
                input.attr("type", "password");
            }
        },
        speichern:function () {
            // hier wird den Eintrag gespecihert
        }
    }

});
