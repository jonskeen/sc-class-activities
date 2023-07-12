let checksRemaining = 3;

const checkIn = () => {
  console.log("TIMER")

  if (checksRemaining) {
    console.log("Just Checking");
    checksRemaining--;
  } else {
    clearInterval(interval);
  }
};

const interval = setInterval(checkIn, 2000);
