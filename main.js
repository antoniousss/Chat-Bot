// const botSay = document.getElementById('botSay')
// const userSay = document.getElementById('userSay')
// let init = 0

// function userAnswer(){
//     init++
     
//     if(init === 1){
//         botSay.innerHTML = `Hallo ${userSay.value}, berapa umur kamu?`
//     }

//     if(init === 2){
//         botSay.innerHTML = `oh ${userSay.value}, apa hobi kamu?`
//     }

//     if(init === 3){
//         botSay.innerHTML = `wow, aku juga suka ${userSay.value}, apa kmu sudah punya pacar?`
//     }

//     if(init === 4){
//         if(userSay.value === 'sudah'){
//             botSay.innerHTML = 'wah, semoga langgeng ya. goodbye'
//         } else {
//             botSay.innerHTML = 'oh gitu ya, aku doain semoga kmu cepat dapat pacar, fighting!!'
//         }
//         document.getElementById('userSection').remove()
//     }
//     userSay.value = ''
//     userSay.focus()
// }

const botSay = document.getElementById('botSay');
const userSay = document.getElementById('userSay');
let init = 0;

function userAnswer() {
    init++;

    switch (init) {
        case 1:
            botSay.innerHTML = `Hallo ${userSay.value}, berapa umur kamu?`;
            break;
        case 2:
            botSay.innerHTML = `Oh ${userSay.value}, apa hobi kamu?`;
            break;
        case 3:
            botSay.innerHTML = `Wow, aku juga suka ${userSay.value}, apa kamu sudah punya pacar?`;
            break;
        case 4:
            botSay.innerHTML = (userSay.value === 'sudah') ? 'Wah, semoga langgeng ya. Goodbye!!!' : 'oh gitu ya, aku doain semoga kamu cepat dapat pacar, fighting!!';
            document.getElementById('userSection').remove();
            break;
        default:
            break;
    }

    userSay.value = '';
    userSay.focus();
}



