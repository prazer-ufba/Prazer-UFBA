const observableModule = require("tns-core-modules/data/observable");
const utilityModule = require("tns-core-modules/utils/utils");
const httpModule = require("tns-core-modules/http");
const markdown = require("markdown").markdown;
const infoLink = "https://gist.githubusercontent.com/lucaargolo/c88642e49f68a811d4355be17180a584/raw/e222219815a4595c32636c42284b4b9337eb3f61/BuzUFBA.md"
const horaLink = "https://proad.ufba.br/sites/proad.ufba.br/files/buzufba_-_roteiro_e_horarios_0.pdf"

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

function buttonTap(args) {
    const button = args.object;
    const page = button.page;
    switch(button.id) {
        case "info":
            var content = ""
            httpModule.getString(infoLink).then((r) => {
                infoFinish(r, page)
            }, (e) => {
                infoFinish("Erro ao tentar pegar as informações.", page)
            }); 
            break
        case "hora":
            utilityModule.openUrl(horaLink)
    }
}

function infoFinish(content, page) {
    var table = {
        "title":"Informações BuzUFBA",
        "content" : markdown.toHTML(content)
    }
    var bc = observableModule.fromObject(table);
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

exports.buttonTap = buttonTap;
exports.backTap = backTap;
