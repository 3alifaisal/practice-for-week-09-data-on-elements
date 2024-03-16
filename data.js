// Your code here
document.addEventListener("DOMContentLoaded",()=> {
    const addButton = document.querySelector("#add");
    const shoppingListUl = document.querySelector("#shopping-list");

    console.log(addButton);
    addButton.addEventListener("click", () => {
       
        const liElement = document.createElement("li");
        const inputtedName = document.querySelector("#name");
        const inputtedOption = document.querySelector("#type");

        liElement.innerText = `product Name: ${inputtedName.value}`
        liElement.setAttribute("data-type", inputtedOption.value)
        shoppingListUl.appendChild(liElement);
        event.preventDefault(); 
    })
})
