prdc.App = Ext.extend(Ext.TabPanel, {
    
    fullscreen: true,

    cardSwitchAnimation: false,

	initComponent: function() {
	       var sessions, speakers, tweets, locations, about;
	        
           sessions = new Ext.Component({
               
                title: 'Sessions',
                scroll: 'vertical',
                tpl: [
                '<tpl for=".">',
                    '<div class="session">',
                        '<div class="session-title">',
                            '<h2>{title}</h2>',
                        '</div>',
                        '<p class="session_description">{description}</p>',
                    '</div>',
                '</tpl>'
                ]
            });
            
            speakers = new Ext.Component({
                title: 'Speakers'
            });
            
            tweets = new Ext.Component({
                title: 'Tweets'
            });
            
            locations = new Ext.Component({
                title: 'Location'
            });
            
            about = new Ext.Component({
                title: 'About'
            });
            
            this.items = [sessions, speakers, tweets, locations, about];
            
            refresh = function() {
                var session1 = {
                    title: "Dummy session 1",
                    description: "A session used to demostrate the scencha framework"
                };
                
                var session2 = {
                    title: "Dummy session 1",
                    description: "A session used to demostrate the scencha framework"
                };
                
                Ext.util.JSONP.request({
                    url: 'http://prairiedevcon.com/Sessions.json',
                    callbackKey: 'callback',
                    params: {
                        
                    },
                    callback: function(data){
                        var rlt = data.results;
                        alert(rlt);
                      sessions.update(rlt);  
                    }
                });               
        };
        
        refresh();    
	   	prdc.cfg = {};
		prdc.cfg.shortUrl = this.shortUrl;
		prdc.cfg.title = this.title;
		
		prdc.App.superclass.initComponent.call(this);
	},
    

});
