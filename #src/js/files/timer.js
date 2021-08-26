function startTimer() {
  const my_timer = document.getElementById("my_timer");
  const time = my_timer.innerHTML;
  const arr = time.split(":");

  let h = arr[0];
  let m = arr[1];
  let s = arr[2];

  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        alert("Время вышло");
        window.location.reload();
        return;
      }
      h--;
      m = 60;
      if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  }
  else s--;
  if (s < 10) s = "0" + s;
  
  document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
  setTimeout(startTimer, 1000);
}













// 30:00  29:59 - sec = 29:58     min:sec