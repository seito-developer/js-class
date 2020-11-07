(() => {

	const $elm = document.querySelector('#js-accordion');
	const $trigger = $elm.getElementsByTagName('a');

	const triggerLen = $trigger.length;
	let index = 0;
	while (index < triggerLen) {
		$trigger[index].addEventListener('click', (e) => clickHandle(e));
		index++;
	}

	const toggle = (elm) => {
		const $this = elm;
		const $content = $this.nextElementSibling;

		if($content.style.display === 'block'){
			$content.style.display = 'none';
		} else {
			$content.style.display = 'block';
		}
	};

	const clickHandle = (e) => {
		e.preventDefault();
		toggle(e.currentTarget);
	};

})();