const dots = document.querySelectorAll('.dot');
const bt = document.querySelector('.bt');
const painel = document.querySelector('.painel');

dots.forEach(dot => {
    dot.addEventListener('click', () => {

        bt.addEventListener('click', () => {
            painel.innerHTML = `
                <div class="text-align">
                <img src="./images/illustration-thank-you.svg" alt="cell image">
                <h4><span class="result">You selected ${dot.dataset.value} out of 5</span></h4>
                <h1 class="title">Thank you!</h1>
                <p class="p">We appreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch.</p>
                </div>
            `
        })
    })
})