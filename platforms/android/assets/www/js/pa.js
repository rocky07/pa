function initPushwoosh()
{
    var pushNotification = window.plugins.pushNotification;
 
    //set push notifications handler
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
        var userData = event.notification.userdata;
                                 
        if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
        }
                                     
        alert("title:"+title);
    });
 
    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({ projectid: "193549999843", appid : "F62A6-7D0A9" });
 alert("deviceready");
    //register for pushes
    pushNotification.registerDevice(
        function(status) {
alert("push token"+pushToken);
            var pushToken = status;
            console.warn('push token: ' + pushToken);
        },
        function(status) {
alert(JSON.stringify(['failed to register ', status]));
            console.warn(JSON.stringify(['failed to register ', status]));
        }
    );
}

function init() {
    document.addEventListener("deviceready", initPushwoosh, true);
 
    //rest of the code
}



document.addEventListener('push-notification', function(event) {
    var title = event.notification.title;
    var userData = event.notification.userdata;
 
    console.warn('user data: ' + JSON.stringify(userData));
    alert(title);
});


