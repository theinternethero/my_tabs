function tabs(tabcontents, wrapper, tabs) {
    let tabContent = document.getElementsByClassName(tabcontents),
        info = document.getElementsByClassName(wrapper)[0],
        tab = document.getElementsByClassName(tabs);
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
        console.log(tabContent);
        console.log(info);
        console.log(tab);
    }
    hideTabContent(1);
    
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains(tabs)) {

            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    console.log(target);
                    console.log(tab[i]);
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

tabs('arg1', 'arg2', 'arg3');
// Данная функция имеет три аргумента, для корректной работы скрипта необходимо вместо данных аргументов подставить следующее:
// tabs('общий класс таб контентов', 'родитель/обертка всех табов', 'общий класс табов');
// Пример:
// tabs('tabcontents__item', 'tabs__wrapper', 'tabs__item');