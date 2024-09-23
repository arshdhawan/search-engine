document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const historyList = document.getElementById('historyList');

    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        historyList.innerHTML = history.map(term => `<li>${term}</li>`).join('');
    };

    const saveToHistory = (term) => {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        if (!history.includes(term)) {
            history.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(history));
        }
        loadHistory();
    };

    const clearHistory = () => {
        localStorage.removeItem('searchHistory');
        loadHistory();
    };

    searchButton.addEventListener('click', () => {
        const term = searchInput.value.trim();
        if (term) {
            saveToHistory(term);
            searchInput.value = ''; // Clear input after search
        }
    });

    clearHistoryButton.addEventListener('click', clearHistory);

    loadHistory(); // Load history on page load
});
