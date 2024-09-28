const apiKey = 'KzwoJKIbVGs8Vxh4Ekjq2QxcyGjta77t';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=technology&api-key=${apiKey}`;

async function fetchArticles() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArticles(data.response.docs);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
       
        articleDiv.innerHTML = `
            <h3>${article.headline.main}</h3>
            <img src="${article.multimedia.length > 0 ? `https://www.nytimes.com/${article.multimedia[0].url}` : 'placeholder.jpg'}" alt="Article Image" />
            <p>${article.snippet}</p>
            <a href="${article.web_url}" target="_blank">Read more</a>
        `;
       
        articlesContainer.appendChild(articleDiv);
    });
}

fetchArticles();
