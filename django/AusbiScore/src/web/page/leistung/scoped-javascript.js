new Vue({
    el:'#as_page_leistung',
    data:
    {
        as_tabs:
        [
            {active:true, visible:false, disabled:false, loaded:false, errorText:"", name:"tab1", label:"Leistungsübersicht"}
        ],
        auswahllisten:
        {
            motivation:
                [
                    {code:"1",decode:"niedrig"},
                    {code:"2",decode:"mittel"},
                    {code:"3",decode:"hoch"}
                ],
            verstaendnis: [
                {code:"1",decode:"Rating 1-2"},
                {code:"2",decode:"Rating 3-4"},
                {code:"3",decode:"Rating 5-6"}
            ],
            verbessert: [
                {code:"1",decode:"ja"},
                {code:"2",decode:"gleich"},
                {code:"3",decode:"nein"}
            ],
            eigeninitiative: [
                {code:"1",decode:"sehr viel"},
                {code:"3",decode:"viel"},
                {code:"3",decode:"gar nicht"}
            ]
        },
        eingaben:
        {
            motivation:{value:"", error:""},
            verstaendnis:{value:"", error:""},
            verbessert:{value:"", error:""},
            eigeninitiative:{value:"", error:""},
        }
    },
    mounted:function()
    {},
    computed:
    {},
    methods:
    {
        speichern:function () {
            // hier wird den Eintrag gespecihert
        }
    }

});
