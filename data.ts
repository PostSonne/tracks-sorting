const osmosis = require("osmosis");
const fs = require("fs");
let savedData = [];
osmosis
    .get("https://www.last.fm/ru/user/Madam_Kaplan/library/tracks")
    .paginate(".pagination ul > li a[href]", 1)
    .find("#top-tracks-section")
    .set({
        "Track":
            [
                {
                    Index: "table tbody .chartlist-index",
                    Image: "table tbody .chartlist-image a[href] img[src]",
                    IsLoved: "table tbody .chartlist-loved span",
                    TrackName: "table tbody .chartlist-name a",
                    Artist: "table tbody .chartlist-artist a",
                    ListeningCounter: "table tbody .chartlist-bar .chartlist-count-bar .chartlist-count-bar-value",
                }
            ]
    })
    .log(console.log)
    .data((data) => {
        console.log(data);
        savedData.push(data);
    })
    .done(function() {
        fs.writeFile("data.json", JSON.stringify( savedData, null, 2), function(err) {
            if(err) console.error(err);
            else console.log("Data Saved Successfully");
        })
    });