const observableModule = require("tns-core-modules/data/observable");
const httpModule = require("tns-core-modules/http");
const markdown = require("markdown").markdown;
const link = "https://gist.githubusercontent.com/lucaargolo/defd6d859efa76b813e8321f4a61812e/raw/8fa2161039ed0dd1263930439380efe18cdf746f/Transfencia.md"

function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

function onNavigatingTo(args) {

    httpModule.getString(link).then((r) => {
        setBindingContext(r, args.object)
    }, (e) => {
        setBindingContext("Erro ao tentar pegar as informações.", args.object)
    }); 

}

function setBindingContext(content, page) {
    var table = {
        "content" : markdown.toHTML(content)
    }
    const bc = observableModule.fromObject(table);
    page.bindingContext = bc
}

exports.backTap = backTap;
exports.onNavigatingTo = onNavigatingTo;

