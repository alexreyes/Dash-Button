var dash_button = require("node-dash-button"),
    hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState,
    dash = dash_button(["74:75:48:46:f1:6a"]),
    hostname = "10.0.0.156",
    user = "WGKmrdm-V-0A-WrX15-1MXt7pwrZu7mziaajEU7C",
    api = new HueApi(hostname, user),
    on = false,
    state;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

// Make the hue thing
var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

var api = new HueApi(hostname, user),
    state = lightState.create();


dash.on("detected", function (dash_id) {
    console.log("Dash button " + dash_id + " was clicked!");

    if (!on) {
            // Set the lamp with id '1' to on
    api.setLightState(1, state.on())
        .then(displayResult)
        .fail(displayError)
        .done();
    }
    else {
        // Turn off the group of lights
        api.setGroupLightState(1, state.off())
            .then(displayResult)
            .done();
    }
    on = !on; 

});

