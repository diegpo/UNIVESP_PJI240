// ===========================
// Login
// ===========================
const btnAcessar = document.getElementById('btnAcessar');
const loginForm = document.getElementById('loginForm');
const voltar = document.getElementById('voltar');
const entrar = document.getElementById('entrar');
const esqueceu = document.getElementById('esqueceu');

if (btnAcessar && loginForm) {
    btnAcessar.addEventListener('click', () => {
        btnAcessar.style.display = 'none';
        loginForm.classList.add('active');
    });
}

if (voltar && btnAcessar && loginForm) {
    voltar.addEventListener('click', () => {
        loginForm.classList.remove('active');
        setTimeout(() => { btnAcessar.style.display = 'inline-block'; }, 500);
    });
}

//Criada view no Django
//if (entrar) {
    //entrar.addEventListener('click', () => { window.location.href = "dashboard.html"; });
//}

if (esqueceu) {
    esqueceu.addEventListener('click', () => { alert('Recuperação de senha não implementada.'); });
}

// ===========================
// Logout
// ===========================
function logout() { window.location.href = "index.html"; }

// ===========================
// Data/Hora dinâmica
// ===========================
function updateDateTime() {
    const elem = document.getElementById('datetime');
    if (!elem) return;
    const now = new Date();
    const formatted = now.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });
    elem.innerText = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ===========================
// Submenus Dashboard
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll('.menu-item.has-submenu > .menu-link');

    menus.forEach(menu => {
        const submenu = menu.nextElementSibling;
        if (!submenu) return;

        submenu.style.overflow = 'hidden';
        submenu.style.maxHeight = '0';
        submenu.style.display = 'none';
        submenu.style.transition = 'max-height 0.3s ease';

        menu.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelectorAll('.submenu').forEach(sm => {
                if (sm !== submenu) {
                    sm.style.maxHeight = '0';
                    setTimeout(() => sm.style.display = 'none', 300);
                }
            });

            if (submenu.style.maxHeight === '0px' || submenu.style.maxHeight === '') {
                submenu.style.display = 'flex';
                submenu.style.flexDirection = 'column';
                const height = submenu.scrollHeight;
                submenu.style.maxHeight = height + 'px';
            } else {
                submenu.style.maxHeight = '0';
                setTimeout(() => submenu.style.display = 'none', 300);
            }
        });
    });
});
