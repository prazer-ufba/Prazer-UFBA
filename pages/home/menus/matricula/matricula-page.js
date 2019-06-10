const observableModule = require("tns-core-modules/data/observable");
const httpModule = require("tns-core-modules/http");
const markdown = require("markdown").markdown;
const gist = {
    "web":"https://gist.githubusercontent.com/lucaargolo/2d808cae48eb7d33cd07524d56cae619/raw/6983715c2684392d617630e692c4e40ca9a0e5fc/Web.md",
    "presencial":"https://gist.githubusercontent.com/lucaargolo/6daf354537e4d650cf7452c16740b871/raw/14ac6c745c0a3e657bbaaa69b2d00d14e0fd44c3/Presencial.md",
    "lixao":"https://gist.githubusercontent.com/lucaargolo/622fc234e91e3ca415220dbefd988753/raw/b069489333b5dd3d4f14d14a91c3f4e813966423/Lixao.md"
}

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

function buttonTap(args) {
    const button = args.object;
    const page = button.page;

    httpModule.getString(gist[button.id]).then((r) => {
        finishButtonTap(r, button, page)
    }, (e) => {
        finishButtonTap("Erro ao tentar pegar as informações.", button, page)
    }); 
}

function finishButtonTap(content, button, page) {
    var table = {
        "title" : upperFirst(button.id), 
        "content" : markdown.toHTML(content)
    }
    const bc = observableModule.fromObject(table);

    page.frame.navigate({
        moduleName: "pages/generic-markdown",
        context: bc,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    })

}

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.buttonTap = buttonTap;
exports.backTap = backTap;

