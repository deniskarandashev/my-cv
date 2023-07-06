function onNavItemClick(id) {
    const el = document.querySelector(id);
    el.classList.add('dynamic-nav');
    setTimeout(()=> {
        el.classList.remove('dynamic-nav');
    }, 1000);
}

function prepareName() {
    let name = 'Denis_Karandashev';
    name = name.split('');

    const el = document.querySelector('#roundedName');
    name.forEach((letter, index) => {
        const s = document.createElement('span');
        if (letter === '_') {
            letter = ' ';
        }
        s.innerText = letter;
        s.classList.add(`char${index}`);
        el.appendChild(s);
    });
}

const goToTopButton = document.querySelector('.arrow-up');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

prepareName();