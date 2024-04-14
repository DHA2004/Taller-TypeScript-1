import { series } from './data.js';
import { Serie } from './Serie.js';
const seriesTbody: HTMLElement = document.getElementById('series')!; 

function renderSeriesInTable(series: Serie[], seriesTbody: HTMLElement): void {
  let totalSeasons: number = 0;
  series.forEach((s, index) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${index + 1}</td>
                           <td><a href="${s.link}" target="_blank">${s.name}</a></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    totalSeasons += s.seasons;
  });
  let averageSeasons = totalSeasons / series.length;
  let summaryElement = document.createElement("tr");
  summaryElement.innerHTML = `<td colspan="4">Seasons average: ${averageSeasons.toFixed()}</td>`;
  seriesTbody.appendChild(summaryElement);
}
renderSeriesInTable(series, seriesTbody);