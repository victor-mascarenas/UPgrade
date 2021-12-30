//const template = document.createElement('template');
/* template.innerHTML = `
    <link rel="stylesheet" href="UserCard/userCard.css">
    <div class="user-card">
        <img>
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email"></p>
                <p><slot name="phone"></p>
            </div>
            <button id="toggle-info">
                Hide info
            </button>
        </div>
    </div>
`; */

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.addShadow('open');
        this.loadTemplate();
        //this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async loadTemplate() {
        await fetch('UserCard/template.html')
            .then((res) => res.text())
            .then((html) => {
                this.shadowRoot.innerHTML = html;
                this.initComponent();
            });
    }
    addShadow (mode) {
        this.attachShadow({
            mode: mode
        });
    }
    initComponent() {
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => {
            this.toggleInfo();
        });
    }
    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggle = this.shadowRoot.querySelector('#toggle-info');
        if (this.showInfo) {
            info.style.display = 'block';
            toggle.innerText = 'Hide info';
        } else {
            info.style.display = 'none';
            toggle.innerText = 'Show info';
        }
    }

    //In DOM
    connectedCallback() {
        /* this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => {
            this.toggleInfo();
        }); */
    }
    //Out of DOM
    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').removeEventListener();
    }
}

window.customElements.define('user-card', UserCard);