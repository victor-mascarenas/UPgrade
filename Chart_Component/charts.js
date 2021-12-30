const template = document.createElement('template');
template.innerHTML = `
    <div id="chart">

    </div>
`;

class Chart extends HTMLElement {
    constructor() {
        super();
        this.addShadow('open');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    addShadow (mode) {
        this.attachShadow({
            mode: mode
        });
    }
    async getData() {
        const data = await fetch(this.getAttribute('data-url'))
            .then((res) => res.json())
            .then((json) => {
                return json.filter((user) => user.address.geo.lng > 0);
            });
        this.loadChart(data);
    }
    loadChart(data) {
        if (this.getAttribute('type') == 'bar') {
            this.loadBarChart(data);
        } else {
            this.loadPieChart(data);
        }
    }
    loadBarChart(rawData) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => {
            const dataArray = [['User', 'Longitude']];
            rawData.forEach(user => {
                dataArray.push([user.name, parseInt(user.address.geo.lng)]);
            });
            var data = google.visualization.arrayToDataTable(dataArray);
            var options = {
                title: "User localization longitude",
                width: 600,
                height: 400,
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(this.shadowRoot.querySelector('#chart'));
            chart.draw(data, options);
        });
    }
    loadPieChart(rawData) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => {
            const dataArray = [['User', 'Longitude']];
            rawData.forEach(user => {
                dataArray.push([user.name, parseInt(user.address.geo.lng)]);
            });
            var data = google.visualization.arrayToDataTable(dataArray);
            var options = {
                title: 'User localization longitude'
            };
            var chart = new google.visualization.PieChart(this.shadowRoot.querySelector('#chart'));
            chart.draw(data, options);
        });
    }

    connectedCallback() {
        this.getData();
    }
}

window.customElements.define('user-chart', Chart);