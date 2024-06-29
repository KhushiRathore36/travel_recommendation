// your-script.js

// Fetch data from the JSON file
fetch('travel_recom.json')
    .then(response => response.json())
    .then(data => {
        // Log the sample data to the console
        console.log(data);

        // Now you can process the data and display it on your web page
        // For example, create HTML elements dynamically and set their content
        // based on the fetched data.
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
// Assuming your JSON data has an array of recommendations
// with properties like 'name', 'description', and 'imageUrl'
data.forEach(recommendation => {
    const recommendationDiv = document.createElement('div');
    recommendationDiv.innerHTML = `
        <h2>${recommendation.name}</h2>
        <p>${recommendation.description}</p>
        <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
    `;
    document.body.appendChild(recommendationDiv);
});
// your-script.js

// Sample data (replace with your actual data)
const beaches = ['beach', 'sandy shore', 'coast'];
const temples = ['temple', 'shrine', 'place of worship'];
const countries = ['India', 'Japan', 'Greece'];

function performSearch() {
    const userInput = document.getElementById('searchInput').value.toLowerCase();

    // Check if the input matches any keyword category
    if (beaches.some(keyword => userInput.includes(keyword))) {
        // Handle beach-related search
        console.log('Perform beach search');
        // Implement your logic to display beach-related results
    } else if (temples.some(keyword => userInput.includes(keyword))) {
        // Handle temple-related search
        console.log('Perform temple search');
        // Implement your logic to display temple-related results
    } else if (countries.some(keyword => userInput === keyword.toLowerCase())) {
        // Handle country-related search
        console.log('Perform country search');
        // Implement your logic to display country-related results
    } else {
        console.log('No matching category found');
        // Display a message indicating no matching category
    }
}
// your-script.js

// Sample data (replace with your actual data)
const recommendations = {
    beach: [
        { name: 'Sandy Beach', description: 'Relax on the golden sands.', imageUrl: 'https://th.bing.com/th/id/OIP.6jhSflIc2kGO-AmvzbaUPgHaEo?rs=1&pid=ImgDetMain' },
        { name: 'Tropical Paradise', description: 'Crystal-clear waters and palm trees.', imageUrl: 'https://cdn.wallpapersafari.com/53/30/z1ntsb.jpg' }
    ],
    temple: [
        { name: 'Ancient Temple', description: 'Explore the rich history of this temple.', imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_349138910_20200117163511.png' },
        { name: 'Peaceful Shrine', description: 'Find tranquility in this serene shrine.', imageUrl: 'https://i.shgcdn.com/fd8a0980-4199-4ada-810c-e283719b9f08/-/format/auto/-/preview/3000x3000/-/quality/lighter/' }
    ],
    country: [
        { name: 'India', description: 'Diverse culture and vibrant traditions.', imageUrl: 'https://th.bing.com/th/id/R.58d7487a920013a0117c85cded1023a9?rik=UB486bFnTaXTWQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f4%2f6%2f1126902-beautiful-hd-wallpaper-of-india-2800x2100-ios.jpg&ehk=OiEuJbbyEj5jqSFHgjTgDUm3FE8vntthC3dtTifmaPI%3d&risl=&pid=ImgRaw&r=0' },
        { name: 'Japan', description: 'Land of cherry blossoms and ancient temples.', imageUrl: 'https://th.bing.com/th/id/OIP.bSnTokC_c4OMgm-bm9OfyQAAAA?rs=1&pid=ImgDetMain' }
    ]
};

function displayRecommendations(keyword) {
    const recommendationsContainer = document.getElementById('recommendations');
    const categoryData = recommendations[keyword.toLowerCase()];

    if (categoryData) {
        categoryData.forEach(recommendation => {
            const recommendationDiv = document.createElement('div');
            recommendationDiv.innerHTML = `
                <h2>${recommendation.name}</h2>
                <p>${recommendation.description}</p>
                <img src="${recommendation.imageUrl}" alt="${recommendation.name}">
            `;
            recommendationsContainer.appendChild(recommendationDiv);
        });
    } else {
        console.error('Invalid keyword:', keyword);
    }
}

// Example usage:
// Call displayRecommendations('beach') when the user enters 'beach' in the search field.
// Call displayRecommendations('temple') for 'temple', and so on.
// your-script.js

// Assuming you have a container for recommendations (e.g., <div id="recommendations">)
const recommendationsContainer = document.getElementById('clearbutton');

// Function to clear recommendations
function clearRecommendations() {
    recommendationsContainer.innerHTML = ''; // Clear the content
}

// Attach the function to the "Clear" button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearRecommendations);

