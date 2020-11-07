(()=>{

  class Tab {
    constructor(obj){
      this.$doc = document;
      this.$tab = $doc.getElementById('js-tab');
      this.$nav = $tab.querySelectorAll('[data-nav]');
      this.$content = $tab.querySelectorAll('[data-content]');
      this.ACTIVE_CLASS = 'is-active';
      this.navLen = $nav.length;

      // init();
      handleClick()

      //全nav要素に対して関数を適応・発火
      let index = 0;
      while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));  
        index++;
      }
    }

    //初期化
    init(){
      $content[0].style.display = 'block';
    }

    //クリックしたら起こるイベント
    handleClick(e){
      e.preventDefault();

      //クリックされたnavとそのdataを取得
      const $this = e.target;
      const targetVal = $this.dataset.nav;

      //対象外のnav, content全て一旦リセットする
      let index = 0;
      while(index < navLen){
        $content[index].style.display = 'none';
        $nav[index].classList.remove(ACTIVE_CLASS);
        index++;
      }

      //対象のコンテンツをアクティブ化する
      $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
      $nav[targetVal].classList.add(ACTIVE_CLASS);
    }
  }

  new Tab({
    elm: '#js-accordion'
  });

})();