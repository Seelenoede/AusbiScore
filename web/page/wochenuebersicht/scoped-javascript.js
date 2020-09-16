new Vue({
    el:'#as_page_wochenuebersicht',
    data:
    {
        as_tabs:
        [
            {active:true, visible:false, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Wochenübersicht"}
        ],
        //todo:aus der DB holen
        score:"",
        eingaben:
            {
                monat:{value:"", error:""},
                jahr:{value:"", error:""}
            },
        auswahllisten:
            {
                //todo: aus der Datenbank holen
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
                //todo: aus der DB?
                jahr:[
                    {code:"2016", decode:"2016"},
                    {code:"2017", decode:"2017"},
                    {code:"2018", decode:"2018"},
                    {code:"2019", decode:"2019"},
                    {code:"2020", decode:"2020"},
                    {code:"2021", decode:"2021"}
                    ]
            },
        //todo: aus der Datenbank holen
            listWochen:
                [
                    {tagId:"1", datum:"14.09.2020", istVollstaendig: "1"},
                    {tagId:"2", datum:"15.09.2020", istVollstaendig: "0"},
                    {tagId:"3", datum:"16.09.2020", istVollstaendig: "1"},
                    {tagId:"4", datum:"17.09.2020", istVollstaendig: "0"},
                    {tagId:"5", datum:"18.09.2020", istVollstaendig: "1"},
                    {tagId:"6", datum:"19.09.2020", istVollstaendig: "1"},
                    {tagId:"7", datum:"20.09.2020", istVollstaendig: "0"},
                    {tagId:"8", datum:"21.09.2020", istVollstaendig: "0"},
                    {tagId:"9", datum:"22.09.2020", istVollstaendig: "0"},
                    {tagId:"10", datum:"31.09.2020", istVollstaendig: "1"},
                    {tagId:"11", datum:"24.09.2020", istVollstaendig: "1"},
                    {tagId:"12", datum:"25.09.2020", istVollstaendig: "1"},
                    {tagId:"13", datum:"26.09.2020", istVollstaendig: "1"},
                    {tagId:"14", datum:"27.09.2020", istVollstaendig: "1"},
                    {tagId:"15", datum:"28.09.2020", istVollstaendig: "1"},
                    {tagId:"16", datum:"29.09.2020", istVollstaendig: "1"},
                    {tagId:"17", datum:"30.09.2020", istVollstaendig: "1"},
                    {tagId:"18", datum:"01.10.2020", istVollstaendig: "1"},
                    {tagId:"19", datum:"02.10.2020", istVollstaendig: "1"},
                    {tagId:"20", datum:"03.10.2020", istVollstaendig: "1"},
                    {tagId:"21", datum:"04.10.2020", istVollstaendig: "1"}
                ]
    },
    computed:
    {

    },
    methods:
    {
        getWeek:function()
        {

        },
        currentDate:function()
        {
            let me = this;
            const heute = new Date();
            let month = "" + (heute.getMonth() + 1);
            let day = "" + heute.getDate();
            let year = "" + heute.getFullYear();
            let wochentag = "" + heute.getDay();

            if(wochentag === "3")
            {
                console.log("-");
                console.log("-");
                console.log("Es ist Mittwoch!!!!");
                console.log("-");
                console.log("-");
            }


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
                    // let zahlMonat = me.listWochen[i].datum.substring(me.listWochen[i].datum.indexOf('.'),4);
                    let stringTag = me.listWochen[i].datum.substring(0,2);
                    let stringMonat = me.listWochen[i].datum.substring(3,5);
                    let stringJahr = me.listWochen[i].datum.substring(6,10);
                    console.log(me.listWochen[i].datum);
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