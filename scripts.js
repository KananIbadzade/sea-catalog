//***** Catalog Application - Logic and Functionality *****//

// The data structures are defined in data.js

let filteredItems = []; // storing filtered/sorted items
let currentFilter = 'none'; // tracking current filter
let currentSearchTerm = ''; // tracking current search term

// Sets up the like system by initializing localStorage for liked items
function setupLikeSystem() {
  localStorage.removeItem('likedItems');
  localStorage.setItem('likedItems', JSON.stringify({}));
}

// Shows the cards for the currently selected category and resets filters/search
function showCards() {
  const selectedCategory = document.getElementById("categorySelect").value;

  resetFiltersAndSearch();
  displayItems(selectedCategory);
  updateFeatureButtons(selectedCategory);
  updateFilterOptions(selectedCategory);
}

// Displays the items (cards) for a given category, handling likes and delete
function displayItems(category, items = null) {
  const displayedItems = items || objects[category];
  filteredItems = [...displayedItems];

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const templateCard = document.querySelector(".card");

  if (displayedItems.length === 0) {
    const noResults = document.createElement("p");
    noResults.classList.add("no-results");
    noResults.textContent = "No items found. Try adjusting your search or filters.";
    cardContainer.appendChild(noResults);
    return;
  }

  for (let i = 0; i < displayedItems.length; i++) {
    const item = displayedItems[i];

    const card = templateCard.cloneNode(true);
    card.style.display = "block";
    card.dataset.index = items ? item.originalIndex : i;
    card.dataset.category = category;

    card.querySelector("h2").textContent = item.title;
    card.querySelector("img").src = item.image;
    card.querySelector("img").alt = item.title;

    const ul = card.querySelector("ul");
    ul.innerHTML = "";
    for (let note of item.notes) {
      const li = document.createElement("li");
      li.textContent = note;
      ul.appendChild(li);
    }

    const likeContainer = document.createElement("div");
    likeContainer.className = "like-container";

    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    likeButton.innerHTML = "❤️";
    likeButton.title = "Like";

    const itemId = `${category}-${i}-${item.title.replace(/\s+/g, '-').toLowerCase()}`;
    const likedItems = JSON.parse(localStorage.getItem('likedItems') || '{}');

    if (likedItems[itemId]) {
      item.likes = 1;
      likeButton.classList.add("liked");
    } else {
      item.likes = 0;
    }

    const likeCount = document.createElement("span");
    likeCount.className = "like-count";
    likeCount.textContent = item.likes > 0 ? item.likes : "";

    likeButton.addEventListener("click", function(e) {
      e.stopPropagation();

      if (likedItems[itemId]) {
        likedItems[itemId] = false;
        item.likes = 0;
        likeCount.textContent = "";
        likeButton.classList.remove("liked");
      } else {
        likedItems[itemId] = true;
        item.likes = 1;
        likeCount.textContent = "1";
        likeButton.classList.add("liked");
      }

      localStorage.setItem('likedItems', JSON.stringify(likedItems));
    });

    likeContainer.appendChild(likeButton);
    likeContainer.appendChild(likeCount);
    card.querySelector(".card-content").appendChild(likeContainer);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "✖";
    deleteBtn.title = "Delete item";
    deleteBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      deleteItem(category, items ? item.originalIndex : i);
    });
    card.querySelector(".card-content").appendChild(deleteBtn);

    card.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      openDetailModal(category, index);
    });

    cardContainer.appendChild(card);
  }
}


// Updates the filter dropdown options based on the selected category
function updateFilterOptions(category) {
  const filterContainer = document.getElementById("filter-container");
  const filterSelect = document.getElementById("filterSelect");
  filterSelect.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "none";
  defaultOption.textContent = "No Filter";
  filterSelect.appendChild(defaultOption);

  if (category === "songs") {
    addFilterOption(filterSelect, "newest", "Newest First");
    addFilterOption(filterSelect, "oldest", "Oldest First");
    addFilterOption(filterSelect, "most-streams", "Most Streams");
    addFilterOption(filterSelect, "least-streams", "Least Streams");
  } else if (category === "podcasters") {
    addFilterOption(filterSelect, "newest-podcast", "Newest Podcasts");
    addFilterOption(filterSelect, "oldest-podcast", "Oldest Podcasts");
    addFilterOption(filterSelect, "most-episodes", "Most Episodes");
  } else if (category === "soccer") {
    addFilterOption(filterSelect, "youngest", "Youngest Players");
    addFilterOption(filterSelect, "oldest", "Oldest Players");
  }

  filterContainer.style.display = "flex";
}

// Adds a new filter option to the filter dropdown
function addFilterOption(select, value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
}

// Applies the selected filter and updates the displayed items
function applyFilter() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const filterValue = document.getElementById("filterSelect").value;
  currentFilter = filterValue;

  let itemsToFilter = [...objects[selectedCategory]];

  if (currentSearchTerm) {
    itemsToFilter = searchItems(selectedCategory, currentSearchTerm);
  }

  itemsToFilter = itemsToFilter.map((item, index) => ({...item, originalIndex: item.originalIndex !== undefined ? item.originalIndex : index}));

  if (filterValue !== "none") {
    itemsToFilter = filterItems(selectedCategory, filterValue, itemsToFilter);
  }

  displayItems(selectedCategory, itemsToFilter);
}

// Sorts or filters items based on the chosen filter type
function filterItems(category, filterType, items) {
  let filteredResults = [...items];

  switch (filterType) {
    case "newest":
      filteredResults.sort((a, b) => parseInt(b.details.releaseYear) - parseInt(a.details.releaseYear));
      break;

    case "oldest":
      filteredResults.sort((a, b) => parseInt(a.details.age) - parseInt(b.details.age));
      break;

    case "most-streams":
      filteredResults.sort((a, b) => {
        const streamsA = parseStreamNumber(a.streams);
        const streamsB = parseStreamNumber(b.streams);
        return streamsB - streamsA;
      });
      break;

    case "least-streams":
      filteredResults.sort((a, b) => {
        const streamsA = parseStreamNumber(a.streams);
        const streamsB = parseStreamNumber(b.streams);
        return streamsA - streamsB;
      });
      break;

    case "youngest":
      filteredResults.sort((a, b) => parseInt(a.details.age) - parseInt(b.details.age));
      break;

    case "newest-podcast":
      filteredResults.sort((a, b) => parseInt(b.details.podcastLaunch) - parseInt(a.details.podcastLaunch));
      break;

    case "oldest-podcast":
      filteredResults.sort((a, b) => parseInt(a.details.podcastLaunch) - parseInt(b.details.podcastLaunch));
      break;

    case "most-episodes":
      filteredResults.sort((a, b) => {
        const episodesA = a.details.episodeCount ? parseInt(a.details.episodeCount.replace(/\D/g, '')) || 0 : 0;
        const episodesB = b.details.episodeCount ? parseInt(b.details.episodeCount.replace(/\D/g, '')) || 0 : 0;
        return episodesB - episodesA;
      });
      break;

    default:
      break;
  }

  return filteredResults;
}

// Searches items in a category for a given search term
function searchItems(category, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const results = objects[category].filter((item, index) => {
    item.originalIndex = index;

    if (item.title.toLowerCase().includes(searchTerm)) return true;

    if (category === "songs" && item.artist.toLowerCase().includes(searchTerm)) return true;
    if (category === "podcasters" && item.show.toLowerCase().includes(searchTerm)) return true;
    if (category === "soccer" && item.team.toLowerCase().includes(searchTerm)) return true;

    for (const note of item.notes) {
      if (note.toLowerCase().includes(searchTerm)) return true;
    }

    for (const [key, value] of Object.entries(item.details)) {
      if (value.toString().toLowerCase().includes(searchTerm)) return true;
    }

    return false;
  });

  return results;
}

// Handles the search input and updates the displayed items
function performSearch() {
  const searchTerm = document.getElementById("searchInput").value.trim();
  currentSearchTerm = searchTerm;

  const selectedCategory = document.getElementById("categorySelect").value;

  if (searchTerm === "") {
    resetSearch();
    return;
  }

  let results = searchItems(selectedCategory, searchTerm);

  if (currentFilter !== "none") {
    results = filterItems(selectedCategory, currentFilter, results);
  }

  displayItems(selectedCategory, results);
}

// Clears the search input and resets the displayed items
function resetSearch() {
  document.getElementById("searchInput").value = "";
  currentSearchTerm = "";

  const selectedCategory = document.getElementById("categorySelect").value;

  if (currentFilter !== "none") {
    let items = [...objects[selectedCategory]].map((item, index) => ({...item, originalIndex: index}));
    items = filterItems(selectedCategory, currentFilter, items);
    displayItems(selectedCategory, items);
  } else {
    displayItems(selectedCategory);
  }
}

// Resets both filters and search when switching categories
function resetFiltersAndSearch() {
  document.getElementById("filterSelect").value = "none";
  currentFilter = "none";

  document.getElementById("searchInput").value = "";
  currentSearchTerm = "";
}

// Shows or hides feature buttons (like quote, fact, lyrics) based on category
function updateFeatureButtons(category) {
  document.getElementById("quotes-button").style.display = "none";
  document.getElementById("facts-button").style.display = "none";
  document.getElementById("lyrics-button").style.display = "none";

  document.getElementById("special-content-box").classList.remove("active");
  document.getElementById("special-content-box").style.display = "none";

  if (category === "songs") {
    document.getElementById("lyrics-button").style.display = "block";
  } else if (category === "soccer") {
    document.getElementById("facts-button").style.display = "block";
  } else if (category === "podcasters") {
    document.getElementById("quotes-button").style.display = "block";
  }
}

// Picks and displays a random quote from a podcaster
function getRandomQuote() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const specialContentBox = document.getElementById("special-content-box");
  const specialContent = document.getElementById("special-content");
  const contentAttribution = document.querySelector(".content-attribution");

  if (selectedCategory === "podcasters") {
    const podcasters = objects.podcasters;
    const randomPodcaster = podcasters[Math.floor(Math.random() * podcasters.length)];
    const randomQuote = randomPodcaster.quotes[Math.floor(Math.random() * randomPodcaster.quotes.length)];

    specialContent.textContent = `"${randomQuote}"`;
    contentAttribution.textContent = `— ${randomPodcaster.title}, ${randomPodcaster.show}`;

    specialContentBox.style.display = "block";
    specialContentBox.classList.add("active");
  }
}

// Picks and displays a random fun fact from a soccer player
function getFunFact() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const specialContentBox = document.getElementById("special-content-box");
  const specialContent = document.getElementById("special-content");
  const contentAttribution = document.querySelector(".content-attribution");

  if (selectedCategory === "soccer") {
    const players = objects.soccer;
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const randomFact = randomPlayer.funFacts[Math.floor(Math.random() * randomPlayer.funFacts.length)];

    specialContent.textContent = randomFact;
    contentAttribution.textContent = `Fun fact about ${randomPlayer.title}`;

    specialContentBox.style.display = "block";
    specialContentBox.classList.add("active");
  }
}

// Picks and displays favorite lyrics from a random song
function getFavoriteLyrics() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const specialContentBox = document.getElementById("special-content-box");
  const specialContent = document.getElementById("special-content");
  const contentAttribution = document.querySelector(".content-attribution");

  if (selectedCategory === "songs") {
    const songs = objects.songs;
    const randomSong = songs[Math.floor(Math.random() * songs.length)];

    specialContent.textContent = randomSong.lyrics;
    contentAttribution.textContent = `"${randomSong.title}" by ${randomSong.artist}`;

    specialContentBox.style.display = "block";
    specialContentBox.classList.add("active");
  }
}

// Calculates age from a given birth date string
function calculateAge(birthDateStr) {
  const birthDate = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Opens the detail modal for an item, showing all its info and comments
function openDetailModal(category, index) {
  const modal = document.getElementById('detail-modal');
  const item = objects[category][index];

  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-title').textContent = item.title;

  document.getElementById('modal-stats-list').innerHTML = '';
  document.getElementById('modal-list').innerHTML = '';
  document.getElementById('modal-career-list').innerHTML = '';
  document.getElementById('modal-bio-text').innerHTML = '';
  document.getElementById('modal-extras-content').innerHTML = '';

  if (category === 'songs') {
    document.getElementById('modal-subtitle').textContent = item.artist;

    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Artist:</strong> ${item.artist}</li>
      <li><strong>Genre:</strong> ${item.details.genre}</li>
      <li><strong>Streams:</strong> ${item.streams}</li>
    `;

    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'song');
      statsList.innerHTML += socialLinksHtml;
    }

    document.getElementById('modal-career-title').textContent = 'Song Recognition';

    const careerList = document.getElementById('modal-career-list');
    if (item.awards) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Awards:</strong> ${item.awards}`;
      careerList.appendChild(li);
    }

    const streamLi = document.createElement('li');
    streamLi.innerHTML = `<strong>Streaming Performance:</strong> ${item.streams} streams across platforms`;
    careerList.appendChild(streamLi);

    document.querySelector('#modal-bio h3').textContent = 'Lyrics';
    const bioText = document.getElementById('modal-bio-text');

    const lyricsContainer = document.createElement('div');

    const lyricsParagraph = document.createElement('p');
    lyricsParagraph.textContent = item.lyrics;
    lyricsParagraph.id = 'lyrics-short';
    lyricsContainer.appendChild(lyricsParagraph);

    const fullLyricsParagraph = document.createElement('p');
    fullLyricsParagraph.textContent = item.fullLyrics || item.lyrics;
    fullLyricsParagraph.id = 'lyrics-full';
    fullLyricsParagraph.style.display = 'none';
    lyricsContainer.appendChild(fullLyricsParagraph);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'See More';
    toggleButton.classList.add('toggle-button');
    toggleButton.onclick = function() {
      const shortLyrics = document.getElementById('lyrics-short');
      const fullLyrics = document.getElementById('lyrics-full');

      if (shortLyrics.style.display !== 'none') {
        shortLyrics.style.display = 'none';
        fullLyrics.style.display = 'block';
        toggleButton.textContent = 'See Less';
      } else {
        shortLyrics.style.display = 'block';
        fullLyrics.style.display = 'none';
        toggleButton.textContent = 'See More';
      }
    };
    lyricsContainer.appendChild(toggleButton);

    bioText.appendChild(lyricsContainer);

    document.getElementById('modal-extras-title').textContent = '';
    document.getElementById('modal-extras-content').innerHTML = '';
  } else if (category === 'soccer') {
    document.getElementById('modal-subtitle').textContent = item.team;

    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Position:</strong> ${item.details.position}</li>
      <li><strong>Height:</strong> ${item.details.height || 'Not available'}</li>
      <li><strong>Weight:</strong> ${item.details.weight || 'Not available'}</li>
      <li><strong>Nationality:</strong> ${item.details.nationality}</li>
    `;

    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'soccer');
      statsList.innerHTML += socialLinksHtml;
    }

    document.getElementById('modal-bio-text').textContent = item.biography;
    document.querySelector('#modal-bio h3').textContent = 'Biography';

    document.getElementById('modal-career-title').textContent = 'Daily Routine';
    document.getElementById('modal-career-list').innerHTML = `<li>${item.dailyRoutine}</li>`;

    document.getElementById('modal-extras-title').textContent = '';
    document.getElementById('modal-extras-content').innerHTML = '';
  } else if (category === 'podcasters') {
    document.getElementById('modal-subtitle').textContent = item.show;

    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Show:</strong> ${item.show}</li>
      <li><strong>Expertise:</strong> ${item.details.expertise || 'N/A'}</li>
      <li><strong>Episodes:</strong> ${item.details.episodeCount || 'N/A'}</li>
      <li><strong>Launch Year:</strong> ${item.details.podcastLaunch || 'N/A'}</li>
    `;

    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'podcaster');
      statsList.innerHTML += socialLinksHtml;
    }

    document.getElementById('modal-bio-text').textContent = item.biography || '';
    document.querySelector('#modal-bio h3').textContent = 'Biography';

    document.getElementById('modal-career-title').textContent = 'Show Details';
    const careerList = document.getElementById('modal-career-list');
    careerList.innerHTML = `
      <li><strong>Education:</strong> ${item.details.education || 'N/A'}</li>
    `;

    document.getElementById('modal-extras-title').textContent = 'Top Episodes';
    const extrasContent = document.getElementById('modal-extras-content');
    extrasContent.innerHTML = '';

    if (item.topEpisodes && item.topEpisodes.length > 0) {
      const ul = document.createElement('ul');
      item.topEpisodes.forEach(episode => {
        const li = document.createElement('li');
        li.textContent = episode;
        ul.appendChild(li);
      });
      extrasContent.appendChild(ul);
    } else {
      extrasContent.textContent = 'No featured episodes available.';
    }
  }

  const modalList = document.getElementById('modal-list');

  const details = item.details;
  for (const [key, value] of Object.entries(details)) {
    if (category === 'soccer' && (key === 'height' || key === 'weight')) {
      continue;
    }

    const li = document.createElement('li');
    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) { 
      return str.toUpperCase(); 
    });
    li.textContent = `${formattedKey}: ${value}`;
    modalList.appendChild(li);
  }

  const existingCommentSection = document.querySelector('.comments-section');
  if (existingCommentSection) {
    existingCommentSection.remove();
  }

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'modal-section comments-section';
  commentsContainer.innerHTML = `
    <h3>Fan Comments</h3>
    <div class="comments-list" id="comments-list"></div>
    <div class="add-comment-form">
      <input type="text" id="commenter-name" placeholder="Your name" maxlength="20" required>
      <textarea id="new-comment" placeholder="Add your comment (max 100 words)..."></textarea>
      <div class="word-counter"><span id="word-count">0</span>/100 words</div>
      <button class="submit-btn" id="post-comment-btn">Post Comment</button>
    </div>
  `;

  document.querySelector('.modal-text').appendChild(commentsContainer);

  if (!item.comments) {
    item.comments = [];
  }

  const commentTextarea = document.getElementById('new-comment');
  commentTextarea.addEventListener('input', function() {
    const words = this.value.trim().split(/\s+/).filter(Boolean).length;
    document.getElementById('word-count').textContent = words;

    const submitBtn = document.getElementById('post-comment-btn');
    if (words > 100) {
      submitBtn.disabled = true;
      document.getElementById('word-count').style.color = 'red';
    } else {
      submitBtn.disabled = false;
      document.getElementById('word-count').style.color = '';
    }
  });

  document.getElementById('post-comment-btn').addEventListener('click', function() {
    addComment(category, index);
  });

  displayComments(item.comments);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Shows all comments for an item in the modal
function displayComments(comments) {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';

  if (!comments || comments.length === 0) {
    commentsList.innerHTML = '<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>';
    return;
  }

  comments.forEach((comment) => {
    const commentEl = document.createElement('div');
    commentEl.className = 'comment';
    commentEl.innerHTML = `
      <div class="comment-header">
        <span class="comment-author">${comment.name || 'Anonymous Fan'}</span>
        <span class="comment-date">${comment.date}</span>
      </div>
      <div class="comment-content">${comment.text}</div>
    `;
    commentsList.appendChild(commentEl);
  });
}

// Adds a new comment to an item and updates the display
function addComment(category, index) {
  const commenterName = document.getElementById('commenter-name').value.trim().substring(0, 20);
  const commentText = document.getElementById('new-comment').value.trim();

  if (!commenterName) {
    alert('Please enter your name before posting.');
    return;
  }

  if (!commentText) {
    alert('Please enter a comment before posting.');
    return;
  }

  const wordCount = commentText.split(/\s+/).filter(Boolean).length;
  if (wordCount > 100) {
    alert('Your comment exceeds the 100 word limit. Please make it shorter.');
    return;
  }

  const newComment = {
    name: commenterName,
    text: commentText,
    date: new Date().toLocaleDateString()
  };

  if (!objects[category][index].comments) {
    objects[category][index].comments = [];
  }

  objects[category][index].comments.push(newComment);

  document.getElementById('commenter-name').value = '';
  document.getElementById('new-comment').value = '';
  document.getElementById('word-count').textContent = '0';

  displayComments(objects[category][index].comments);
}

// Closes the detail modal and restores page scrolling
function closeModal() {
  const modal = document.getElementById('detail-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Toggles between dark and light mode themes
function toggleTheme() {
  const body = document.body;
  const toggleIcon = document.querySelector('.toggle-icon');

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggleIcon.textContent = '🌙';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
  }
}

// Opens the modal form to add a new item, with fields based on category
function openAddItemForm() {
  const addModal = document.getElementById('add-item-modal');
  const selectedCategory = document.getElementById("categorySelect").value;
  const form = document.getElementById('add-item-form');

  form.innerHTML = '';

  const categoryTitle = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  document.getElementById('add-item-title').textContent = `Add New ${categoryTitle}`;

  if (selectedCategory === 'songs') {
    form.innerHTML = `
      <div class="form-group">
        <label for="new-item-title">Title *</label>
        <input type="text" id="new-item-title" placeholder="Enter song title" required />
      </div>
      <div class="form-group">
        <label for="new-item-artist">Artist *</label>
        <input type="text" id="new-item-artist" placeholder="Enter artist name" required />
      </div>
      <div class="form-group">
        <label for="new-item-genre">Genre *</label>
        <input type="text" id="new-item-genre" placeholder="Enter genre" required />
      </div>
      <div class="form-group">
        <label for="new-item-streams">Streams *</label>
        <input type="text" id="new-item-streams" placeholder="Enter streams (e.g., 1.2 million)" required />
      </div>
      <div class="form-group">
        <label for="new-item-release-year">Release Year *</label>
        <input type="number" id="new-item-release-year" placeholder="Enter release year" required />
      </div>
      <div class="form-group">
        <label for="new-item-image">Image URL (Optional)</label>
        <input type="text" id="new-item-image" placeholder="Enter image URL" />
      </div>
      <div class="form-group">
        <label for="new-item-lyrics">Lyrics *</label>
        <textarea id="new-item-lyrics" placeholder="Enter lyrics" required></textarea>
      </div>
    `;
  } else if (selectedCategory === 'soccer') {
    form.innerHTML = `
      <div class="form-group">
        <label for="new-item-name">Player Name *</label>
        <input type="text" id="new-item-name" placeholder="Enter player name" required />
      </div>
      <div class="form-group">
        <label for="new-item-team">Team *</label>
        <input type="text" id="new-item-team" placeholder="Enter team name" required />
      </div>
      <div class="form-group">
        <label for="new-item-position">Position *</label>
        <input type="text" id="new-item-position" placeholder="Enter position" required />
      </div>
      <div class="form-group">
        <label for="new-item-age">Age *</label>
        <input type="number" id="new-item-age" placeholder="Enter age" required />
      </div>
      <div class="form-group">
        <label for="new-item-nationality">Nationality *</label>
        <input type="text" id="new-item-nationality" placeholder="Enter nationality" required />
      </div>
      <div class="form-group">
        <label for="new-item-image">Image URL (Optional)</label>
        <input type="text" id="new-item-image" placeholder="Enter image URL" />
      </div>
      <div class="form-group">
        <label for="new-item-height">Height (Optional)</label>
        <input type="text" id="new-item-height" placeholder="Enter height (e.g., 180 cm)" />
      </div>
      <div class="form-group">
        <label for="new-item-weight">Weight (Optional)</label>
        <input type="text" id="new-item-weight" placeholder="Enter weight (e.g., 75 kg)" />
      </div>
      <div class="form-group">
        <label for="new-item-biography">Biography *</label>
        <textarea id="new-item-biography" placeholder="Enter player biography" required></textarea>
      </div>
      <div class="form-group">
        <label for="new-item-daily-routine">Daily Routine (Optional)</label>
        <textarea id="new-item-daily-routine" placeholder="Enter player's daily routine"></textarea>
      </div>
    `;
  } else if (selectedCategory === 'podcasters') {
    form.innerHTML = `
      <div class="form-group">
        <label for="new-item-title">Name *</label>
        <input type="text" id="new-item-title" placeholder="Enter podcaster name" required />
      </div>
      <div class="form-group">
        <label for="new-item-show">Show *</label>
        <input type="text" id="new-item-show" placeholder="Enter show name" required />
      </div>
      <div class="form-group">
        <label for="new-item-image">Image URL (Optional)</label>
        <input type="text" id="new-item-image" placeholder="Enter image URL" />
      </div>
      <div class="form-group">
        <label for="new-item-expertise">Expertise *</label>
        <input type="text" id="new-item-expertise" placeholder="Enter area of expertise" required />
      </div>
      <div class="form-group">
        <label for="new-item-education">Education (Optional)</label>
        <input type="text" id="new-item-education" placeholder="Enter education background" />
      </div>
      <div class="form-group">
        <label for="new-item-biography">Biography *</label>
        <textarea id="new-item-biography" placeholder="Enter biography" required></textarea>
      </div>
    `;
  }

  form.innerHTML += `
    <div class="form-actions">
      <button type="submit" class="submit-btn">Add ${categoryTitle}</button>
      <button type="button" class="cancel-btn" onclick="document.getElementById('add-item-modal').classList.remove('active')">Cancel</button>
    </div>
  `;

  addModal.classList.add('active');
}

// Handles submission of the add item form and updates the catalog
function submitNewItem() {
  const selectedCategory = document.getElementById("categorySelect").value;

  if (selectedCategory === "songs") {
    const title = document.getElementById("new-item-title").value;
    const artist = document.getElementById("new-item-artist").value;
    const genre = document.getElementById("new-item-genre").value;
    const streams = document.getElementById("new-item-streams").value;
    const releaseYear = document.getElementById("new-item-release-year").value;
    const imageUrl = document.getElementById("new-item-image").value || "https://upload.wikimedia.org/wikipedia/commons/c/c0/Music_note_icon.svg";
    const lyrics = document.getElementById("new-item-lyrics").value;

    if (!title || !artist || !genre || !streams || !releaseYear || !lyrics) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    const newSong = {
      title: title,
      artist: artist,
      image: imageUrl,
      notes: [
        `A ${genre} song by ${artist}.`,
        `Released in ${releaseYear}.`,
        `Has ${streams} streams.`
      ],
      details: {
        releaseYear: releaseYear,
        genre: genre,
        duration: "N/A",
        label: "N/A"
      },
      lyrics: lyrics,
      streams: streams
    };

    objects.songs.push(newSong);

  } else if (selectedCategory === "soccer") {
    const name = document.getElementById("new-item-name").value;
    const team = document.getElementById("new-item-team").value;
    const position = document.getElementById("new-item-position").value;
    const age = document.getElementById("new-item-age").value;
    const nationality = document.getElementById("new-item-nationality").value;
    const imageUrl = document.getElementById("new-item-image").value || "https://upload.wikimedia.org/wikipedia/commons/e/e8/Soccer_ball_icon.svg";
    const height = document.getElementById("new-item-height").value;
    const weight = document.getElementById("new-item-weight").value;
    const biography = document.getElementById("new-item-biography").value;
    const dailyRoutine = document.getElementById("new-item-daily-routine").value;

    if (!name || !team || !position || !age || !nationality || !biography) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    const newPlayer = {
      title: name,
      team: team,
      image: imageUrl,
      notes: [
        `${position} for ${team}.`,
        `${age} years old.`,
        `From ${nationality}.`
      ],
      details: {
        birthDate: `January 1, ${new Date().getFullYear() - age}`,
        age: age,
        nationality: nationality,
        position: position,
        height: height || "N/A",
        weight: weight || "N/A"
      },
      biography: biography,
      dailyRoutine: dailyRoutine || "No information available",
      funFacts: ["A new rising star in football."]
    };

    objects.soccer.push(newPlayer);

  } else if (selectedCategory === "podcasters") {
    const name = document.getElementById("new-item-title").value;
    const show = document.getElementById("new-item-show").value;
    const imageUrl = document.getElementById("new-item-image").value || "https://upload.wikimedia.org/wikipedia/commons/4/4f/Podcast_icon.svg";
    const expertise = document.getElementById("new-item-expertise").value;
    const education = document.getElementById("new-item-education").value;
    const biography = document.getElementById("new-item-biography").value;

    if (!name || !show || !expertise || !biography) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    const newPodcaster = {
      title: name,
      show: show,
      image: imageUrl,
      notes: [
        `Host of ${show}.`,
        `Expert in ${expertise}.`,
        `Provides insights on various topics.`
      ],
      details: {
        education: education || "N/A",
        expertise: expertise,
        podcastLaunch: new Date().getFullYear().toString(),
        episodeCount: "New podcast",
        format: "Interview style"
      },
      quotes: [
        "New voices bring new perspectives.",
        "Knowledge is meant to be shared."
      ],
      topEpisodes: [
        "Coming soon"
      ],
      biography: biography,
      links: {}
    };

    objects.podcasters.push(newPodcaster);
  }

  document.getElementById("add-item-modal").classList.remove("active");
  showCards();
}

// Function to delete an item
function deleteItem(category, index) {
  if (confirm(`Are you sure you want to delete this ${category.slice(0, -1)}?`)) {
    objects[category].splice(index, 1);

    const currentCategory = document.getElementById("categorySelect").value;
    if (currentCategory === category) {
      resetFiltersAndSearch();
      displayItems(category);
    }
  }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
  const detailModal = document.getElementById('detail-modal');
  const addModal = document.getElementById('add-item-modal');

  if (event.target === detailModal) {
    closeModal();
  }

  if (event.target === addModal) {
    addModal.classList.remove('active');
  }
});

// Close modals with escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    if (document.getElementById('detail-modal').classList.contains('active')) {
      closeModal();
    }
    if (document.getElementById('add-item-modal').classList.contains('active')) {
      document.getElementById('add-item-modal').classList.remove('active');
    }
  }
});

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  setupLikeSystem();
  showCards();
  document.getElementById("special-content-box").style.display = "none";
});

// Helper function to create social media links HTML
function createSocialLinksHtml(links, type) {
  let html = '<li class="social-links">';

  if (type === 'soccer') {
    if (links.instagram) {
      html += `<a href="${links.instagram}" target="_blank" class="social-link instagram" title="Instagram"><i class="icon-instagram"></i>Instagram</a>`;
    }
    if (links.clubInstagram) {
      html += `<a href="${links.clubInstagram}" target="_blank" class="social-link club-instagram" title="Club Instagram"><i class="icon-instagram"></i>Club</a>`;
    }
    if (links.website) {
      html += `<a href="${links.website}" target="_blank" class="social-link website" title="Official Website"><i class="icon-globe"></i>Website</a>`;
    }
    if (links.transfermarkt) {
      html += `<a href="${links.transfermarkt}" target="_blank" class="social-link transfermarkt" title="Transfermarkt Profile"><i class="icon-stats"></i>Stats</a>`;
    }
  } else if (type === 'podcaster') {
    if (links.twitter) {
      html += `<a href="${links.twitter}" target="_blank" class="social-link twitter" title="Twitter"><i class="icon-twitter"></i>Twitter</a>`;
    }
    if (links.instagram) {
      html += `<a href="${links.instagram}" target="_blank" class="social-link instagram" title="Instagram"><i class="icon-instagram"></i>Instagram</a>`;
    }
    if (links.youtube) {
      html += `<a href="${links.youtube}" target="_blank" class="social-link youtube" title="YouTube"><i class="icon-youtube"></i>YouTube</a>`;
    }
    if (links.website) {
      html += `<a href="${links.website}" target="_blank" class="social-link website" title="Website"><i class="icon-globe"></i>Website</a>`;
    }
    if (links.spotify) {
      html += `<a href="${links.spotify}" target="_blank" class="social-link spotify" title="Spotify"><i class="icon-spotify"></i>Spotify</a>`;
    }
  } else if (type === 'song') {
    if (links.spotify) {
      html += `<a href="${links.spotify}" target="_blank" class="social-link spotify" title="Listen on Spotify"><i class="icon-spotify"></i>Spotify</a>`;
    }
    if (links.appleMusic) {
      html += `<a href="${links.appleMusic}" target="_blank" class="social-link apple-music" title="Listen on Apple Music"><i class="icon-apple"></i>Apple Music</a>`;
    }
    if (links.youtube) {
      html += `<a href="${links.youtube}" target="_blank" class="social-link youtube" title="Watch on YouTube"><i class="icon-youtube"></i>YouTube</a>`;
    }
  }

  html += '</li>';
  return html;
}

// Helper function to parse stream numbers
function parseStreamNumber(streams) {
  if (typeof streams === "string") {
    const lowerCaseStreams = streams.toLowerCase();
    if (lowerCaseStreams.includes("million")) {
      return parseFloat(lowerCaseStreams) * 1_000_000;
    } else if (lowerCaseStreams.includes("billion")) {
      return parseFloat(lowerCaseStreams) * 1_000_000_000;
    }
  }
  return parseFloat(streams) || 0;
}
