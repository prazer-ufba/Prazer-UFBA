const observableModule = require("tns-core-modules/data/observable");
const httpModule = require("tns-core-modules/http");
const markdown = require("markdown").markdown;
const link = "https://gist.githubusercontent.com/lucaargolo/29aa66e403cf1054f6db0db005a76a3c/raw/8099714ac6adecf01276bbbd4b023aa798e56fce/Banheiros%2520&%2520Xerox.md"

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}
function buttonTap(args) {
    const button = args.object;
    const page = button.page;
    switch(button.id) {
        case "maps":
            page.frame.navigate({
                moduleName: "pages/home/menus/utilidades/maps-page",
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            })
            break
        case "xerox":
            var content = ""
            httpModule.getString(link).then((r) => {
                xeroxFinish(r, page)
            }, (e) => {
                xeroxFinish("Erro ao tentar pegar as informações.", page)
            }); 
            break
    }
}

function xeroxFinish(content, page) {
    var table = {
        "title":"Xerox & Banheiros",
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
