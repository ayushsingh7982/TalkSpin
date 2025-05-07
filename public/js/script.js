
  const ageRange = document.getElementById('ageRange');
  const ageDisplay = document.getElementById('ageDisplay');
  
  // Initialize display
  ageDisplay.textContent = ageRange.value;
  
  // Update display on slider movement
  ageRange.addEventListener('input', function() {
    ageDisplay.textContent = this.value;
  });
