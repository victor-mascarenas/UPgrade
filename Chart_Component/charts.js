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
        await fetch(this.getAttribute('data-url'))
            .then((res) => res.json())
            .then((data) => this.load(data))
            .catch((error) => {
                console.log(`Error: ${error.message}`);
            });
    }
    async load(fetchedData) {
        const title = this.getAttribute('title');
        const fields = this.getAttribute('fields').split(',');
        const dataArray = [fields];
        await fetchedData.data.forEach(element => {
            let dataFieldArray = [];
            fields.forEach((field) => dataFieldArray.push(element[field]));
            dataArray.push(dataFieldArray);
        });
        if (this.getAttribute('type') == 'bar') {
            this.loadBarChart(title, dataArray);
        } else {
            this.loadPieChart(title, dataArray);
        }
    }
    loadBarChart(title, dataArray) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => {
            var data = google.visualization.arrayToDataTable(dataArray);
            var options = {
                title: title,
                width: 600,
                height: 400,
                bar: { groupWidth: "80%" },
                legend: { position: "none" },
            };
            var chart = new google.visualization.ColumnChart(this.shadowRoot.querySelector('#chart'));
            chart.draw(data, options);
        });
    }
    loadPieChart(title, dataArray) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => {
            var data = google.visualization.arrayToDataTable(dataArray);
            var options = {
                title: title
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