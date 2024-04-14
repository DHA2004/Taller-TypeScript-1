import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
function renderSeriesInTable(series, seriesTbody) {
    var totalSeasons = 0;
    series.forEach(function (s, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(index + 1, "</td>\n                           <td><a href=\"").concat(s.link, "\" target=\"_blank\">").concat(s.name, "</a></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetails(s); });
        seriesTbody.appendChild(trElement);
        totalSeasons += s.seasons;
    });
    var averageSeasons = totalSeasons / series.length;
    var summaryElement = document.createElement("tr");
    summaryElement.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(averageSeasons.toFixed(), "</td>");
    seriesTbody.appendChild(summaryElement);
}
function showSeriesDetails(series) {
    document.getElementById('seriesDetails').style.display = 'block';
    document.getElementById('seriesImage').setAttribute('src', series.image);
    document.getElementById('seriesName').textContent = series.name;
    document.getElementById('seriesDescription').textContent = series.description;
    document.getElementById('seriesLink').setAttribute('href', series.link);
}
renderSeriesInTable(series, seriesTbody);
