function escaping(input) {
    let html = "<ul>\n";

    for (let line of input) {
        html += "  <li>";
        line = line.replace(/&/g, "&amp;");
        line = line.replace(/</g, "&lt;");
        line = line.replace(/>/g, "&gt;");
        line = line.replace(/"/g, "&quot;");
        html += line + "</li>\n";
    }

    html += "</ul>";

    return html;
}
console.log(escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));