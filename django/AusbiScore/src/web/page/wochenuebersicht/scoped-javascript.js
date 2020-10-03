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
//                    {code:"01", decode:"Januar"},
//                    {code:"02", decode:"Februar"},
//                    {code:"03", decode:"März"},
//                    {code:"04", decode:"April"},
//                    {code:"05", decode:"Mai"},
//                    {code:"06", decode:"Juni"},
//                    {code:"07", decode:"Juli"},
//                    {code:"08", decode:"August"},
//                    {code:"09", decode:"September"},
//                    {code:"10", decode:"Oktober"},
//                    {code:"11", decode:"November"},
//                    {code:"12", decode:"Dezember"}

                   {% for data in monat %}
                       {code: "{{data}}", decode: "{{data}}"},
                   {% endfor %}

                    ],
                //todo: aus der DB?
                jahr:[
//                    {code:"2016", decode:"2016"},
//                    {code:"2017", decode:"2017"},
//                    {code:"2018", decode:"2018"},
//                    {code:"2019", decode:"2019"},
//                    {code:"2020", decode:"2020"},
//                    {code:"2021", decode:"2021"}

                       {% for data in jahr %}
                           {code: "{{data}}", decode: "{{data}}"},
                       {% endfor %}
                    ]
            },


            listTage:
                 //{tagId:"1", datum:"2020-09-14", istVollstaendig: "1"},
                [
                {% for data in bericht_data %}
                    {tagId: "{{data.0}}", datum: "{{data.1}}", istVollstaendig: "{{data.2}}"},
                {% endfor %}
                ],
            listWochen: []
    },
    mounted:function()
    {
        this.getWeek();
    },
    computed:
    {

    },
    methods:
    {
        //Funktion zur Umwandlung der Datumswerte aus der DB in date zur weiteren Verarbeitung
        toDate:function(stringDate)
        {
            let me = this;
            let date1=(stringDate).split("-");
            //JavaScript zählt Monate von 0 bis 11, daher date1[1]-1
            let dateTime1= new Date(parseInt(date1[0]),parseInt(date1[1]-1),parseInt(date1[2]));

            return dateTime1;
        },
        //Funktion zur Umwandlung eines Datumswertes im Type date in das Format tt.mm.yyyy
        toGermanDateFormate:function(date)
        {
            let month = "" + (date.getMonth() + 1);
            let day = "" + date.getDate();
            let year = "" + date.getFullYear();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            let dateFormate = [day, month, year].join(".");
            return dateFormate;
        },
        //Funktion zur Erstellung eines Arrays mit der Spannweite einer Woche
        getWeek:function()
        {
            let me = this;
            let wochentag;
            let wochenstart;
            let wochenende;
            let woche;

            console.log("THIS PART IS APPEARING");
            console.log(me);

            for(let i = 0; i < me.listTage.length; i++)
            {

                let istVollstaendigWoche = "0";
                //der Datumsstring aus der Datenbank wird in den Datentyp Date konvertiert und in einen Wochentag umgewandelt
                //Sonntag = 0, Montag = 1, Dienstag = 2, Mittwoch = 3, Donnerstag = 4, Freitag = 5, Samstag = 6
                let current_day = me.toDate(me.listTage[i].datum);
                wochentag = current_day.getDay();

                //hier wird geprüft, ob der Tag ein Montag ist
                if(wochentag === 1)
                {
                    console.log("there is a monday");
                    woche = {};
                    wochenstart = me.toGermanDateFormate(current_day);
                    //Prüfung des Tages auf Vollständigkeit
                    if(me.listTage[i].istVollstaendig === "1")
                    {
                        for(let j = i+1; j <= i+6; j++)
                        {
                            if(me.listTage[j].istVollstaendig === "0")
                            {
                                istVollstaendigWoche = "0";
                                break;
                            }
                            else
                            {
                                istVollstaendigWoche = "1";
                            }
                        }
                    }
                    //todo:entscjeiden, ob diese Überprüfung notwendig ist
                    // if((i+6) < me.listTage.length)
                    // {
                    //     wochenende = me.toGermanDateFormate(me.toDate(me.listTage[i+6].datum));
                    // }
                    // else
                    // {
                    //     i = i + 6;
                    //     wochenende = me.toGermanDateFormate(me.toDate(me.listTage[i].datum));
                    // }
                    //ToDo: FixMe: only works with full weeks in backend!!!
                    i = i + 6;

                    console.log("debug: THIS PART IS NOT APPEARING YET");
                    wochenende = me.toGermanDateFormate(me.toDate(me.listTage[i].datum));
                    console.log("wochenende dump: " + wochenende);

                    woche = {"wochenstart":"" + wochenstart, "wochenende":"" + wochenende, "istVollstaendig":"" + istVollstaendigWoche};
                    me.listWochen.push(woche);
                }
                else {
                console.log("There is not monday");
                }
            }
        },
        currentDate:function()
        {
            let me = this;
            const heute = new Date();
            return me.toGermanDateFormate(heute);
        },
        //todo:Funktion zum suchen nach den passenden Wochen (Monat / Jahr) in der DB
        sucheTage:function()
        {
            let me = this;
            if(me.eingaben.monat.value === "")
            {

            }
            else
            {
                for(let i = me.listTage.length-1; i >= 0; i--)
                {
                    // let zahlMonat = me.listTage[i].datum.substring(me.listTage[i].datum.indexOf('.'),4);
                    let stringTag = me.listTage[i].datum.substring(0,2);
                    let stringMonat = me.listTage[i].datum.substring(3,5);
                    let stringJahr = me.listTage[i].datum.substring(6,10);
                    console.log(me.listTage[i].datum);
                    console.log(stringTag);
                    console.log(stringMonat);
                    console.log(stringJahr);
                    // if(stringMonat === me.eingaben.monat.value)
                    //     console.log(stringMonat + " '!==' " + me.eingaben.monat.value + " '=' " + stringMonat !== me.eingaben.monat.value);

                    if(stringMonat !== me.eingaben.monat.value || stringJahr !== me.eingaben.jahr.value)
                        me.listTage.splice(i,1);
                    // {
                    //     let counter = 0;
                    //     counter++;
                    //     alert(counter);
                    // }

                }
            }

        },
        // Funktion, die Eingaben "Monat" und "Jahr" in ein JsonObjekt umwandelt
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
