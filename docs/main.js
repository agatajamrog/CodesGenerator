const btnCreate = document.querySelector('button');
const btnClear = document.querySelector('.clear');
const section = document.querySelector('section');

const chars = 'ABCDEFGHIJKLMNOPRSTWUXYZ0123456789';
const codesNumber = 1;
const charsNumber = 10;


const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++){
        let code = "";
        for (let i = 0; i < charsNumber; i++){
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}


const clearPage = () => {
    section.textContent = '';
}

    btnCreate.addEventListener('click', codesGenerator);

    btnClear.addEventListener('click', clearPage);