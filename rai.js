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
    "Porque você lembra de coisas que eu achei que ninguém notaria.",
    "Pelo jeito que você me espera sem reclamar.",
    "Porque você me deixa errar sem me diminuir.",
    "Pela forma como você cuida do tempo que passamos juntos.",
    "Porque você respeita meus silêncios sem tentar preenchê-los.",
    "Pelo jeito que você me olha quando acha que eu não estou vendo.",
    "Porque você se esforça para aprender o que é importante pra mim.",
    "Pela atenção que você dá às minhas histórias repetidas.",
    "Porque você me trata com gentileza mesmo nos dias difíceis.",
    "Pelo cuidado que você tem com as palavras quando fala comigo.",
    "Porque você faz questão de me incluir nas decisões.",
    "Pela forma como você reage quando eu estou vulnerável.",
    "Porque você não tenta me mudar.",
    "Pelo jeito que você segura as minhas inseguranças.",
    "Porque você se importa com quem eu sou quando ninguém está olhando.",
    "Pela maneira como você me incentiva sem pressionar.",
    "Porque você me dá espaço sem se afastar.",
    "Pelo respeito com que você lida com minhas fragilidades.",
    "Porque você se preocupa com o meu futuro junto do seu.",
    "Pela forma como você valoriza o que sentimos.",
    "Porque você cuida da nossa relação com maturidade.",
    "Pelo jeito que você me escolhe até nos dias comuns.",
    "Porque você se responsabiliza pelo que sente.",
    "Pela forma como você me protege emocionalmente.",
    "Porque você constrói, não apenas promete.",
    "Pelo jeito que você permanece.",
    "Porque você não transforma amor em peso.",
    "Pela segurança emocional que você cria.",
    "Porque você faz o amor crescer, não sufocar.",
    "Pelo compromisso silencioso que você tem comigo.",
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
window.onscroll = function () {
    updateProgressBar();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    // Atualiza a largura da barra azul
    document.getElementById("progress-bar").style.width = scrolled + "%";
}









// Monitora o scroll para mostrar/esconder o botão
window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');

    if (window.scrollY > 400) {
        // Mostra o botão com animação
        btn.classList.remove('opacity-0', 'translate-y-10', 'scale-0');
        btn.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    } else {
        // Esconde o botão
        btn.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
        btn.classList.add('opacity-0', 'translate-y-10', 'scale-0');
    }
});

// Função para subir suavemente
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}