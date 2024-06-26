// Define a JavaScript object containing the states and their respective districts
var statesAndDistricts = {
    "Andhra Pradesh": [
        "Anantapur",
        "Chittoor",
        "East Godavari"
    ],
    "Arunachal Pradesh": [
        "Tawang",
        "West Kameng",
        "East Kameng"
    ],
    "Assam": [
        "Baksa",
        "Barpeta",
        "Bongaigaon"
    ],
    "Bihar": [
        "Patna",
        "Gaya",
        "Muzaffarpur"
    ],
    "Chhattisgarh": [
        "Raipur",
        "Bilaspur",
        "Korba"
    ],
    "Goa": [
        "North Goa",
        "South Goa",
        "Pernem"
    ],
    "Gujarat": [
        "Ahmedabad",
        "Surat",
        "Vadodara"
    ],
    "Haryana": [
        "Gurgaon",
        "Faridabad",
        "Hisar"
    ],
    "Himachal Pradesh": [
        "Shimla",
        "Kullu",
        "Mandi"
    ],
    "Jammu and Kashmir": [
        "Srinagar",
        "Jammu",
        "Anantnag"
    ],
    "Jharkhand": [
        "Ranchi",
        "Hazaribagh",
        "Bokaro"
    ],
    "Karnataka": [
        "Bengaluru Urban",
        "Mysuru",
        "Belagavi"
    ],
    "Kerala": [
        "Thiruvananthapuram",
        "Kochi",
        "Kozhikode"
    ],
    "Madhya Pradesh": [
        "Indore",
        "Bhopal",
        "Gwalior"
    ],
    "Maharashtra": [
        "Mumbai",
        "Pune",
        "Nagpur"
    ],
    "Manipur": [
        "Imphal West",
        "Imphal East",
        "Thoubal"
    ],
    "Meghalaya": [
        "East Khasi Hills",
        "West Garo Hills",
        "Jaintia Hills"
    ],
    "Mizoram": [
        "Aizawl",
        "Champhai",
        "Kolasib"
    ],
    "Nagaland": [
        "Kohima",
        "Mokokchung",
        "Zunheboto"
    ],
    "Odisha": [
        "Bhubaneswar",
        "Cuttack",
        "Berhampur"
    ],
    "Punjab": [
        "Ludhiana",
        "Amritsar",
        "Jalandhar"
    ],
    "Rajasthan": [
        "Jaipur",
        "Jodhpur",
        "Udaipur"
    ],
    "Sikkim": [
        "East Sikkim",
        "West Sikkim",
        "South Sikkim"
    ],
    "Tamil Nadu": [
        "Chennai",
        "Coimbatore",
        "Madurai"
    ],
    "Telangana": [
        "Hyderabad",
        "Warangal",
        "Karim"
    ],

    "Tripura": [
        "West Tripura", 
        "South Tripura", 
        "Gomati"
    ],

    "Uttar Pradesh": [
        "Lucknow", 
        "Agra", 
        "Varanasi"
    ],

    "Uttarakhand": [
        "Dehradun", 
        "Haridwar", 
        "Nainital"
    ],

    "West Bengal": [
        "Nadia", 
        "Howrah", 
        "North 24 Parganas"
    ]

};

// Function to populate the "States" drop-down list
function populateStates() {
    var statesDropdown = document.getElementById("states");
    for (var state in statesAndDistricts) {
        var option = document.createElement("option");
        option.text = state;
        statesDropdown.add(option);
    }
}

// Function to populate the "Districts" drop-down list based on the selected state
function populateDistricts() {
    var statesDropdown = document.getElementById("states");
    var districtsDropdown = document.getElementById("districts");
    districtsDropdown.innerHTML = "";
    var selectedState = statesDropdown.value;
    var districts = statesAndDistricts[selectedState];
    for (var i = 0; i < 3 && i < districts.length; i++) {
        var option = document.createElement("option");
        option.text = districts[i];
        districtsDropdown.add(option);
    }
}

// Function to display the information of the selected district
function displayDistrictInfo() {
    var statesDropdown = document.getElementById("states");
    var districtsDropdown = document.getElementById("districts");
    var selectedState = statesDropdown.value;
    var selectedDistrict = districtsDropdown.value;
    var population, sexRatio;
    // Get the population and sex ratio data from some source based on the selected state and district
    // For this example, we will just generate random data
    population = Math.floor(Math.random() * 1000000) + 100000;
    sexRatio = Math.floor(Math.random() * 50) + 900;

    // Display the information in a brief manner
    var districtInfoLabel = document.getElementById("district-info");
    districtInfoLabel.style.color = "black";
    districtInfoLabel.innerHTML = `Population of ${selectedDistrict} district in ${selectedState} is ${population} and the sex ratio is ${sexRatio}.`;
}