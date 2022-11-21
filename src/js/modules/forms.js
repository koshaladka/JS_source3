export default class From {
    constructor(form) {
        this.forms = document.querySelectorAll(forms);
    }

    async postData(url,data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    } 

    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault
            })
        })
    }
}