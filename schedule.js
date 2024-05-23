document.addEventListener('DOMContentLoaded', function() {
  const timeSelect = document.getElementById('time');
  const intervals = generateTimeIntervals(9, 17, 15); // 9 AM to 5 PM in 15-minute increments

  intervals.forEach(interval => {
      const option = document.createElement('option');
      option.value = interval;
      option.text = interval;
      timeSelect.appendChild(option);
  });

  function generateTimeIntervals(startHour, endHour, incrementMinutes) {
      const intervals = [];
      for (let hour = startHour; hour < endHour; hour++) {
          for (let minutes = 0; minutes < 60; minutes += incrementMinutes) {
              const formattedTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
              intervals.push(formattedTime);
          }
      }
      return intervals;
  }
});
