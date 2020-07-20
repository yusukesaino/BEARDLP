'use struct';

{
    // 送信ボタン押下時処理
    document.getElementById('submit-text').addEventListener('click', () => {

       // フォーム入力値取得
        let corporate = document.getElementById('corporate').value;
        let name = document.getElementById('name').value;
        let mail = document.getElementById('mail').value;
        let phone = document.getElementById('phone').value;
        let contact = document.getElementById('contact').value;
        let agree = document.getElementById('agree').checked;

        // メールアドレス形式
        const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

        //　バリデーションチェク
        let warn1 = (corporate === "") ? false : true;
        let warn2 = (name === "") ? false : true;
        let warn3 = (mail === "") ? false : true;
        let warn4 = (!reg.test(mail)) ? false : true;
        let warn5 = !agree ? false : true;
        let warn0_text = document.getElementById('warn0');
        let warn1_text = document.getElementById('warn1');
        let warn2_text = document.getElementById('warn2');
        let warn3_text = document.getElementById('warn3');
        let warn4_text = document.getElementById('warn4');
        let warn5_text = document.getElementById('warn5');

        if (!warn1 || !warn2 || !warn3 || !warn4 || !warn5) {
            warn0_text.classList.remove('hide');
        } else {
            warn0_text.classList.add('hide');

            // メール送信APIにPOST送信

            // 送信後送信完了画面に遷移
            window.location.href = 'complete.html';
        }

        if (!warn1) {
            warn1_text.classList.remove('hide');
        } else {
            warn1_text.classList.add('hide');
        }

        if (!warn2) {
            warn2_text.classList.remove('hide');
        } else {
            warn2_text.classList.add('hide');
        }

        if (!warn3) {
            warn3_text.classList.remove('hide');
        } else {
            warn3_text.classList.add('hide');
        }

        if (!warn4) {
            warn4_text.classList.remove('hide');
        } else {
            warn4_text.classList.add('hide');
        }

        if (!warn5) {
            warn5_text.classList.remove('hide');
        } else {
            warn5_text.classList.add('hide');
        }

    })
}
