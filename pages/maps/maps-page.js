const frameModule = require("tns-core-modules/ui/frame");
const observableModule = require("tns-core-modules/data/observable");

function onNavigatingTo(args) {
    
}

function buttonTap(args) {
    let maps = {
        "mp_ondina":{
            "name":"Mapa Ondina",
            "file":"~/resources/mapaondina.png"
        },
        "mp_canela":{
            "name":"Mapa Canela",
            "file":"~/resources/mapacanela.png"
        }
    };

    const bindingContext = observableModule.fromObject(maps[args.object.id]);

    const featuredFrame = frameModule.getFrameById("maps");
    featuredFrame.navigate({
        moduleName: "pages/maps/open-map-page",
        context: bindingContext,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onNavigatingTo = onNavigatingTo;
exports.buttonTap = buttonTap;
