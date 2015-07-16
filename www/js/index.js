/*\
 Animate collapsible set;
 \*/
$(document).one("pagebeforechange", function() {
                
                // animation speed;
                var animationSpeed = 200;
                
                function animateCollapsibleSet(elm) {
                
                // can attach events only one time, otherwise we create infinity loop;
                elm.one("expand", function() {
                        
                        // hide the other collapsibles first;
                        $(this).parent().find(".ui-collapsible-content").not(".ui-collapsible-content-collapsed").trigger("collapse");
                        
                        // animate show on collapsible;
                        $(this).find(".ui-collapsible-content").slideDown(animationSpeed, function() {
                                                                          
                                                                          // trigger original event and attach the animation again;
                                                                          animateCollapsibleSet($(this).parent().trigger("expand"));
                                                                          });
                        
                        // we do our own call to the original event;
                        return false;
                        }).one("collapse", function() {
                               
                               // animate hide on collapsible;
                               $(this).find(".ui-collapsible-content").slideUp(animationSpeed, function() {
                                                                               
                                                                               // trigger original event;
                                                                               $(this).parent().trigger("collapse");
                                                                               });
                               
                               // we do our own call to the original event;
                               return false;
                               });
                }
                
                // init;
                animateCollapsibleSet($("[data-role='collapsible-set'] > [data-role='collapsible']"));
                });







var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();










