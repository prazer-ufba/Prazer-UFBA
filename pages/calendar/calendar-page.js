const Observable = require("data/observable").Observable;
const calendarModule = require("nativescript-ui-calendar");
const httpModule = require("tns-core-modules/http");
var pageData = new Observable();

function onNavigatingTo(args) {
    /*
    const link = "http://www.agenda.ufba.br/?post_type=tribe_events&ical=1&tribe_display=month"

    var ical = ""
    httpModule.request({
        url: link,
        method: "GET"
    }).then((response) => {
        ical = response.content.toString();
    }, (e) => {
    });

    console.log("aaaaaaaaaaa")
    console.log(ical2json.convert(ical))
    */

    var page = args.object;
    page.bindingContext = pageData;

    var eventTitles = ["Lunch with Steve", "Meeting with Jane", "Q1 Recap Meeting"];
    var events = [];

    var j = 1;
    for (var i = 0; i < eventTitles.length; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), j * 2, 12);
        var endDate = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3), 13);
        var event = new calendarModule.CalendarEvent(eventTitles[i], startDate, endDate);
        events.push(event);
        j++;
    }

    pageData.set("events", events);
}

exports.onNavigatingTo = onNavigatingTo