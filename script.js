'use strict';
// 日本時間の曜日に基づく通常予定。臨時休業や現在の営業状態は断定しない。
function updateSchedule() {
  const now = new Date();
  const day = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', weekday: 'short' }).format(now);
  const date = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', month: 'numeric', day: 'numeric' }).format(now);
  const schedule = day === '木' ? '定休日' : (day === '土' || day === '日') ? '11:00〜14:00（昼のみ）' : '11:00〜14:00／17:00〜20:00';
  document.getElementById('today').textContent = `${date}（${day}）の通常予定：${schedule}`;
}
updateSchedule();
setInterval(updateSchedule, 60000);
