/*
we gonna make the units freaky
the number will be minutes of time spent in front of the screen
units will be:
minutes regretted (random multi from 1.5x to 3x)
hopes/dreams lost (small integer)
people who still love you (starts from like 100 and then we go down exponentially)
*/
const minutesParagraph = document.querySelector("#minutes-paragraph");
const hopesParagraph = document.querySelector("#hopes-paragraph");
const peopleParagraph = document.querySelector("#people-paragraph");
const inputEl = document.querySelector("#doomscroll-minutes");
const errorMessage = document.querySelector(".error-text");
const convertBtn = document.querySelector("#convert-button");
// Display
convertBtn.addEventListener("click", function(){
    const inputtedMinutes = inputEl.valueAsNumber;
    if (inputtedMinutes){
        errorMessage.style.visibility = "hidden";
        displayCalculations(inputtedMinutes);
    }
    else {
        errorMessage.style.visibility = "visible";
    }
});
function displayCalculations(doomscrollingMinutes) {
    const regrettedMinutes = regrettedMinutesConversion()
    const lostHopes = hopesConversion();
    const lostPeople = peopleConversion();
    minutesParagraph.innerHTML = `You're <i>${doomscrollingMinutes}</i> minutes of daily doomscrolling translates to <em>${regrettedMinutes}</em> regretted minutes in a day.`;
    hopesParagraph.innerHTML = `You're <i>${doomscrollingMinutes}</i> minutes of daily doomscrolling translates to <em>${lostHopes}</em> lost hopes and dreams since you started.`;
    peopleParagraph.innerHTML = `You're <i>${doomscrollingMinutes}</i> minutes of daily doomscrolling translates to <em>${lostPeople}</em> people not caring about you anymore since you started.`;
    
}
// Conversions
// only multiplies minutes by 1.5-3;
function regrettedMinutesConversion() {
    const minutes = inputEl.valueAsNumber;
    // create random multi from 1.5-3
    const randomMultiplier = Math.random() * 1.5 + 1.5;
    return Math.round(minutes*randomMultiplier);
}
//just divides minutes by 30 and returns closest integer
function hopesConversion() {
    const minutes = inputEl.valueAsNumber;
    return Math.round(minutes/30);
}
    /* no this function does NOT make people join cults.
    instead, we divide the amount of minutes by 60 and return an integer representing peoples' lost interest.
    Multiplied by a random multiplier because idk lol im silly
    */
function peopleConversion() {
    const minutes = inputEl.valueAsNumber;
    const randomMultiplier = Math.random() * 2 + 2;
    return Math.floor(minutes/60);
}