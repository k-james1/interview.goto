
// コンテナ要素とスライド要素を取得
const wrapper = document.querySelector(".js-wrapper");
const slides = gsap.utils.toArray(".js-scroll");

// コンテナの幅を取得
const wrapperWidth = wrapper.offsetWidth;

// 横スクロールアニメーションの設定
gsap.to(slides, {
  xPercent: -100 * (slides.length - 1), // -X軸方向に移動
  ease: "none", // アニメーションのイージング(noneは定速)
  scrollTrigger: {
    trigger: wrapper, // アニメーション開始のトリガー要素
    pin: true, // 要素を固定
    scrub: 1, // スクロール量に合わせてアニメーション
    start: "top top", // アニメーションが始まる位置
    end: `+=${wrapperWidth}`, // アニメーションが終わる位置
    anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
    invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
  },
});





// .chapterクラスを持つ要素をすべて取得
const chapters = document.querySelectorAll('.chapter');

// 取得した各要素に対してアニメーションを適用
chapters.forEach((chapter) => {
  gsap.fromTo(
    chapter, // アニメーションを適用する要素
    {autoAlpha: 0, y: 50}, // アニメーション開始時の状態（透明度0、y方向に50px下にずらす）
    {
      duration: 1, // アニメーションの時間（秒）
      autoAlpha: 1, // アニメーション終了時の透明度（1で完全に不透明）
      y: 0, // アニメーション終了時のy方向の位置（0でオリジナルの位置）
      ease: 'power2.out', // イージングの種類（power2.outで終わりに向けて徐々にスピードが落ちる）
      scrollTrigger: {
        trigger: chapter, // スクロールのトリガーとなる要素
        start: 'top 80%', // アニメーションが開始するスクロール位置（チャプター要素の上端が画面の80%の位置に来たら開始）
        toggleActions: 'play none none none', // スクロールによるアニメーションの動作（playで再生、noneで何もしない）
        once: true, // アニメーションを一度だけ実行
      }
    }
  );
});


gsap.to(".marker", {
  scrollTrigger: {
    trigger: ".marker", // アニメーションが始まるトリガーとなる要素
    start: "top 80%", // アニメーションが始まる位置
    toggleClass: {
      targets: ".marker", // クラスを切り替える対象の要素
      className: "active", // クラス名 "active" を付け外し
    },
  },
})




gsap.from(".BIG",{
  scrollTrigger:{
    trigger:".BIG",
    start:"top 60%",
    end:"bottom bottom",
    scrub: true,
  },
  duration:0.1,
  backgroundColor:"#e1f8e1",
  ease:"none",
});