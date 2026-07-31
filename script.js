function calculateGrade() {

    // Get the values entered by the user
    let cw1 = parseFloat(document.getElementById("cw1").value);
    let cw2 = parseFloat(document.getElementById("cw2").value);
    let weight1 = parseFloat(document.getElementById("weight1").value);
    let weight2 = parseFloat(document.getElementById("weight2").value);

    // Check if all fields are filled in
    if (isNaN(cw1) || isNaN(cw2) || isNaN(weight1) || isNaN(weight2)) {
        alert("Please enter all scores and weight percentages.");
        return;
    }

    // Check that the scores are between 0 and 100
    if (cw1 < 0 || cw1 > 100 || cw2 < 0 || cw2 > 100) {
        alert("Scores must be between 0 and 100.");
        return;
    }

    // Check that the weights are between 0 and 100
    if (weight1 < 0 || weight1 > 100 || weight2 < 0 || weight2 > 100) {
        alert("Weight percentages must be between 0 and 100.");
        return;
    }

    // Check that the total weight equals 100%
    if (Math.abs((weight1 + weight2) - 100) > 0.01) {
        alert("The total weight must equal 100%.");
        return;
    }

    // Calculate weighted average
    let finalScore = (cw1 * (weight1 / 100)) + (cw2 * (weight2 / 100));

    // Decide the classification
    let classification = "";

    if (finalScore > 69.5) {
        classification = "🏆 First Class (1), Distinction (DIS)";
    }
    else if (finalScore >= 60) {
        classification = "🟢 Upper Second Class (2:1), Merit (M)";
    }
    else if (finalScore >= 50) {
        classification = "🟢 Lower Second Class (2:2), Pass";
    }
    else if (finalScore >= 40) {
        classification = "🟢 Third Class (3), Pass";
    }
    else {
        classification = "❌ Fail";
    }

    // Display the results
    document.getElementById("finalScore").textContent = finalScore.toFixed(2) + "%";
    document.getElementById("classification").textContent = classification;

}