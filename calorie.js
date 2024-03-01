function calculateCalories() {
    var weight = parseFloat(document.getElementById("weight").value);
    var duration = parseFloat(document.getElementById("duration").value);

    if (isNaN(weight) || isNaN(duration)) {
      document.getElementById("result").innerText = "Please enter valid numbers.";
      return;
    }

    var caloriesBurnedPerMinute = 5; // Assuming a constant rate of calorie burn

    var totalCaloriesBurned = caloriesBurnedPerMinute * duration;
    var formattedCalories = totalCaloriesBurned.toFixed(2);

    document.getElementById("result").innerText = "You burned " + formattedCalories + " calories.";
  }
