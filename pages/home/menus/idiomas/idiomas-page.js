const observableModule = require("tns-core-modules/data/observable");
const httpModule = require("tns-core-modules/http");
const markdown = require("markdown").markdown;
const gist = {
    "nupel":"https://gist.githubusercontent.com/lucaargolo/6a1d103fa621966be51e5ae487da259c/raw/5f117590e30b339019a4f5c964d3a6d491b04b0f/Nupel.md",
    "profici":"https://gist.githubusercontent.com/lucaargolo/b7eb731601c487cffe3e9da8ed9c7500/raw/1fd487f958e7e9e022063573906bc0ce48886e9d/Profici.md"
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
