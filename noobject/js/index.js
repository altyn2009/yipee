const BASE_URL = "https://webfinalapi.mobydev.kz";

async function deleteNews(id) {
    const authToken = localStorage.getItem("authToken");
    if(!authToken){
        alert("Авторизуйтесь для удаления");
        return;
    }
    const isConfirmed = confirm("Вы уверены что хотите удалить данную новость?");
    if(!isConfirmed) return;
    try{
        const response = await fetch(`${BASE_URL}/news/${id}`, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${authToken}`
            }
        });
        if(response.ok){
            alert('новость успешно удалена.');
            fetchAndRenderNews();
        }else{
            alert('Ошибка при удалений новости')
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

async function fetchAndRenderNews() {
    try{
        const response = await fetch(`${BASE_URL}/news`);
        if(!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        const newsArray = await response.json();
        document.querySelector('.news-grid').innerHTML = newsArray.map(news => `
            <article class="news-card">
                <div class="news-card_image">
                    <img
                        src="${BASE_URL}${news.thumbnail.startsWith('/')? '' : '/'}${news.thumbnail}"
                        alt="${news.title}"
                    />
                </div>
                <div class="news-card_content">
                    <a class="news-card link" href="./news.html?id=${news.id}">
                        <h2 class="news-card_title">${news.title}</h2>
                        <p class="news-card_attributes">
                            ${news.createdAt} • ${news.category.name || "Категория"}
                        </p>
                    </a>
                    <div>
                        <div class="news-card_author">
                            <div class="user" >
                                <div class="user_avatar">
                                    <img src="https://i.pravatar.cc/150?u-admin@admin.com"alt="Аватар">
                                </div>
                                <p class="user_name">${news.author.name || 'Нейзвестый автор'}</p>
                            </div>
                        </div>
                        <div class="news-card_actions">
                            <a href="./edit.html?id=${news.id}" class="button button-blue button-small">Редактировать</a>
                            <button
                                type="button"
                                class="button button-red button-small"
                                onclick="deleteNews(${news.id})">Удалить</button>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
        setupActionButtons();
    } catch(error){
        console.log('Ошибка при получений новостей:', error);
    }
}

function setupActionButtons() {
    const authToken = localStorage.getItem("authToken");
    const headerAuth = document.querySelector(".header_auth");
    if (authToken) {
        headerAuth.innerHTML = `<button class="button button-red" onclick="logout()">Bыйти</button>`;
    } 
    document.querySelectorAll(".news-card_actions a.button-blue").forEach(Link => {
        Link.addEventListener("click", event => {
            if (!authToken) {
                event.preventDefault();
                alert("Авторизуйтесь для редактирования.");
            }
        });
    });
    document.querySelectorAll(".news-card_actions button.button-red").forEach(button => {
        button.addEventListener("click", () => {
            if (!authToken) return alert("Aвторизутесь для удаления.");
            // deletellews (button.getAttribute("onclick").match(/\d+/)[0]);
        });
    });
}

function displayCreateButton() {
    if (localStorage.getItem("authToken")) {
        const createButton = document.createElement("button");
        createButton.className = "button button-green";
        createButton.textContent = "+";
        createButton.onclick = () => (window.location.href="./create.html");
        document.querySelector('.news-grid').before(createButton);
    }
};
function logout() {
    localStorage.removeItem("authToken");
    window.location.reload();
}
document.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderNews();
    displayCreateButton();
});