'use strict';

{
    // idの要素取得　.getElementById('')
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const video = document.getElementById('video');
    // classの要素取得　.querySelector('.')
    const overlay = document.querySelector('.overlay');

    // クリックしたら
    open.addEventListener('click', () => {

        // 2本線をクリックしたらmenuなどが表示される
        overlay.classList.add('show');

        // 2本線が消える
        open.classList.add('hidden');

        // 動画がクリックできなくなる
        video.classList.add('nottouch');
    });

    // クリックしたら
    close.addEventListener('click', () => {

        // ×クリックしたらmenuなどが消える
        overlay.classList.remove('show');

        // ×が表示される
        open.classList.remove('hidden');

        // クリックできるようになる
        video.classList.remove('nottouch');
    });

    // 背景（overlayの空白部分）クリック → メニュー非表示
    overlay.addEventListener('click', (e) => {
        // e.target はクリックされた要素
        // overlay-container の中をクリックした場合は閉じない
        if (e.target === overlay) {
            overlay.classList.remove('show');
            open.classList.remove('hidden');
            video.classList.remove('nottouch');

        }
    });


    // 画面全体で overlay 以外をクリックしたら閉じる
    document.addEventListener('click', (e) => {
        // overlay が表示されている時だけ動作
        if (overlay.classList.contains('show')) {

            // e.target が overlay内 でも openボタン でも closeボタン でもない場合に閉じる
            if (!overlay.contains(e.target) && e.target !== open && e.target !== close) {
                overlay.classList.remove('show');
                open.classList.remove('hidden');
                video.classList.remove('nottouch');

            }
        }
    });
}