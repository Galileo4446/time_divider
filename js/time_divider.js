function main() {

// submitで実行できるように設定！！

  var start = 0;
  var end = 0;
  var start_time = new Date(2019, 0, 1, 8, 50, 00);
  var end_time = new Date(2019, 0, 1, 10, 20, 00);
  var split = 0;

  start = Number(document.start.start.value);
  end = Number(document.end.end.value);
  split = Number(document.split.split.value);

  // start_timeとend_timeをセット
  start_time.setMinutes(start_time.getMinutes() + calculateStartTime(start));
  end_time.setMinutes(end_time.getMinutes() + calculateEndTime(end));


  var unit_time = unitTime(start_time, end_time, split);
  var text = `<span>1番目　${start_time.getHours()}:${('0' + start_time.getMinutes()).slice(-2)}`;

  for (var i = 0; i < split - 1; i++) {
    start_time.setMinutes(start_time.getMinutes() + unit_time);
    text += " - ";
    text += `${start_time.getHours()}:${('0' + start_time.getMinutes()).slice(-2)}</span><br>`;
    text += `<span>${i+2}番目　${start_time.getHours()}:${('0' + start_time.getMinutes()).slice(-2)}`;
  }
  text += ` - ${end_time.getHours()}:${('0' + end_time.getMinutes()).slice(-2)}</span>`;

  if ((unit_time / 60) >= 1) {
    text += `<br><span>1バンドあたり${Math.floor(unit_time / 60)}時間${Math.floor(unit_time % 60)}分</span>`;
  }else {
    text += `<br><span>1バンドあたり${Math.floor(unit_time)}分</span>`;
  }

  var ans = document.getElementById('ans');
  ans.innerHTML = text;

  if (start == 0 || end == 0 || split == 0) {
    ans.innerHTML = "すべて選択してください！";
  }else if (unit_time <= 0) {
    ans.innerHTML = "始まりと終わりが逆になっています。";
  }


}

function unitTime(start_time, end_time, split){
  // start_time.setMinutes(start_time.getMinutes() + 100);
  var unit_time;

  unit_time = (end_time - start_time) / (60000 * split);
  return unit_time;
};

function calculateStartTime(start) {
  var additional_time;

  switch (start) {
    case 1:
      additional_time = 0;
      break;
    case 2:
      additional_time = 100;
      break;
    case 20:
      additional_time = 190;
      break;
    case 3:
      additional_time = 250;
      break;
    case 4:
      additional_time = 350;
      break;
    case 5:
      additional_time = 450;
      break;
    case 6:
      additional_time = 550;
      break;
    case 7:
      additional_time = 650;
      break;
    default:
      additional_time = 0;
      break;
  }
  return additional_time;
}

function calculateEndTime(end) {
  var additional_time;

  switch (end) {
    case 1:
      additional_time = 0;
      break;
    case 2:
      additional_time = 100;
      break;
    case 20:
      additional_time = 160;
      break;
    case 3:
      additional_time = 250;
      break;
    case 4:
      additional_time = 350;
      break;
    case 5:
      additional_time = 450;
      break;
    case 6:
      additional_time = 550;
      break;
    case 7:
      additional_time = 700;
      break;
    default:
      additional_time = 0;
      break;
  }
  return additional_time;
}

function resetRadio() {
  for (i = 1; i <= 7; i++) {
    document.getElementById(i + 'start').checked = false;
    document.getElementById(i + 'end').checked = false;
    document.getElementById(i + 'split').checked = false;
  }
  document.getElementById('2dstart').checked = false;
  document.getElementById('2dend').checked = false;
  var ans = document.getElementById('ans');
  ans.innerHTML = "";


}
