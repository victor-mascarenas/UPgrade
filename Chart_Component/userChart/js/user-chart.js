import APIData from "./APIData.js";

class Chart extends HTMLElement {
    #apiData;
    #chartOptions;
    #chartData;
    #chart;
    #readyToDraw;

    constructor() {
        super();
        this.#readyToDraw = false;
        this.#apiData = new APIData();
        this.addShadow('open');
        this.init();
    }

    addShadow (mode) {
        this.attachShadow({
            mode: mode
        });
    }
    async init() {
        const templateContent = await this.getTemplate();
        this.loadTemplate(templateContent);
        this.shadowRoot.querySelector('#reload').addEventListener('click', this.graph.bind(this));
        window.addEventListener('resize', this.onResize.bind(this));
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
        try {
            const data = await this.#apiData.getData(this.getAttribute('data-url'));
            this.shadowRoot.querySelector('#chart').classList = 'chart-full';
            this.load(data);
        } catch (error) {
            this.shadowRoot.querySelector('#chart').classList = 'chart-empty';
            console.log(error);
        }
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
        this.#chartData = google.visualization.arrayToDataTable(dataArray);
        this.#chartOptions = {
            title: title,
            width: 'auto',
            height: 'auto',
            bar: { groupWidth: "80%" },
            legend: { position: "none" },
        };
        this.#chart = new google.visualization.ColumnChart(this.shadowRoot.querySelector('#chart'));
        this.#readyToDraw = true;
        this.drawChart();
    }
    loadPieChart(title, dataArray) {
        this.#chartData = google.visualization.arrayToDataTable(dataArray);
        this.#chartOptions = {
            title: title,
            width: 'auto',
            height: 'auto'
        };
        this.#chart = new google.visualization.PieChart(this.shadowRoot.querySelector('#chart'));
        this.#readyToDraw = true;
        this.drawChart();
    }
    drawChart() {
        this.#chart.draw(this.#chartData, this.#chartOptions);
    }

    onResize() {
        if (this.#readyToDraw) {
            this.drawChart();
        }
    }

    connectedCallback() {
        
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector('#reload').removeEventListener();
        window.removeEventListener();
    }
}

window.customElements.define('user-chart', Chart);