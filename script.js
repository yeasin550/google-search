function search() {
  const searchInput = document.getElementById("searchInput");
  const searchTerm = searchInput.value;

  // Check if the input field is empty
  if (searchTerm.trim() === "") {
    alert("Please type some text * enter  a search Button");
    return; // Stop execution if the input is empty
  }

  // Display search term in the main section
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = `
    <div class="flex items-center">
      <p class="text-2xl font-bold mb-4">Search results for: ${searchTerm}</p>
      <button onclick="deleteSearchResult()" class="ml-2 p-1 mb-5 bg-red-500 text-white rounded">Delete</button>
    </div>
  `;
}

function clearSearchInput() {
  const searchInput = document.getElementById("searchInput");
  searchInput.value = "";
}

function deleteSearchResult() {
  const mainSection = document.querySelector("main");
  mainSection.innerHTML = "";
}
