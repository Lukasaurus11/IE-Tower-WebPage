// Demonstrating the use of Objects
const facilitiesData = {
    "Main Entrance": "This is the main entrance for the IE Tower, here you can find the reception desk. In this area you can always find students waiting by the elevators.",
    "Swimming Pool": "Along other sporting facilities like the gym or the basketball court, the IE Tower has a swimming pool. It's a great place to relax and have fun.",
    "Classroom": "There are multiple classrooms in the different floors, and while they are not all the same, they all look like what is shown below.",
};

// Function to create a facility element
const createFacilityElement = (facilityName) => {
    const facilityElement = document.createElement("div");
    facilityElement.classList.add("facility");
    facilityElement.textContent = facilityName;
    facilityElement.addEventListener("click", () => exploreFacility(facilityName));
    return facilityElement;
};

// Function to display facility information
const exploreFacility = (facilityName) => {
    // Remove all the content under the ie-tower-container
    const ieTowerContainer = document.getElementById("ie-tower-container");
    ieTowerContainer.innerHTML = "";

    const explorationContainer = document.getElementById("exploration-container");
    explorationContainer.innerHTML = `<p>${facilitiesData[facilityName]}</p>`;

    // Remove the flex attribute from the exploration-container
    explorationContainer.style.display = "block";

    // Add an empty space to separate the text from the image
    explorationContainer.appendChild(document.createElement("br"));
    const facilityImage = document.createElement("img");
    facilityImage.src = `images/${facilityName}.jpg`;
    explorationContainer.appendChild(facilityImage);

    // Add a button to go back to the main page
    explorationContainer.appendChild(document.createElement("br"));
    const backButton = document.createElement("button");
    backButton.textContent = "Return";
    backButton.classList.add('facility')
    backButton.style.fontSize = "20px";
    backButton.addEventListener("click", resetFacilities);
    explorationContainer.appendChild(backButton);
};

// Initialize the facilities
const initializeFacilities = () => {
    const explorationContainer = document.getElementById("exploration-container");
    if (explorationContainer.style.display === "block") {
        explorationContainer.style.display = "flex";
    }

    for (const facilityName in facilitiesData) {
        const facilityElement = createFacilityElement(facilityName);
        explorationContainer.appendChild(facilityElement);
    }

    const ieTowerContainer = document.getElementById("ie-tower-container");
    // Add the IE tower image to the ie-tower div
    const ieTowerImage = document.createElement("img");
    ieTowerImage.src = `images/ie_tower.jpg`;
    ieTowerContainer.appendChild(ieTowerImage);
};


const resetFacilities = () => {
    const explorationContainer = document.getElementById("exploration-container");
    explorationContainer.innerHTML = "";
    initializeFacilities();
};

// Run the initialization function when the page loads
window.onload = initializeFacilities;
