new Vue({
    el:'#as_page_wocheneintrag',
    data:
    {
        as_tabs:
        [
            {active:true, visible:true, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Montag", hinweistext:"01.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab2", label:"Dienstag", hinweistext:"02.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab3", label:"Mittwoch", hinweistext:"03.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab4", label:"Donnerstag", hinweistext:"04.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab5", label:"Freitag", hinweistext:"05.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab6", label:"Samstag", hinweistext:"06.09.2020"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab7", label:"Sonntag", hinweistext:"07.09.2020"}
        ],
        eintraege: //Dummi Daten zum Testen
        [
            {
                besonderes:{value:"", error:""},
                lernfeld:{value:"LF1", error:""},
                stunden:{value:"1", error:""},
                eintrag:{value:"sdcsc wcwec wedw", error:""},
                isBearbeitet:true
            },
            {
                besonderes:{value:"adsasaxa", error:""},
                lernfeld:{value:"LF4", error:""},
                stunden:{value:"2+3", error:""},
                eintrag:{value:"wwwwwwwww wwwwwwwwww sss", error:""},
                isBearbeitet:false
            },
            {
                besonderes:{value:"", error:""},
                lernfeld:{value:"Wirtschaftslehre", error:""},
                stunden:{value:"4-6", error:""},
                eintrag:{value:"wecwc evwe   qwww", error:""},
                isBearbeitet:false}
        ],
        bericht:
            {
                gesamtstunden:{value:"",error:""}
            }
    },
    computed:
    {

    },
    methods:
    {
        initObj : function (v)
        {
            if(v) return {value:v, error:""};
            return {value:"", error:""};
        },
        createObjEintrag:function(obj)
        {
            return {
                besonderes:this.initObj(obj?obj.besonderes:""),
                lernfeld:this.initObj(obj?obj.lernfeld:""),
                stunden:this.initObj(obj?obj.stunden:""),
                eintrag:this.initObj(obj?obj.eintrag:""),
                action:obj?"":"10",
                isBearbeitet:!obj
            };
        },
        editEintrag:function (index)
        {
            this.eintraege[index].isBearbeitet=true;
            this.eintraege[index].action="20";
        },
        newEintrag:function(index)
        {
            this.eintraege.splice(index+1, 0, this.createObjEintrag() )
        },
        bearbeitenAbbrechen:function(index)
        {
            if (this.eintraege[index].action==="10") this.eintraege.splice(index,1);
            else this.eintraege[index].isBearbeitet=false
        },
        deleteEintrag:function()
        {

        },
        zurueck:function()
        {

        },
        saveEintrag:function () {
            // hier wird den Eintrag gespecihert
        }

    }

});