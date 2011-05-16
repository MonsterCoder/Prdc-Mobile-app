prdc.App = Ext.extend(Ext.TabPanel, {
    
    fullscreen: true,

    
    cardSwitchAnimation: false,
    

	initComponent: function() {
	
	        sessions = {
               
                title: 'Sessions',
                tpl: [
                    '<div class="session">',
                        '<div class="session-title">',
                            '<h2>{title}</h2>',
                        '</div>',
                        '<p class="session_description">{description}</p>',
                    '</div>'
                ]
            };
            
            speakers = {
                title: 'Speakers'
            };
            
            tweets = {
                title: 'Tweets'
            };
            
            locations = {
                title: 'Location'
            };
            
            about = {
                title: 'About'
            };
            
            this.items = [sessions, speakers, tweets, locations, about];
  
	   	prdc.cfg = {};
		prdc.cfg.shortUrl = this.shortUrl;
		prdc.cfg.title = this.title;
		
		prdc.App.superclass.initComponent.call(this);
	}

});
