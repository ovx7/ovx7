// script.js

// Array of articles
const articles = [
    {
        title: "Understanding Depression",
        content: "Depression is a common and serious mental health condition that affects millions of people globally..."
    },
    {
        title: "What is Anxiety?",
        content: "Anxiety disorders involve more than temporary worry or fear. For people with an anxiety disorder, the anxiety does not go away..."
    },
    {
        title: "Dealing with Stress",
        content: "Stress is a normal reaction to everyday pressures, but can become unhealthy when it upsets your day-to-day functioning..."
    }
];

// Function to display articles dynamically
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');

    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Scroll to Articles section
function scrollToArticles() {
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
}

// Load articles when the page loads
window.onload = loadArticles;
