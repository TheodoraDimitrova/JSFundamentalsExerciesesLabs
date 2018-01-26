function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    let date = new Date(year, month - 1, day);
    let dates = getDateToExport(date);
    let html = '';
    html += `<table>\n`;
    let headers = 'Sun Mon Tue Wed Thu Fri Sat'.split(' ');
    html += `<tr>`;
    for (let h of headers) {
        html += `<th>${h}</th>`;
    }
    html += `</tr>\n`;
    for (let day of dates) {
        if (day.getDay() === 0) {
            html += '<tr>';
        }
        if (day.getMonth() < date.getMonth() && day.getYear() <= date.getYear()) {
            html += `<td class="prev-month">${day.getDate()}</td>`;
        } else if (day.getMonth() > date.getMonth() || day.getYear() > date.getYear()) {
            html += `<td class="next-month">${day.getDate()}</td>`;
        } else if (day.getDate() === date.getDate()) {
            html += `<td class="today">${day.getDate()}</td>`;
        }
        else {
            html += `<td>${day.getDate()}</td>`;
        }

        if (day.getDay() === 6) {
            html += `</tr>\n`;
        }

    }
    html += `</table>`;

    console.log(html.trim());



    function getDateToExport(date) {
        let dates = [];
        let firstDate = new Date(date.getFullYear(),date.getMonth(),0);
        firstDate.setDate(firstDate.getDate() - firstDate.getDay()%6);

        let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        lastDate.setDate(lastDate.getDate() + (6 - lastDate.getDay()));
        let timeDiff = Math.abs(lastDate.getTime() - firstDate.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        dates.push(new Date(firstDate));
        for (let i = 1; i <= diffDays; i++) {

            dates.push(addDays(firstDate, i));
        }
        return dates;

    }

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
}
calendar(12 ,3 ,2014);