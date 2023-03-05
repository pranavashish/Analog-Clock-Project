/*==================== CLOCK ====================*/
const hour = document.getElementById("clock-hour"),
  minutes = document.getElementById("clock-minutes"),
  seconds = document.getElementById("clock-seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  // We add a rotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000); // 1000 = 1ss

/*==================== CLOCK & DATE TEXT ====================*/

const textHour = document.getElementById("text-hour"),
  textMinutes = document.getElementById("text-minutes"),
  textAmPm = document.getElementById("text-ampm"),
  dateDay = document.getElementById("date-day"),
  dateMonth = document.getElementById("date-month"),
  dateYear = document.getElementById("date-year");

//   dateWeek = document.getElementById('date-day-week'),

// dayweek = date.getDay(),

// We change the hours from 24 to 12 hours and establish whether it is AM or PM

// We detect when it's 0 AM and transform to 12 AM

// Show a zero before hours

// Show time

// Show a zero before the minutes

// Show minutes

// Show am or pm

// If you want to show the name of the day of the week
// let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

// We get the months of the year and show it

// We show the day, the month and the year

// dateWeek.innerHTML = `${week[dayweek]}`

// 1000 = 1s

/*==================== DARK/LIGHT THEME ====================*/

// Previously selected topic (if user selected)

// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic

// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark

// Activate / deactivate the theme manually with the button

// Add or remove the dark / icon theme

// We save the theme and the current icon that the user chose
