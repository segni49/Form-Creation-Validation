// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
  
    try {
      // Fetch Data Using try-catch
      const response = await fetch(apiUrl);
      const users = await response.json();
  
      // Clear the Loading Message
      dataContainer.innerHTML = '';
  
      // Create and Append User List
      const userList = document.createElement('ul');
  
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      dataContainer.appendChild(userList);
  
    } catch (error) {
      // Error Handling
      dataContainer.innerHTML = 'Failed to load user data.';
    }
  }
  
  // Invoke fetchUserData on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  