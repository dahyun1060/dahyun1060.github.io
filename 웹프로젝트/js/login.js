// 쿠키를 설정하는 함수
function setCookie(name, value, minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    console.log(`Set cookie: ${name}=${value}; expires=${expires}; path=/`);
}

// 쿠키를 읽는 함수
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// 쿠키를 삭제하는 함수
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
    console.log(`Erased cookie: ${name}`);
}

// 페이지 로드 시 쿠키를 확인하고 환영 메시지를 표시하는 함수
function checkLogin() {
    var userID = getCookie("userID");
    if (userID) {
        var loginList = document.getElementById('loginlist');
        loginList.innerHTML = `<p>${userID}님 환영합니다!</p> <button id="logoutBtn">로그아웃</button>`;
        
        // 로그아웃 버튼 클릭 시 쿠키 삭제
        document.getElementById('logoutBtn').addEventListener('click', function() {
            eraseCookie("userID");
            window.location.href = 'index.html';
        });
    }
}

window.onload = function() {
    checkLogin();

    var form = document.getElementById('loginForm');

    form.onsubmit = function(event) {
        event.preventDefault(); // 기본 폼 제출 동작을 막음

        var userID = form.userID.value.trim();

        if (userID === "") {
            alert("아이디를 입력하세요.");
            form.userID.focus();
            return false;
        }

        // 쿠키에 아이디 저장 (30분간 유효)
        setCookie("userID", userID, 30);

        // 아이디님 환영합니다! 메시지 띄우기
        var loginList = document.getElementById('loginlist');
        loginList.innerHTML = `<p>${userID}님 환영합니다!</p> <li id="logoutBtn">로그아웃</li>`;

        // 로그아웃 버튼 클릭 시 쿠키 삭제
        document.getElementById('logoutBtn').addEventListener('click', function() {
            eraseCookie("userID");
            window.location.href = 'index.html';
        });
    };
}