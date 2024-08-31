// script.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('playlistModal');
    const closeBtn = document.querySelector('.close');
    const songList = document.getElementById('songList');
    const sortButton = document.getElementById('sort');
    const playlistContainer = document.getElementById('playlistContainer');
    const filterSelect = document.getElementById('filter');
    const searchInput = document.getElementById('search');
    const playlists = Array.from(playlistContainer.getElementsByClassName('playlist-item'));

    document.querySelectorAll('.view').forEach(button => {
        button.addEventListener('click', () => {
            const songs = JSON.parse(button.getAttribute('data-songs'));
            songList.innerHTML = songs.map(song =>
                `<div class="song-item">
                    <strong>${song.title}</strong> by ${song.artist}
                </div>`
            ).join('');
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    sortButton.addEventListener('click', () => {
        if (playlists.length === 0) return;
        let filteredPlaylists = filterPlaylists();
        filteredPlaylists.sort((a, b) => {
            const titleA = a.querySelector('.playlist-title').textContent.toUpperCase();
            const titleB = b.querySelector('.playlist-title').textContent.toUpperCase();
            return titleA.localeCompare(titleB);
        });
        playlistContainer.innerHTML = '';
        filteredPlaylists.forEach(playlist => playlistContainer.appendChild(playlist));
    });

    filterSelect.addEventListener('change', () => {
        filterPlaylists();
    });

    searchInput.addEventListener('input', () => {
        filterPlaylists();
    });

    function filterPlaylists() {
        const selectedGenre = filterSelect.value;
        const searchQuery = searchInput.value.toLowerCase();
        const filteredPlaylists = playlists.filter(playlist => {
            const matchesGenre = selectedGenre ? playlist.dataset.genre === selectedGenre : true;
            const title = playlist.querySelector('.playlist-title').textContent.toLowerCase();
            const matchesSearch = title.includes(searchQuery);
            return matchesGenre && matchesSearch;
        });
        playlistContainer.innerHTML = '';
        filteredPlaylists.forEach(playlist => playlistContainer.appendChild(playlist));
        return filteredPlaylists;
    }
});
