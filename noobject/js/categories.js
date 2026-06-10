async function addCategory(name){
    const authToken = localStorage.getItem("authToken");
    if(!authToken){
        alert("Авторизуйтесь для удаления");
        return;
    }
    try{
        const response = await fetch('https://webfinalapi.mobydev.kz/categories', {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${authToken}`
            },
            body: name
        });
    } catch(error) {
        console.error(`error: ${error}`)
    }
}
async function removeCategory(id){
    const authToken = localStorage.getItem("authToken");
    if(!authToken){
        alert("Авторизуйтесь для удаления");
        return;
    }
    const isConfirmed = confirm("Вы уверены что хотите удалить данную новость?");
    if(!isConfirmed) return;
    try{
        const response = await fetch(`https://webfinalapi.mobydev.kz/category/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${authToken}`,
            },
            body: id
        });
        fetchAndRenderCategories();
    }catch(error){
        console.error(`ошибочка:${error}`)
    }
}
async function fetchAndRenderCategories() {
    try{
        const response = await fetch('https://webfinalapi.mobydev.kz/categories');
        if(!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        const categoryArray = await response.json();
        document.querySelector('.categories').innerHTML = categoryArray.map(categora => `
            <div class="category">
                <h2 class="category-category">${categora.name}</h2>
                <div class="category-category">
                    <button class="button-red" onclick="removeCategory(${categora.id})">Удалить</button>
                </div>
            </div>
        `).join('');
        setupActionButtons();
    } catch(error){
        console.log('Ошибка при получений новостей:', error);
    }
}
function setupActionButtons(){
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header_auth");
    if (authToken) {
        headerAuth.innerHTML = `<button class="button button-red" onclick="logout()">Bыйти</button>`;
    } 
}
function displayCreateButton() {
    if (localStorage.getItem("authToken")) {
        const createButton = document.createElement("button");
        createButton.className = "button button-green";
        createButton.textContent = "+";
        createButton.onclick = () => (nameFunction());
        document.querySelector('.categories').before(createButton);
    }
};
async function nameFunction() {
    const name = prompt("назовите категорию")
    const authToken = localStorage.getItem("authToken");
    const response = await fetch('https://webfinalapi.mobydev.kz/category', {
        method: 'POST',
        headers: {
            "Authorization":`Bearer ${authToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({name})
    });
    fetchAndRenderCategories();
}
document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderCategories();
    displayCreateButton();
});