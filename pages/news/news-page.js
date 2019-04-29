const httpModule = require("tns-core-modules/http");
const observableModule = require("tns-core-modules/data/observable");
const utilityModule = require("tns-core-modules/utils/utils");
const href = "https://www.ufba.br";
let page;
 
function onNavigatingTo(args) {
    page = args.object;
    let bc = { items:[{ title:"Carregando as noticias...", btnText:"Por favor aguarde"}] }
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
    httpModule.getString(href+"/noticias").then((r) => {
        let bc = { items:[] };
        let bci = 0;
        r.match(/<a href="\/ufba_em_pauta\/[\s\S]+?<\/li>/g).forEach((p) => {
            let res = p.match(/<a href="(\/ufba_em_pauta\/.+)">(.+)<\/a>+[\s\S]+?<span class="field-content">(.+)<\/span>[\s\S]+?(?:<p>(.+)<\/p>[\s\S]+?)*<\/div><\/li>/);
            if(res[4] && res[4].startsWith("<img")){
                res[4] = res[4].substring(res[4].indexOf("/>")+2);
            }
            bc.items[bci] = { link:res[1], title:res[2], date:res[3], desc:res[4], btnText:"Ler mais", btnType:"link" };
            bci++;
        });
        page.bindingContext = observableModule.fromObject(bc);
    }, (e) => {
        let bc = { items:[{ title:"Erro a carregar as noticias!", btnText:"Tentar de novo", btnType:"refresh"}] }
        page.bindingContext = observableModule.fromObject(bc);
    });
}

exports.onReadMoreTap = onReadMoreTap;
exports.onNavigatingTo = onNavigatingTo;
 