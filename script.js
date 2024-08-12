/* responzivní menu */

const menuIcon = document.querySelector('.menu-icon');
const hamburgerIcon = document.querySelector('.fa-solid');
const menuList = document.querySelector('nav');
const shiftedContainer = document.querySelector('.shifted-container');
const header = document.querySelector('header');
const toTop = document.querySelector('.fa-angle-up');

const toggleMenu = () => {

    const menuListTop = window.scrollY;
    menuList.style.top = `${menuListTop}px`;

    if (menuList.classList.contains('open')) {
        menuList.classList.remove('open');
        shiftedContainer.classList.remove('shifted');

    } else {
        menuList.classList.add('open');
        shiftedContainer.classList.add('shifted');
    }

    hamburgerIcon.classList.add('hidden');

    setTimeout(() => {
        if (hamburgerIcon.classList.contains('fa-bars')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
        }
        hamburgerIcon.classList.remove('hidden');
    }, 400);

};

hamburgerIcon.addEventListener('click', toggleMenu);

menuList.addEventListener('click', (event) => {
    if (menuList.classList.contains('open') && event.target.tagName === 'A') {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        toggleMenu();
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 450);
    } else {
        toggleMenu();
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrinked');
        if (menuList.classList.contains('open')) {
            toggleMenu();
        }
    } else {
        header.classList.remove('shrinked');
    }
    
    if (window.scrollY < 200) {
        toTop.classList.remove('show');
    } else {
        toTop.classList.add('show');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const imgContainers = document.querySelectorAll('.img-container');

    imgContainers.forEach(container => {
        container.addEventListener('click', function () {
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
            } else {
                imgContainers.forEach(item => item.classList.remove('expanded'));
                this.classList.add('expanded');
            }
        });
    });
});

/* formulář */

const formular = document.querySelector('form')
const emailCheck = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const submitButton = document.querySelector('form button');
const thankYouMessage = document.querySelector('#thankYouMessage');

formular.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', changeLabelStyle);
    input.addEventListener('focus', changeLabelStyle);
    input.addEventListener('blur', changeLabelStyle);
    input.addEventListener('input', checkFormValidity);
});


function changeLabelStyle(event) {
    const input = event.target;
    const label = document.querySelector(`label[for="${input.id}"]`);

    if (input.value !== "" || input === document.activeElement) {
        label.style.color = 'var(--text-primary)';
        label.style.top = '-2.5rem';
        label.style.left = '0';
        label.style.fontSize = '.8rem';
        input.style.borderBottomColor = 'var(--text-primary)';
    } else {
        label.style.color = '';
        label.style.top = '';
        label.style.left = '';
        label.style.fontSize = '';
    }

    if (event.type === 'blur') {
        label.style.top = '-2.5rem';
        label.style.left = '0';
        label.style.fontSize = '.8rem';
        if (input.value === "") {
            label.style.color = 'red';
            input.style.borderBottomColor = 'red';
        } else {
            label.style.color = 'var(--text-primary)';
            input.style.borderBottomColor = 'var(--text-primary)';
        }

    }

    if (input.type === 'email') {
        if (!emailCheck.test(input.value)) {
            input.style.color = 'red';
        } else {
            input.style.color = 'var(--text-primary)';
        }
    }

    checkFormValidity();
}

function checkFormValidity() {

    const allValid = Array.from(formular.querySelectorAll('input')).every(input => {
        if (input.type === 'email') {
            return emailCheck.test(input.value);
        }
        return input.value.trim() !== "";
    });

    if (allValid) {
        submitButton.classList.add('readyToSend');
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove('readyToSend');
        submitButton.disabled = true;
    }

    return allValid;

}

formular.addEventListener('submit', function (event) {
    event.preventDefault();

    if (checkFormValidity()) {
        const formData = new FormData(formular);

        fetch(formular.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                formular.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                console.log('nepovedlo');
            }
        });
    }
});

/* light/darkmode */

const prepinatko = document.querySelector('.fa-circle-half-stroke');

prepinatko.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        
    }
});


