function backTap(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

const httpModule = require("tns-core-modules/http");
const observableModule = require("tns-core-modules/data/observable");
const utilityModule = require("tns-core-modules/utils/utils");
const href = "https://partiuintercambio.org/resultado-da-busca";
let page;
 
function onNavigatingTo(args) {
    page = args.object;
    let bc = { items:[{ title:"Carregando as oportunidades de intercâmbio...", btnText:"Por favor aguarde"}] }
    page.bindingContext = observableModule.fromObject(bc);
    loadNews();
}

function onReadMoreTap(args) {
    switch(args.object.type){
        case "link":
            utilityModule.openUrl(href+args.object.href);
            break;
        case "refresh":
            loadNews();
            break;
        default:
            break;
    }

}


function loadNews() {
    httpModule.getString(href+"/?situacao=abertos").then((r) => {
        let bc = { items:[] };
        let bci = 0;
        r.match(/<article>+[\s\S]+?<\/article>/g).forEach((p) => {
            let res = p.match(/<a href="(https:\/\/partiuintercambio.org\/bolsas-de-estudo+[\s\S]+?)"> +(.+?)<\/a><\/h2><h4> <span class="label label-success">+(.+?)<\/span> <small><a.+?">(.+?)<\/a>.+<small><a.+?">(.+?)<\/a>.+<p>(.+)<\/p>/);
            bc.items[bci] = { link:res[1], title:res[2], deadline:res[3], info:res[4]+" • "+res[5], desc:res[6], btnText:"Ler mais", btnType:"link" };
            bci++;
        });
        page.bindingContext = observableModule.fromObject(bc);
    }, (e) => {
        let bc = { items:[{ title:"Erro a carregar as oportunidades de intercâmbio!", btnText:"Tentar de novo", btnType:"refresh"}] }
        page.bindingContext = observableModule.fromObject(bc);
    });
}

exports.onReadMoreTap = onReadMoreTap;
exports.onNavigatingTo = onNavigatingTo;
exports.backTap = backTap;
