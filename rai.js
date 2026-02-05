// rai.js
function createStars() {
    const sections = document.querySelectorAll('.bg-slate-900'); // Aplica nas seções escuras
    sections.forEach(section => {
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 3 + 'px';
            star.style.width = size;
            star.style.height = size;
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
            section.appendChild(star);
        }
    });
}
window.addEventListener('load', createStars);

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Pequeno delay para garantir que a transição seja suave
    setTimeout(() => {
        loader.classList.add('opacity-0');

        // Remove do DOM após a animação para não atrapalhar cliques
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000); // Tempo da transição de opacidade
    }, 1500); // Tempo que o loader fica visível (pode aumentar se quiser)
});

const motivos = [
    "Pelo jeito que você me olha quando está com sono.",
    "Porque você me apoia até nas minhas ideias mais loucas.",
    "Pela sua dedicação em tudo o que faz.",
    "Porque o seu abraço é o meu lugar favorito no mundo.",
    "Pelo seu sorriso que ilumina até o meu pior dia.",
    "Porque você me conhece melhor do que eu mesma.",
    "Pela forma como você me respeita em todos os momentos.",
    "Porque você cozinha com amor e isso sempre chega até mim.",
    "Pela sua paciência quando eu estou confusa ou sensível.",
    "Porque você presta atenção nos pequenos detalhes sobre mim.",
    "Pelo jeito que você me apoia mesmo quando não entende tudo.",
    "Porque você me faz rir nos momentos em que eu mais preciso.",
    "Porque você me escuta sem julgamento.",
    "Pelo cuidado silencioso que você tem comigo.",
    "Porque você sabe exatamente quando eu preciso de colo.",
    "Pela forma como você me faz sentir em paz.",
    "Pelo jeito que você transforma dias comuns em dias especiais.",
    "Porque você me faz sentir segura só por estar perto.",
    "Pela sinceridade com que você fala comigo.",
    "Porque você respeita meus limites e meus sentimentos.",
    "Pelo orgulho que você demonstra quando fala de mim.",
    "Porque você se importa de verdade com o que eu sinto.",
    "Pela calma que você traz quando tudo parece confuso.",
    "Porque você cuida de nós com tanto carinho.",
    "Pelo jeito que você me inclui nos seus planos.",
    "Porque você não desiste quando as coisas ficam difíceis.",
    "Pela forma como você demonstra amor nos pequenos gestos.",
    "Porque você me dá coragem para ser quem eu sou.",
    "Pelo conforto que sua presença me traz.",
    "Porque você me faz sentir em casa.",
    "Pela leveza que você coloca nos meus dias.",
    "Porque amar você é fácil.",
];

function gerarMotivo() {
    const texto = document.getElementById('texto-motivo');
    const container = document.getElementById('motivo-container');

    // Efeito de fade
    container.style.opacity = '0';

    setTimeout(() => {
        const indice = Math.floor(Math.random() * motivos.length);
        texto.innerText = motivos[indice];
        container.style.opacity = '1';
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {

    // Inicialização do Carrossel (Swiper)
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.8 },
        }
    });

    // Funções de Modal
    window.openModal = function (id) {
        const modal = document.getElementById(id);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function (event) {
        // Fecha se clicar fora do card ou se clicar no botão de fechar
        if (event.target.classList.contains('modal') || event.target.tagName === 'BUTTON') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    }

    // Efeito de Reveal Suave nas Seções
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, footer').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
        observer.observe(el);
    });
});
function updateCounter() {
    const startDate = new Date("2025-02-18T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}
setInterval(updateCounter, 1000);