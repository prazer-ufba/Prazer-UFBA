const frameModule = require("tns-core-modules/ui/frame");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = args.context;
}

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}
exports.backTap = backTap;
exports.onNavigatingTo = onNavigatingTo;
