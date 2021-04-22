 $.getJSON("./data/data.json", function (json) {
     console.log(json);
     document.body.innerHTML = display(JSON.parse(JSON.stringify(json)), "main");
 });


 let text = ``;

 function display(data, className) {

     text += `<ul class="${className}">`
     data.forEach(mainList => {
         (mainList.children.length > 0) ? text += `<li class="arrow">${mainList.name}`: text += `<li class="not_active">${mainList.name}</li>`;
        if(mainList.children.length > 0) display(mainList.children[0], "nested")
        text += `</li>`;
        })

        text += `</ul>`;

        return text;
 }