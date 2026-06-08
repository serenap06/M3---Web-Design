// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.


const twitterToRemove =document.querySelector('div.p-4:nth-of-type(3) li:nth-of-type(2) a')
twitterToRemove.remove()



const deleteLinks = document.querySelectorAll('.stretched-link')




for (const link of deleteLinks){
    link.addEventListener("click",()=>{
        link.parentElement.parentElement.remove()
    })
}



const authors = document.querySelectorAll('p.blog-post-meta a');

for (const author of authors){
    author.addEventListener("mouseover", ()=>{
        showAlert(author.innerText)
    })
}

function showAlert(text) {
    alert(text)
}
