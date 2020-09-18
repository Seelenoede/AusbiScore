Vue.component('as-tabs', {
    props:
        {
            as_tabs:[],
            tabs: Array,
            title: String,
            hidden: Boolean
        },
    computed:
        {
            visibleTabs:function()
            {
                return this.tabs.filter(function(tab) { return tab.visible; });
            },
            as_activeTab: function ()
            {
                for(let i in this.tabs)
                    if(this.tabs[i].active)
                        return this.tabs[i];
                return this.as_createTabObject();
            },
            as_activeTabName: function ()
            {
                for(let i in this.tabs)
                {
                    if(this.tabs[i].active) return this.tabs[i].name;
                }
            }
        },
    methods:
        {
            getTabClasses:function(tab)
            {
                let classes = ['as_tab'];
                if(tab.active) classes.push("as_active");
                return classes;
            },
            as_createTabObject:function(t_name, t_label)
            {
                return {active:false, disable:false, loaded:false, visible:true, errorText:"",	name:t_name?t_name:"", label:t_label?t_label:""}
            },
            as_goToTab:function(myTab)
            {
                let currentTab=this.as_activeTab;
                currentTab.active=false;
                currentTab.loaded=false;
                myTab.disabled=false;
                myTab.active=true;
                myTab.loaded=false;
            },
            as_onChangeTabLoaded:function(tab)
            {
                this.as_goToTab(tab);
                tab.loaded=true;
            },
            as_tab_click:function (tab)
            {
                this.as_onChangeTabLoaded(tab);
            }
        },
    template: '' +
        '<div class="as_tabs">' +
            '<div class="as_tabBar" :style="hidden?\'display:none\':\'\'">' +
                '<div v-for="tab in visibleTabs" v-bind:class="getTabClasses(tab)">' +
                    '<a v-if="!tab.disabled" href="javascript:;" v-on:click="as_tab_click(tab)">' +
                        '{{tab.label}}' +
                    '</a>' +
                    '<span v-else>{{tab.label}}</span>' +
                    '<div class="as_tab_hinweis" v-if="tab.active">{{tab.hinweistext}}</div>' +
                '</div>' +
            '</div>' +
            '<div class="as_tabContent">' +
                '<div v-if="as_activeTab.errorText!=\'\'" class="ui_error">{{as_activeTab.errorText}}</div>' +
                // '<img v-if="!as_activeTab.loaded" src="§{images.path}/framework/loading.gif"/>' +
                '<slot v-else></slot>' +
            '</div>' +
        '</div>'
});