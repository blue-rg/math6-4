// ===== 선생님이 채우는 파일 =====
// 1) 파이어베이스 콘솔 → 프로젝트 설정 → 내 앱(웹 </>) → 'SDK 설정 및 구성'의 firebaseConfig 값을 아래에 그대로 붙여 넣어요.
// 2) databaseURL이 꼭 있어야 해요(Realtime Database를 만든 뒤 생겨요).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAoYoFDJ4PDIkSPxgOlQmFIcfY68rvuqnk",
  authDomain: "math6-4.firebaseapp.com",
  databaseURL: "https://math6-4-default-rtdb.firebaseio.com",
  projectId: "math6-4",
  storageBucket: "math6-4.firebasestorage.app",
  messagingSenderId: "105937486017",
  appId: "1:105937486017:web:852024f80fb56961a09440"
};
// 선생님 메뉴 비밀번호(기록·코인 초기화, 기록 내려받기). 비워 두면 선생님 메뉴가 꺼져요.
// 주의: 이 파일은 누구나 볼 수 있어서 완벽한 잠금은 아니에요. 학생에게 이 파일 주소를 알려 주지 마세요.
window.TEACHER_PIN = '4658';

// 게임 시간(평일, 한국 시간). 이 시간 밖에서는 게임이 잠겨요. 쓰지 않으면 08:30-15:00이에요.
// 선생님 메뉴에서 반별로 바꾸거나 잠깐 열 수도 있어요. 바꾸려면 아래 줄 앞의 // 를 지우고 시간을 고쳐요.
// window.PLAY_HOURS = '08:30-15:00';
// 잠금을 아예 끄려면 아래 줄 앞의 // 를 지워요.
// window.PLAY_LOCK = false;
