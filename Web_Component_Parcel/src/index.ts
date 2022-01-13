import APIData from "./userChart/js/APIData";
import './css/main.scss';
import style from './userChart/css/user-chart.scss';

class Chart extends HTMLElement {
    #apiData: APIData;
    #chartOptions: {};
    #chartData: google.visualization.DataTable;
    #chart: google.visualization.ColumnChart | google.visualization.PieChart;
    #readyToDraw: boolean;

    constructor() {
        super();
        this.#readyToDraw = false;
        this.#apiData = new APIData();
        this.addShadow('open');
        this.verifyScript();
        this.init();
    }

    addShadow (mode: ShadowRootMode) {
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
    verifyScript() {
        if (!document.querySelector('#gcs')) {
            const gcs = document.createElement('script');
            gcs.setAttribute('id', 'gcs');
            gcs.setAttribute('type', 'text/javascript');
            gcs.setAttribute('src', 'https://www.gstatic.com/charts/loader.js');
            document.head.appendChild(gcs);
        }
    }
    async getTemplate(): Promise<string> {
        let content: string;
        await fetch('./userChart/template.html')
            .then((res) => res.text())
            .then((text) => content = text)
            .catch((error) => {
                console.log(`Error: ${error.message}`);
            });
        return content;
    }
    loadTemplate(templateContent: string) {
        const template = document.createElement('template');
        template.innerHTML = templateContent;

        const styleTag = document.createElement('style');
        styleTag.innerHTML = style;
        this.shadowRoot.appendChild(styleTag);


        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    async graph() {
        try {
            const data = await this.#apiData.getData(this.getAttribute('data-url'));
            this.shadowRoot.querySelector('#chart').classList.add('chart-full');
            this.load(data);
        } catch (error) {
            this.shadowRoot.querySelector('#chart').classList.add('chart-empty');
            console.log(error);
        }
    }
    async load(fetchedData: Object) {
        const title = this.getAttribute('title');
        const dataArray = await this.prepareData(fetchedData);
        const onLoadCallback = this.getAttribute('type') === 'bar' ? this.loadBarChart : this.loadPieChart;
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(onLoadCallback.bind(this, title, dataArray));
    }
    async prepareData(fetchedData: any) {
        const fields = this.getAttribute('fields').split(',');
        const dataArray = [fields];
        await fetchedData.data.forEach((element: any) => {
            let dataFieldArray: string[] = [];
            fields.forEach((field) => dataFieldArray.push(element[field]));
            dataArray.push(dataFieldArray);
        });
        return dataArray;
    }
    loadBarChart(title: string, dataArray: string[]) {
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
    loadPieChart(title: string, dataArray: string[]) {
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
        this.shadowRoot.querySelector('#reload').removeEventListener('click', this.graph);
        window.removeEventListener('resize', this.onResize);
    }
}

window.customElements.define('user-chart', Chart);