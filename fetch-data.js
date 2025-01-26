// Define the async function to fetch user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = '';

    // Create and append the user list
    const userList = document.createElement('ul');
    users.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors during data fetching
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
