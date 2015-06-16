 
/* Cross domain ajax call by using Javascript without jquery */

/* Option 1 */

var ajaxRequest = {
 
   currentScript: null,
 
   getJSON: function(url, data, callback) {
       cookie = $.apnCookie("gset");
       if ((!cookie) || (cookie.indexOf("ss=0") === -1)) {
           requestStartTime = new Date().getTime();
           var src = url + (url.indexOf("?") + 1 ? "&" : "?");
           var head = document.getElementsByTagName("head")[0];
           var newScript = document.createElement("script");
           var params = [];
           var param_name = "";
 
           this.success = callback;
 
           data["callback"] = "AjaxRequest.success";
           for (param_name in data) {
               params.push(param_name + "=" + encodeURIComponent(data[param_name]));
           }
           src += params.join("&");
 
           newScript.type = "text/javascript";
           newScript.src = src;
 
           if (this.currentScript) head.removeChild(currentScript);
           head.appendChild(newScript);
       }
   },
 
   success: null
};

/* Call AjaxRequest */

url =  "http://domain/whatever.jsonp";
var data = {};
var callback = function(data){
//write callback logic if required
};
ajaxRequest.getJSON(ssurl, data, callback);




/* Option 2 */
/* Alternative Cross domain ajax call by using Javascript without jquery */

Utils.ajax = function (url) {
   var img = document.getElementById("imgReporting");
   if (!img) {
       img = document.createElement("img");
       img.src = url;
       img.height = "1";
       img.setAttribute("style", "visibility: hidden");
       document.getElementsByTagName("body")[0].appendChild(img);
   }
   else {
       img.setAttribute("src", url)
   }
};
