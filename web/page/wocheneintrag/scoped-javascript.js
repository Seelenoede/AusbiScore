new Vue({
    el:'#as_page_wocheneintrag',
    data:
    {
        as_tabs:
        [
            {active:true, visible:true, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Montag"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab2", label:"Dienstag"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab3", label:"Mittwoch"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab4", label:"Donnerstag"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab5", label:"Freitag"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab6", label:"Samstag"},
            {active:false, visible:true, disabled:false, loaded:false, errorText:"", name:"tab7", label:"Sonntag"}
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
    },
    computed:
    {

    },
    methods:
    {
        editEintrag:function (index) {
            this.eintraege[index].isBearbeitet=true;
        },
        saveEintrag:function () {
            // hier wird den Eintrag gespecihert
        }

    }

});