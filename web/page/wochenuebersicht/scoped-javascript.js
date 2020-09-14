new Vue({
    el:'#as_page_wochenuebersicht',
    data:
    {
        as_tabs:
        [
            {active:true, visible:false, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Wochenübersicht"}
        ],
        monat:{value:"", error:""},
        jahr:{value:"", error:""},
        eintrag:{value:"", error:""},
        auswahllisten:
            {
                monat:[
                    {code:"1", decode:"Januar"},
                    {code:"2", decode:"Februar"},
                    {code:"3", decode:"März"},
                    {code:"4", decode:"April"},
                    {code:"5", decode:"Mai"},
                    {code:"6", decode:"Juni"},
                    {code:"7", decode:"Juli"},
                    {code:"8", decode:"August"},
                    {code:"9", decode:"September"},
                    {code:"10", decode:"Oktober"},
                    {code:"11", decode:"November"},
                    {code:"12", decode:"Dezember"}
                    ],
                jahr:[
                    {code:"10", decode:"2016"},
                    {code:"20", decode:"2017"},
                    {code:"30", decode:"2018"},
                    {code:"40", decode:"2019"},
                    {code:"50", decode:"2020"},
                    {code:"60", decode:"2021"}
                    ]
            }
    },
    computed:
    {

    },
    method:
    {

    }

});