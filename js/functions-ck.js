// mYm Functions v 1.5 - brent@mimoymima.com
// last edited: Nov 27, 2011
// fix for ipad resizing content on orientation change by Jeremy Keith
// useful for making responsive sites, if your site isn't responsive you can remove this bit of code
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)){var viewportmeta=document.querySelector('meta[name="viewport"]');if(viewportmeta){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0";document.body.addEventListener("gesturestart",function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},!1)}}jQuery(document).ready(function(e){e(".toggle").addClass("make-link").addClass("header-hidden").click(function(){var t=e(this);if(t.is(".header-shown")){t.next().slideToggle("normal");t.removeClass("header-shown");t.addClass("header-hidden")}else{t.next().slideToggle("normal");t.removeClass("header-hidden");t.addClass("header-shown")}return!1});e(".popup").attr("target","_blank")});