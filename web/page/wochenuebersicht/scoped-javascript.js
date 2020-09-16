new Vue({
    el:'#as_page_wochenuebersicht',
    data:
    {
        as_tabs:
        [
            {active:true, visible:false, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Wochenübersicht"}
        ],
        eingaben:
            {
                monat:{value:"", error:""},
                jahr:{value:"", error:""}
            },
        //todo: eintrag entfernen sobald nicht mehr benötigt
        eintrag:{value:"", error:""},
        auswahllisten:
            {
                monat:[
                    {code:"01", decode:"Januar"},
                    {code:"02", decode:"Februar"},
                    {code:"03", decode:"März"},
                    {code:"04", decode:"April"},
                    {code:"05", decode:"Mai"},
                    {code:"06", decode:"Juni"},
                    {code:"07", decode:"Juli"},
                    {code:"08", decode:"August"},
                    {code:"09", decode:"September"},
                    {code:"10", decode:"Oktober"},
                    {code:"11", decode:"November"},
                    {code:"12", decode:"Dezember"}
                    ],
                jahr:[
                    {code:"2016", decode:"2016"},
                    {code:"2017", decode:"2017"},
                    {code:"2018", decode:"2018"},
                    {code:"2019", decode:"2019"},
                    {code:"2020", decode:"2020"},
                    {code:"2021", decode:"2021"}
                    ]
            },
            listWochen:
                [
                    {wochenId:"1", wochenstart:"14.09.2020", wochenende:"20.09.2020", wochenstatuscode:"10", wochenstatusdecode:"vollständig"},
                    {wochenId:"2", wochenstart:"21.09.2020", wochenende:"27.09.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"3", wochenstart:"28.09.2020", wochenende:"04.10.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"4", wochenstart:"05.10.2020", wochenende:"11.10.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"5", wochenstart:"12.10.2020", wochenende:"18.10.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"6", wochenstart:"19.10.2020", wochenende:"26.10.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"7", wochenstart:"27.10.2020", wochenende:"01.11.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"8", wochenstart:"02.11.2020", wochenende:"08.11.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"9", wochenstart:"09.11.2020", wochenende:"15.11.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"},
                    {wochenId:"10", wochenstart:"16.11.2020", wochenende:"22.11.2020", wochenstatuscode:"20", wochenstatusdecode:"offene Einträge"}
                ]
    },
    computed:
    {

    },
    methods:
    {
        currentDate:function()
        {
            let me = this;
            const heute = new Date();
            let month = "" + (heute.getMonth() + 1);
            let day = "" + heute.getDate();
            let year = "" + heute.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            let dateFormate = [day, month, year].join(".");
            return dateFormate;
        },
        //todo:Funktion zum suchen nach den passenden Wochen (Monat / Jahr) in der DB
        sucheWochen:function()
        {
            let me = this;
            if(me.eingaben.monat.value ==="")
            {

            }
            else
            {
                for(let i = me.listWochen.length-1; i >= 0; i--)
                {
                    // let zahlMonat = me.listWochen[i].wochenstart.substring(me.listWochen[i].wochenstart.indexOf('.'),4);
                    let stringTag = me.listWochen[i].wochenstart.substring(0,2);
                    let stringMonat = me.listWochen[i].wochenstart.substring(3,5);
                    let stringJahr = me.listWochen[i].wochenstart.substring(6,10);
                    console.log(me.listWochen[i].wochenstart);
                    console.log(stringTag);
                    console.log(stringMonat);
                    console.log(stringJahr);
                    // if(stringMonat === me.eingaben.monat.value)
                    //     console.log(stringMonat + " '!==' " + me.eingaben.monat.value + " '=' " + stringMonat !== me.eingaben.monat.value);

                    if(stringMonat !== me.eingaben.monat.value || stringJahr !== me.eingaben.jahr.value)
                        me.listWochen.splice(i,1);
                    // {
                    //     let counter = 0;
                    //     counter++;
                    //     alert(counter);
                    // }

                }
            }

        },
        // Funktion, die Eingaben Monat und Jahr in ein JsonObjekt umwandelt
        //todo: Umwandlung erfolgt erstmal nur per Klick
        goToAlert: function()
        {
            let eingaben = {};
            // let eingabenJson;
            let me = this;
            for (let v in me.eingaben) {
                eingaben[v] = me.eingaben[v].value;
            }
            //todo: Nur zum Test später entfernen
            console.log(JSON.stringify(eingaben));

            eingaben = {eingabenJson: JSON.stringify(eingaben)};

        }
    }

});