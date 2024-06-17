window.onload = function() {
    var f = document.forms['login']; // 'login'이라는 이름의 폼을 가져옴
    var isID = /^[a-z0-9]{4,12}$/; // 정규표현식 공백 제거

    f.onsubmit = function(event) {
        event.preventDefault(); // 기본 폼 제출 동작을 막음

        if (f.names.value.trim() == "") {
            alert("이름을 입력 하세요.");
            f.names.focus();
            return false;
        }
        if (f.userid.value.trim() == "") {
            alert("아이디를 입력 하세요.");
            f.userid.focus();
            return false;
        }
        if (f.userpw.value.trim() == "") {
            alert("비밀번호를 입력 하세요.");
            f.userpw.focus();
            return false;
        }
        if (f.userpw1.value.trim() == "") {
            alert("비밀번호를 입력 하세요.");
            f.userpw1.focus();
            return false;
        }
        if (f.userpw.value.trim() != f.userpw1.value.trim()) {
            alert("비밀번호가 서로 다릅니다.");
            f.userpw1.value = "";
            f.userpw1.focus();
            return false;
        }
        if (f.mails1.value.trim() == "") {
            alert("이메일을 입력 하세요.");
            f.mails1.focus();
            return false;
        }
        if (f.mails2.options[f.mails2.selectedIndex].value == "") {
            alert("이메일 주소를 선택하세요.");
            f.mails2.focus();
            return false;
        }
        if (!document.getElementById("br2").checked &&
            !document.getElementById("br3").checked &&
            !document.getElementById("br4").checked) {
            alert("한개 이상 골라주세요.");
            document.getElementById("br1").focus();
            return false;
        }
        if (!f.chk1.checked) {
            alert("이용약관에 동의해 주세요.");
            f.chk1.focus();
            return false;
        }
        if (!f.chk2.checked) {
            alert("개인정보취급방침에 동의해 주세요.");
            f.chk2.focus();
            return false;
        }

        // 모든 검증을 통과한 경우 confirm.html로 이동
        window.location.href = 'confirm.html';
        return true; // 검증을 통과하면 폼을 제출합니다.
    };
};



function all_chk(){
    var all = document.getElementById("br1");
    if(all.checked)
    {
         document.getElementById("br2").checked = true;
         document.getElementById("br3").checked = true;
         document.getElementById("br4").checked = true;
    }
    else
    {
        document.getElementById("br2").checked = false;
        document.getElementById("br3").checked = false;
        document.getElementById("br4").checked = false;
    }
}

document.getElementById('checkidbtn').addEventListener('click', function() {
    alert('사용 가능한 아이디입니다');
});
