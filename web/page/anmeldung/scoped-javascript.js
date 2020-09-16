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
        anmelden:function ()
        {
            // hier wird die Verbindung mit dem Server hergestellt
            console.log("fsecs");
            // $.ajax({
            //     type: 'POST',
            //     url: "controller/pepe.py",
            //     data: {param: xyz}, //passing some input here
            //     dataType: "text",
            //     success: function(response){
            //         output = response;
            //         alert(output);
            //     }
            // }).done(function(data){
            //     console.log(data);
            //     alert(data);
            // });
            // JQuery.ajax(
            //     {
            //         type: 'POST',
            //         url: "controller/pepe.py",
            //         data: "", //passing some input here
            //         // dataType: "text",
            //         success: function (response) {
            //             console.log("poepepe");
            //         }
            //     }).done(function (data) { console.log(data); alert(data)});
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("demo").innerHTML =
                        this.responseText;
                }
            };
            xhttp.open("GET", "../../../backend/Main.java", true);
            xhttp.send();
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
