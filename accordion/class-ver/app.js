(() => {
	class Accordion {
		constructor(obj){
			// this.elm = obj.elm;
			this.$elm = document.querySelector(obj.elm);
			this.$trigger = this.$elm.getElementsByTagName('a');

			const triggerLen = this.$trigger.length;
			let index = 0;
			while (index < triggerLen) {
				this.$trigger[index].addEventListener('click', (e) => this.clickHandle(e));
				index++;
			}
		}

		toggle(elm){
			const $this = elm;
			const $content = $this.nextElementSibling;

			if($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display = 'block';
			}
		}

		clickHandle(e){
			e.preventDefault();
			this.toggle(e.currentTarget);
		}

	}

	new Accordion({
		elm: '#js-accordion'
	});
})();