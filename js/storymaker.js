// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdjective = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");

// Constants for final buttons and p tags
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const storyDisplay = document.getElementById("story");
const studentId = document.getElementById("studentId");

// Variables for pre-defined arrays
const nouns = ["dog", "cat", "bird", "tree", "book"];
const verbs = ["run", "jump", "sing", "read", "sleep"];
const adjectives = ["happy", "sad", "funny", "smart", "small"];
const places = ["beach", "mountain", "city", "forest", "park"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    chosenNoun1.textContent = nouns[noun1Count];
    noun1Count = (noun1Count + 1) % nouns.length;
}

function verb_on_click() {
    chosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns[noun2Count];
    noun2Count = (noun2Count + 1) % nouns.length;
}

function setting_on_click() {
    chosenSetting.textContent = places[settingCount];
    settingCount = (settingCount + 1) % places.length;
}
// Function to reset all chosen elements and the displayed story
function reset_all() {
    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyDisplay.textContent = "";
}


// concatenate the user story and display
function playback_on_click() {
    const story = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}`;
    storyDisplay.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `${getRandomElement(nouns)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(places)}`;
    storyDisplay.textContent = randomStory;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Event Listeners (added for clarity)
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);

// Add your student id/name dynamically
document.addEventListener("DOMContentLoaded", function () {
    studentId.textContent = "Student ID: 200538493"; // Replace with your actual student ID
});
