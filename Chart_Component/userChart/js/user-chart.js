import APIData from "./APIData.js";

class Chart extends HTMLElement {
    #apiData;

    constructor() {
        super();
        this.#apiData = new APIData();
        this.addShadow('open');
        this.init();
    }

    async init() {
        const templateContent = await this.getTemplate();
        this.loadTemplate(templateContent);
        this.shadowRoot.querySelector('#reload').addEventListener('click', this.graph.bind(this));
        this.graph();
    }
    getTemplate() {
        return fetch('userChart/template.html')
            .then((res) => res.text())
            .catch((error) => {
                console.log(`Error: ${error.message}`);
            });
    }
    loadTemplate(templateContent) {
        const template = document.createElement('template');
        template.innerHTML = templateContent;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    async graph() {
        const data = await this.#apiData.getData(this.getAttribute('data-url'));
        this.load(data);
    }
    addShadow (mode) {
        this.attachShadow({
            mode: mode
        });
    }
    async load(fetchedData) {
        const title = this.getAttribute('title');
        const dataArray = await this.prepareData(fetchedData);
        const onLoadCallback = this.getAttribute('type') === 'bar' ? this.loadBarChart : this.loadPieChart;
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(onLoadCallback.bind(this, title, dataArray));
    }
    async prepareData(fetchedData) {
        const fields = this.getAttribute('fields').split(',');
        const dataArray = [fields];
        await fetchedData.data.forEach(element => {
            let dataFieldArray = [];
            fields.forEach((field) => dataFieldArray.push(element[field]));
            dataArray.push(dataFieldArray);
        });
        return dataArray;
    }
    loadBarChart(title, dataArray) {
        var data = google.visualization.arrayToDataTable(dataArray);
        var options = {
            title: title,
            width: 'auto',
            height: 'auto',
            bar: { groupWidth: "80%" },
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(this.shadowRoot.querySelector('#chart'));
        chart.draw(data, options);
    }
    loadPieChart(title, dataArray) {
        var data = google.visualization.arrayToDataTable(dataArray);
        var options = {
            title: title,
            width: 'auto',
            height: 'auto'
        };
        var chart = new google.visualization.PieChart(this.shadowRoot.querySelector('#chart'));
        chart.draw(data, options);
    }

    connectedCallback() {
        
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#reload').removeEventListener();
    }
}

window.customElements.define('user-chart', Chart);