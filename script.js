function calculateGrade() {

    // Get the values entered by the user
    let cw1 = parseFloat(document.getElementById("cw1").value);
    let cw2 = parseFloat(document.getElementById("cw2").value);

    // Check if both fields are filled in
    if (isNaN(cw1) || isNaN(cw2)) {
        alert("Please enter both CW1 and CW2 scores.");
        return;
    }

    // Check that the scores are between 0 and 100
    if (cw1 < 0 || cw1 > 100 || cw2 < 0 || cw2 > 100) {
        alert("Scores must be between 0 and 100.");
        return;
    }

    // Calculate weighted average
    let finalScore = (cw1 * 0.333) + (cw2 * 0.667);

    // Decide the classification
    let classification = "";

    if (finalScore > 69.5) {
        classification = "First Class (1), Distinction (DIS)";
    }
    else if (finalScore >= 60) {
        classification = "Upper Second Class (2:1), Merit (M)";
    }
    else if (finalScore >= 50) {
        classification = "Lower Second Class (2:2), Pass";
    }
    else if (finalScore >= 40) {
        classification = "Third Class (3), Pass";
    }
    else {
        classification = "Fail";
    }

    // Display the results
    document.getElementById("finalScore").textContent = finalScore.toFixed(2) + "%";
    document.getElementById("classification").textContent = classification;

}