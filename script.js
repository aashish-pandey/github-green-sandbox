const startInput = document.getElementById("start-date");
const endInput = document.getElementById("end-date");
const generateBtn = document.getElementById("generate");
const grid = document.getElementById("calendar-grid");
const selectedList = document.getElementById("selected-dates");

const selectedDates = new Set();

generateBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  selectedDates.clear();
  selectedList.innerHTML = "";

  const startDate = new Date(startInput.value);
  const endDate = new Date(endInput.value);
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((endDate - startDate) / MS_PER_DAY);

  for (let i = 0; i <= totalDays; i++) {
    const date = new Date(startDate.getTime() + i * MS_PER_DAY);
    const weekday = (date.getDay() + 6) % 7;
    const week = Math.floor(i / 7);

    const cell = document.createElement("div");
    cell.className = "cell";
    cell.title = date.toISOString().split("T")[0];
    cell.dataset.date = cell.title;
    cell.style.gridRowStart = weekday + 1;
    cell.style.gridColumnStart = week + 1;

    cell.addEventListener("click", () => {
      cell.classList.toggle("green");
      const dateStr = cell.dataset.date;
      if (selectedDates.has(dateStr)) {
        selectedDates.delete(dateStr);
      } else {
        selectedDates.add(dateStr);
      }
      renderList();
    });

    grid.appendChild(cell);
  }
});

function renderList() {
  selectedList.innerHTML = "";
  Array.from(selectedDates)
    .sort()
    .forEach((date) => {
      const li = document.createElement("li");
      li.textContent = date;
      selectedList.appendChild(li);
    });
}
