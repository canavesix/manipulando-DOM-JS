document.addEventListener("DOMContentLoaded", function() {
    
    const titulo = document.getElementById("titulo");
    const ul = document.querySelector("ul");
    const link = document.getElementById("link");
    const ol = document.getElementById("lista-ordenada");

    
    titulo.innerText = "Título do Site";
    link.innerText = "Visite o Proz Educação";

   
    ul.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

    
    ol.innerHTML = "<li><a href='https://site1.com'>Link 1</a></li>" +
                   "<li><a href='https://site2.com'>Link 2</a></li>" +
                   "<li><a href='https://site3.com'>Link 3</a></li>";
});
