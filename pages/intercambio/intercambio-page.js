const utilityModule = require("tns-core-modules/utils/utils");

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

function buttonTap(args) {
    const button = args.object;
    const page = button.page;
    if(button.url) {
        utilityModule.openUrl(button.url)
    }else if(button.goto) {
        page.frame.navigate({
            moduleName: button.goto,
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    }
}

exports.buttonTap = buttonTap;
exports.backTap = backTap;
