const BASE_URL = "https://webfinalapi.mobydev.kz";
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
                    <a class="news-card link" href="./detail-news.html?id=${news.id}">
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
                            <a href=".Adit-news.html?id=${news.id}" class="button button-blue button-small">Редактировать</a>
                            <button
                                type="button"
                                class="button button-red button-small"
                                onclick="deletellews(${news.id})">Удалить</button>
                        </div>
                    </div>
                </div>
            </article>
        `).join('');
    } catch(error){
        console.log('Ошибка при получений новостей:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchAndRenderNews)