/**
 * Catalog Application - Logic and Functionality
 * 
 * This file contains all the functions and logic for the catalog application.
 * Data is imported from data.js for better code organization.
 */

// The data structures are now defined in data.js

// Global variables for filtering and searching
let filteredItems = []; // Store filtered/sorted items
let currentFilter = 'none'; // Track current filter
let currentSearchTerm = ''; // Track current search term

function showCards() {
  const selectedCategory = document.getElementById("categorySelect").value;
  
  // Reset filters and search when changing categories
  resetFiltersAndSearch();
  
  // Get items and show them
  displayItems(selectedCategory);
  
  // Update visible buttons based on category
  updateFeatureButtons(selectedCategory);
  updateFilterOptions(selectedCategory);
}

function displayItems(category, items = null) {
  // If no items provided, use the main data
  const displayedItems = items || objects[category];
  filteredItems = [...displayedItems]; // Store current displayed items
  
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
    card.dataset.index = items ? item.originalIndex : i; // Use original index if available
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

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "✖";
    deleteBtn.title = "Delete item";
    deleteBtn.addEventListener("click", function(e) {
      e.stopPropagation(); // Prevent opening modal
      deleteItem(category, items ? item.originalIndex : i);
    });
    card.querySelector(".card-content").appendChild(deleteBtn);

    // Add click event to show the modal
    card.addEventListener('click', function() {
      const index = parseInt(this.dataset.index);
      openDetailModal(category, index);
    });
  
      cardContainer.appendChild(card);
  }
}

function updateFilterOptions(category) {
  const filterContainer = document.getElementById("filter-container");
  const filterSelect = document.getElementById("filterSelect");
  filterSelect.innerHTML = "";
  
  // Add default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "none";
  defaultOption.textContent = "No Filter";
  filterSelect.appendChild(defaultOption);
  
  // Add category-specific filter options
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
    addFilterOption(filterSelect, "most-achievements", "Most Achievements");
  }

  // Show the filter container
  filterContainer.style.display = "flex";
}

function addFilterOption(select, value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
}

function applyFilter() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const filterValue = document.getElementById("filterSelect").value;
  currentFilter = filterValue;
  
  // Get original or searched items
  let itemsToFilter = [...objects[selectedCategory]];
  
  // Apply search first if there's a search term
  if (currentSearchTerm) {
    itemsToFilter = searchItems(selectedCategory, currentSearchTerm);
  }
  
  // Map original indices before filtering
  itemsToFilter = itemsToFilter.map((item, index) => ({...item, originalIndex: item.originalIndex !== undefined ? item.originalIndex : index}));
  
  // Apply selected filter
  if (filterValue !== "none") {
    itemsToFilter = filterItems(selectedCategory, filterValue, itemsToFilter);
  }
  
  // Display filtered items
  displayItems(selectedCategory, itemsToFilter);
}

function filterItems(category, filterType, items) {
  let filteredResults = [...items];
  
  switch (filterType) {
    case "newest":
      filteredResults.sort((a, b) => parseInt(b.details.releaseYear) - parseInt(a.details.releaseYear));
      break;
    case "oldest":
      filteredResults.sort((a, b) => parseInt(a.details.releaseYear) - parseInt(b.details.releaseYear));
      break;
      case "most-streams":
        // Sort by streams (descending)
        filteredResults.sort((a, b) => {
          const streamsA = parseStreamNumber(a.streams);
          const streamsB = parseStreamNumber(b.streams);
          return streamsB - streamsA;
        });
        break;
  
      case "least-streams":
        // Sort by streams (ascending)
        filteredResults.sort((a, b) => {
          const streamsA = parseStreamNumber(a.streams);
          const streamsB = parseStreamNumber(b.streams);
          return streamsA - streamsB;
        });
        break;
    case "newest-podcast":
      filteredResults.sort((a, b) => parseInt(b.details.podcastLaunch) - parseInt(a.details.podcastLaunch));
      break;
    case "oldest-podcast":
      filteredResults.sort((a, b) => parseInt(a.details.podcastLaunch) - parseInt(b.details.podcastLaunch));
      break;
    case "most-episodes":
      filteredResults.sort((a, b) => parseInt(b.details.episodeCount || 0) - parseInt(a.details.episodeCount || 0));
      break;
    case "youngest":
      filteredResults.sort((a, b) => parseInt(a.details.age) - parseInt(b.details.age));
      break;
    case "oldest":
      filteredResults.sort((a, b) => parseInt(b.details.age) - parseInt(a.details.age));
      break;
    case "most-achievements":
      filteredResults.sort((a, b) => {
        const aAchievements = a.details.achievements.split(',').length;
        const bAchievements = b.details.achievements.split(',').length;
        return bAchievements - aAchievements;
      });
      break;
  }
  
  return filteredResults;
}

function searchItems(category, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const results = objects[category].filter((item, index) => {
    // Save the original index for reference
    item.originalIndex = index;
    
    // Search in title
    if (item.title.toLowerCase().includes(searchTerm)) return true;
    
    // Search in category-specific fields
    if (category === "songs" && item.artist.toLowerCase().includes(searchTerm)) return true;
    if (category === "podcasters" && item.show.toLowerCase().includes(searchTerm)) return true;
    if (category === "soccer" && item.team.toLowerCase().includes(searchTerm)) return true;
    
    // Search in notes
    for (const note of item.notes) {
      if (note.toLowerCase().includes(searchTerm)) return true;
    }
    
    // Search in details
    for (const [key, value] of Object.entries(item.details)) {
      if (value.toString().toLowerCase().includes(searchTerm)) return true;
    }
    
    return false;
  });
  
  return results;
}

function performSearch() {
  const searchTerm = document.getElementById("searchInput").value.trim();
  currentSearchTerm = searchTerm;
  
  const selectedCategory = document.getElementById("categorySelect").value;
  
  if (searchTerm === "") {
    // If search is cleared, reset to showing all items with current filter
    resetSearch();
    return;
  }
  
  let results = searchItems(selectedCategory, searchTerm);
  
  // Apply filter if one is selected
  if (currentFilter !== "none") {
    results = filterItems(selectedCategory, currentFilter, results);
  }
  
  // Display results
  displayItems(selectedCategory, results);
}

function resetSearch() {
  document.getElementById("searchInput").value = "";
  currentSearchTerm = "";
  
  const selectedCategory = document.getElementById("categorySelect").value;
  
  // Apply only the filter if one is active
  if (currentFilter !== "none") {
    let items = [...objects[selectedCategory]].map((item, index) => ({...item, originalIndex: index}));
    items = filterItems(selectedCategory, currentFilter, items);
    displayItems(selectedCategory, items);
  } else {
    // Display all items if no filter
    displayItems(selectedCategory);
  }
}

function resetFiltersAndSearch() {
  // Reset filter dropdown
  document.getElementById("filterSelect").value = "none";
  currentFilter = "none";
  
  // Reset search
  document.getElementById("searchInput").value = "";
  currentSearchTerm = "";
}

function updateFeatureButtons(category) {
  // Hide all buttons first
  document.getElementById("quotes-button").style.display = "none";
  document.getElementById("facts-button").style.display = "none";
  document.getElementById("lyrics-button").style.display = "none";
  
  // Hide the special content box initially
  document.getElementById("special-content-box").classList.remove("active");
  document.getElementById("special-content-box").style.display = "none";
  
  // Show relevant buttons based on category
  if (category === "songs") {
    document.getElementById("lyrics-button").style.display = "block";
  } else if (category === "soccer") {
    document.getElementById("facts-button").style.display = "block";
  } else if (category === "podcasters") {
    document.getElementById("quotes-button").style.display = "block";
  }
}

function getRandomQuote() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const specialContentBox = document.getElementById("special-content-box");
  const specialContent = document.getElementById("special-content");
  const contentAttribution = document.querySelector(".content-attribution");
  
  // Only show quotes for podcasters category
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

function openDetailModal(category, index) {
  const modal = document.getElementById('detail-modal');
  const item = objects[category][index];
  
  // Set the modal content
  document.getElementById('modal-image').src = item.image;
  document.getElementById('modal-title').textContent = item.title;
  
  // Clear previous content
  document.getElementById('modal-stats-list').innerHTML = '';
  document.getElementById('modal-list').innerHTML = '';
  document.getElementById('modal-career-list').innerHTML = '';
  document.getElementById('modal-bio-text').innerHTML = '';
  document.getElementById('modal-extras-content').innerHTML = '';
  
  // Handle different content types
  if (category === 'songs') {
    document.getElementById('modal-subtitle').textContent = item.artist;
    
    // Set up quick stats
    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Artist:</strong> ${item.artist}</li>
      <li><strong>Genre:</strong> ${item.details.genre}</li>
      <li><strong>Streams:</strong> ${item.streams}</li>
    `;
    
    // Add streaming links if available
    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'song');
      statsList.innerHTML += socialLinksHtml;
    }
    
    // Set career title to "Song Info"
    document.getElementById('modal-career-title').textContent = 'Song Recognition';
    
    // Add career highlights
    const careerList = document.getElementById('modal-career-list');
    if (item.awards) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Awards:</strong> ${item.awards}`;
      careerList.appendChild(li);
    }
    
    // Add streaming info
    const streamLi = document.createElement('li');
    streamLi.innerHTML = `<strong>Streaming Performance:</strong> ${item.streams} streams across platforms`;
    careerList.appendChild(streamLi);
    
    // Set biography to lyrics with toggle
    document.querySelector('#modal-bio h3').textContent = 'Lyrics';
    const bioText = document.getElementById('modal-bio-text');
    
    // Create container for lyrics
    const lyricsContainer = document.createElement('div');
    
    // Create the lyrics paragraph
    const lyricsParagraph = document.createElement('p');
    lyricsParagraph.textContent = item.lyrics;
    lyricsParagraph.id = 'lyrics-short';
    lyricsContainer.appendChild(lyricsParagraph);
    
    // Create the full lyrics paragraph (initially hidden)
    const fullLyricsParagraph = document.createElement('p');
    fullLyricsParagraph.textContent = item.fullLyrics || item.lyrics;
    fullLyricsParagraph.id = 'lyrics-full';
    fullLyricsParagraph.style.display = 'none';
    lyricsContainer.appendChild(fullLyricsParagraph);
    
    // Create toggle button
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
    
    // Remove "You Might Also Like" section (recommendations)
    document.getElementById('modal-extras-title').textContent = '';
    document.getElementById('modal-extras-content').innerHTML = '';
  } else if (category === 'soccer') {
    document.getElementById('modal-subtitle').textContent = item.team;
    
    // Calculate age
    const birthDateParts = item.details.birthDate.split(',')[0].trim().split(' ');
    const birthMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(birthDateParts[0]) + 1;
    const birthDay = parseInt(birthDateParts[1]);
    const birthYear = parseInt(birthDateParts[2]);
    const birthDateStr = `${birthMonth}/${birthDay}/${birthYear}`;
    const age = calculateAge(birthDateStr);
    
    // Set up quick stats with additional information
    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Position:</strong> ${item.details.position}</li>
      <li><strong>Age:</strong> ${age} years</li>
      <li><strong>Height:</strong> ${item.details.height || 'Not available'}</li>
      <li><strong>Weight:</strong> ${item.details.weight || 'Not available'}</li>
      <li><strong>Nationality:</strong> ${item.details.nationality}</li>
    `;
    
    // Add social media links if available
    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'soccer');
      statsList.innerHTML += socialLinksHtml;
    }
    
    // Set biography
    document.getElementById('modal-bio-text').textContent = item.biography;
    document.querySelector('#modal-bio h3').textContent = 'Biography';
    
    // Add career highlights
    document.getElementById('modal-career-title').textContent = 'Daily Routine';
    document.getElementById('modal-career-list').innerHTML = `<li>${item.dailyRoutine}</li>`;
    
    // Remove Fun Facts section
    document.getElementById('modal-extras-title').textContent = '';
    document.getElementById('modal-extras-content').innerHTML = '';
    
  } else if (category === 'podcasters') {
    document.getElementById('modal-subtitle').textContent = item.show;
    
    // Set up quick stats
    const statsList = document.getElementById('modal-stats-list');
    statsList.innerHTML = `
      <li><strong>Show:</strong> ${item.show}</li>
      <li><strong>Expertise:</strong> ${item.details.expertise || 'N/A'}</li>
      <li><strong>Episodes:</strong> ${item.details.episodeCount || 'N/A'}</li>
      <li><strong>Launch Year:</strong> ${item.details.podcastLaunch || 'N/A'}</li>
    `;
    
    // Add social media links if available
    if (item.links) {
      const socialLinksHtml = createSocialLinksHtml(item.links, 'podcaster');
      statsList.innerHTML += socialLinksHtml;
    }
    
    // Set biography
    document.getElementById('modal-bio-text').textContent = item.biography || '';
    document.querySelector('#modal-bio h3').textContent = 'Biography';
    
    // Add career section with education
    document.getElementById('modal-career-title').textContent = 'Show Details';
    const careerList = document.getElementById('modal-career-list');
    careerList.innerHTML = `
      <li><strong>Education:</strong> ${item.details.education || 'N/A'}</li>
      <li><strong>Format:</strong> ${item.details.format || 'N/A'}</li>
    `;
    
    // Set up top episodes in recommendations section
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
  
  // Populate details
  const modalList = document.getElementById('modal-list');
  
  const details = item.details;
  for (const [key, value] of Object.entries(details)) {
    // Skip height and weight for soccer players since we already display them in stats
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
  
  // Show the modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
}

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

// Function to open the add item form
function openAddItemForm() {
  const addModal = document.getElementById('add-item-modal');
  const selectedCategory = document.getElementById("categorySelect").value;
  
  // Set form fields based on category
  document.getElementById('add-item-title').textContent = `Add New ${selectedCategory.slice(0, -1).charAt(0).toUpperCase() + selectedCategory.slice(0, -1).slice(1)}`;
  
  // Show/hide fields based on category
  const songFields = document.querySelectorAll('.song-field');
  const soccerFields = document.querySelectorAll('.soccer-field');
  const podcastFields = document.querySelectorAll('.podcast-field');
  
  songFields.forEach(field => field.style.display = 'none');
  soccerFields.forEach(field => field.style.display = 'none');
  podcastFields.forEach(field => field.style.display = 'none');
  
  if (selectedCategory === 'songs') {
    songFields.forEach(field => field.style.display = 'block');
  } else if (selectedCategory === 'soccer') {
    soccerFields.forEach(field => field.style.display = 'block');
  } else if (selectedCategory === 'podcasters') {
    podcastFields.forEach(field => field.style.display = 'block');
  }
  
  // Set form category
  document.getElementById('add-item-form').dataset.category = selectedCategory;
  
  // Show modal
  addModal.classList.add('active');
}

// Function to submit new item
function submitNewItem() {
  const selectedCategory = document.getElementById("categorySelect").value;

  // Get form inputs
  const title = document.getElementById("new-item-title").value;
  const artist = document.getElementById("new-item-artist").value;
  const genre = document.getElementById("new-item-genre").value;
  const streams = document.getElementById("new-item-streams").value;
  const releaseYear = document.getElementById("new-item-release-year").value;
  const picture = document.getElementById("new-item-picture").value; // Optional
  const lyrics = document.getElementById("new-item-lyrics").value;

  // Validate required inputs
  if (!title || !artist || !genre || !streams || !releaseYear || !lyrics) {
    alert("Please fill in all required fields marked with *.");
    return;
  }

  // Create a new song object
  const newSong = {
    title: title,
    artist: artist,
    details: {
      genre: genre,
      releaseYear: releaseYear,
    },
    streams: streams,
    lyrics: lyrics,
    image: picture || "https://via.placeholder.com/150", // Use placeholder if no picture provided
    notes: ["Newly added song"], // Default note
  };

  // Add the new song to the songs array
  if (selectedCategory === "songs") {
    objects.songs.push(newSong);
  }

  // Close the modal
  document.getElementById("add-item-modal").classList.remove("active");

  // Refresh the display to include the new song
  showCards();
}

// Function to delete an item
function deleteItem(category, index) {
  if (confirm(`Are you sure you want to delete this ${category.slice(0, -1)}?`)) {
    // Remove the item from the array
    objects[category].splice(index, 1);
    
    // Refresh the display
    const currentCategory = document.getElementById("categorySelect").value;
    if (currentCategory === category) {
      // Reset filters and search to show updated list
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
      showCards();
  // Initially hide the special content box
  document.getElementById("special-content-box").style.display = "none";
});

// Helper function to create social media links HTML
function createSocialLinksHtml(links, type) {
  let html = '<li class="social-links">';
  
  if (type === 'soccer') {
    // Soccer player social links
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
    // Podcaster social links
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
    // Song streaming links
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
  return parseFloat(streams) || 0; // Default to 0 if parsing fails
}
