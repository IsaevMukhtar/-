/*
window.addEventListener('load',  () =>{
    document.querySelector('button').addEventListener('click', () =>{
        if(confirm('Жай бассай, куасынба!')){
            alert('Басе, осылай бас')
        }
        })
})
*/

/*
window.addEventListener('load',  () =>{
    document.querySelector('button').addEventListener('click', () =>{
        const name = prompt('Кімсің Е?')
            if(name){
               alert( name + ' қалайсындар' ) 
            }
        })
})
*/


window.addEventListener('load', () => {
    document.querySelector('button').addEventListener('click', () => {
        const result = parseInt(document.querySelector('input[name="first"]').value) + parseInt(document.querySelector('input[name="second"]').value)

        document.querySelector('.result').innerHTML = result
    })
    document.querySelector('input[name="first"]').addEventListener('keyup', () => {
        console.log('VSE')
    })
})
