import { series } from './data.js';
var seriesTbody = document.getElementById('series');
function renderSeriesInTable(series, seriesTbody) {
    var totalSeasons = 0;
    series.forEach(function (s, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                           <td><a href=\"").concat(s.link, "\" target=\"_blank\">").concat(s.name, "</a></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        totalSeasons += s.seasons;
    });
    var averageSeasons = totalSeasons / series.length;
    var summaryElement = document.createElement("tr");
    summaryElement.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(averageSeasons.toFixed(), "</td>");
    seriesTbody.appendChild(summaryElement);
}
renderSeriesInTable(series, seriesTbody);
