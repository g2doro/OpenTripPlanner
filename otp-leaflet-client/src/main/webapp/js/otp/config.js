// make sure we have otp.config and otp.config.locale defined
if(typeof(otp) == "undefined" || otp == null) otp = {};
if(typeof(otp.config) == "undefined" || otp.config == null) otp.config = {};
//if(typeof(otp.config.locale) == "undefined" || otp.config.locale == null) otp.config.locale = otp.locale.English;


otp.config = {
    debug: false,

    /**
     * The OTP web service locations
     */
    hostname : "http://philly-opentrips.jarv.us:8080",
    restService: "otp-rest-servlet",
    //municoderHostname : "http://localhost:8080",
    //datastoreUrl : 'http://localhost:9000',


    /**
     * Base layers: the base map tile layers available for use by all modules.
     * Expressed as an array of objects, where each object has the following 
     * fields:
     *   - name: <string> a unique name for this layer, used for both display
     *       and internal reference purposes
     *   - tileUrl: <string> the map tile service address (typically of the
     *       format 'http://{s}.yourdomain.com/.../{z}/{x}/{y}.png')
     *   - attribution: <string> the attribution text for the map tile data
     *   - [subdomains]: <array of strings> a list of tileUrl subdomains, if
     *       applicable
     *       
     */
     
    baseLayers: [
        {
            name: 'MapQuest OSM',
            tileUrl: 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
            subdomains : ['otile1','otile2','otile3','otile4'],
            attribution : 'Data, imagery and map information provided by <a href="http://open.mapquest.com" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors.'
        },
        {
            name: 'MapQuest Aerial',
            tileUrl: 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',
            subdomains : ['otile1','otile2','otile3','otile4'],
            attribution : 'Data, imagery and map information provided by <a href="http://open.mapquest.com" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors.'
        },           
    ],
    

    /**
     * Map start location and zoom settings: by default, the client uses the
     * OTP metadata API call to center and zoom the map. The following
     * properties, when set, override that behavioir.
     */
     
    initLatLng : new L.LatLng(39.952648,-75.164007),
    initZoom : 10,
    minZoom : 1,
    maxZoom : 20,
    
    /* Whether the map should be moved to contain the full itinerary when a result is received. */
    zoomToFitResults    : false,

    /**
     * Site name / description / branding display options
     */

    siteName            : "OTP NorthEast",
    siteDescription     : "An OpenTripPlanner deployment for Philly, NJ, NYC, and DE.",
    logoGraphic         : 'images/otp_logo_darkbg_40px.png',
    // bikeshareName    : "",

    showLogo            : true,
    showTitle           : true,
    showModuleSelector  : true,
    metric              : true,


    /**
     * Modules: a list of the client modules to be loaded at startup. Expressed
     * as an array of objects, where each object has the following fields:
     *   - id: <string> a unique identifier for this module
     *   - className: <string> the name of the main class for this module; class
     *       must extend otp.modules.Module
     *   - [defaultBaseLayer] : <string> the name of the map tile base layer to
     *       used by default for this module
     *   - [isDefault]: <boolean> whether this module is shown by default;
     *       should only be 'true' for one module
     */
    
    modules : [
        {
            id : 'planner',
            className : 'otp.modules.multimodal.MultimodalPlannerModule',
            defaultBaseLayer : 'MapQuest OSM',
            isDefault: true
        },
        {
            id : 'analyst',
            className : 'otp.modules.analyst.AnalystModule',
        }
    ],
    
    
    /**
     * Geocoders: a list of supported geocoding services available for use in
     * address resolution. Expressed as an array of objects, where each object
     * has the following fields:
     *   - name: <string> the name of the service to be displayed to the user
     *   - className: <string> the name of the class that implements this service
     *   - url: <string> the location of the service's API endpoint
     *   - addressParam: <string> the name of the API parameter used to pass in
     *       the user-specifed address string
     */

    geocoders : [
    	{
	  name: 'geocoder',
	  className: 'otp.core.Geocoder',
	  url: '/otp-geocoder/geocode',
	  addressParam: 'address'
	}
    ],

    
    /**
     * Info Widgets: a list of the non-module-specific "information widgets"
     * that can be accessed from the top bar of the client display. Expressed as
     * an array of objects, where each object has the following fields:
     *   - content: <string> the HTML content of the widget
     *   - [title]: <string> the title of the widget
     *   - [cssClass]: <string> the name of a CSS class to apply to the widget.
     *        If not specified, the default styling is used.
     */


    infoWidgets: [
        {
            title: 'About',
            content: '<p>This site can plan trips using public transit, bicycling, or walking in Philadelphia, New Jersey, New York City, and Delaware.  This site is under development; use at your own risk.</p><p>It uses data for the transit agencies:  SEPTA, NJ TRANSIT, PATCO, PATH, MTA (New York City), and Delaware First State.</p>',
            //cssClass: 'otp-contactWidget',
        },
        {
            title: 'Contact',
            content: '<p>Comments? Contact us at codeforphilly.org, or visit our <a href="http://codeforphilly.org/projects/otp">project page</a>.</p>'
        },           
    ],
    
    
    /**
     * Support for the "AddThis" display for sharing to social media sites, etc.
     */
     
    showAddThis     : false,
    //addThisPubId    : 'your-addthis-id',
    //addThisTitle    : 'Your title for AddThis sharing messages',


    /**
     * Formats to use for date and time displays, expressed as ISO-8601 strings.
     */    
     
    timeFormat  : "h:mma",
    dateFormat  : "MMM Do YYYY"
};

