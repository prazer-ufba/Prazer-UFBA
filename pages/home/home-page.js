const frameModule = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    
}

function onItemTap(args) {
    var pages = {
        matricula:"pages/home/menus/matricula/matricula-page",
        buzufba:"pages/home/menus/buzufba/buzufba-page",
        ru:"pages/home/menus/ru/ru-page",
        transferencia:"pages/home/menus/transferencia/transferencia-page",
        idiomas:"pages/home/menus/idiomas/idiomas-page",
        utilidades:"pages/home/menus/utilidades/utilidades-page"

    }
    var selectedPage = pages[args.object.id];

    const featuredFrame = frameModule.getFrameById("home");
    featuredFrame.navigate({
        moduleName: selectedPage,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
