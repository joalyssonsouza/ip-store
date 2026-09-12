import { useState, useEffect, useRef, useCallback } from "react";

import logoMark from "./assets/images/logo-mark.jpg";
import fachadaHero from "./assets/images/fachada-hero.jpg";
import lojaAberto from "./assets/images/loja-aberto.jpg";
import explorarIphones from "./assets/images/explorar-iphones.jpg";
import explorarIpadTecnologia from "./assets/images/explorar-ipad-tecnologia.jpg";
import explorarPerfumes from "./assets/images/explorar-perfumes.jpg";
import lojaAmbiente from "./assets/images/loja-ambiente.jpg";
import lojaTecnologia from "./assets/images/loja-tecnologia.jpg";
import explorarRoupas from "./assets/images/explorar-roupas.jpg";
import iphoneBanner from "./assets/images/iphone-banner.jpg";
import iphone15ProNovo from "./assets/images/iphone-15-pro-novo.jpg";
import iphone17ProMaxNovo from "./assets/images/iphone-17-pro-max-novo.jpg";
import iphone16Novo from "./assets/images/iphone-16-novo.jpg";
import iphone14ProMaxNovo from "./assets/images/iphone-14-pro-max-novo.jpg";
import iphone15Novo from "./assets/images/iphone-15-novo.jpg";
import iphone16ProMaxNovo from "./assets/images/iphone-16-pro-max-novo.jpg";

import iphone14Seminovo from "./assets/images/iphone-14-seminovo.jpg";
import iphone16ProMaxSeminovo from "./assets/images/iphone-16-pro-max-seminovo.jpg";
import iphone15ProSeminovo from "./assets/images/iphone-15-pro-seminovo.jpg";
import iphone12Seminovo from "./assets/images/iphone-12-seminovo.jpg";
import iphone15PlusSeminovo from "./assets/images/iphone-15-plus-seminovo.jpg";
import iphoneXrSeminovo from "./assets/images/iphone-xr-seminovo.jpg";
import lojaBalcao from "./assets/images/a-loja-balcao.jpg";
import lojaInteriorA from "./assets/images/loja-interior-a.jpg";
import trocaXiaomi from "./assets/images/troca-xiaomi.jpg";
import lojaInterior from "./assets/images/loja-interior.jpg";
import tecnologiaCompleta from "./assets/images/tecnologia-completa.jpg";
import tecnologiaEstante from "./assets/images/tecnologia-estante.jpg";
import acessoriosCabos from "./assets/images/acessorios-cabos.jpg";
import perfumesVitrine from "./assets/images/perfumes-vitrine.jpg";
import modaBanner from "./assets/images/moda-banner.jpg";
import modaArara from "./assets/images/moda-arara.jpg";
import modaDobradas from "./assets/images/moda-dobradas.jpg";
import modaAcessorios from "./assets/images/moda-acessorios.jpg";
import modaLoja from "./assets/images/moda-loja.jpg";
import myslf from "./assets/images/myslf.jpg";
import cocoMademoiselle from "./assets/images/coco-mademoiselle.jpg";
import fame from "./assets/images/fame.jpg";
import azzaroPourHomme from "./assets/images/azzaro-pour-homme.jpg";
import theMostWanted from "./assets/images/the-most-wanted.jpg";
import goodGirl from "./assets/images/good-girl.jpg";
import vipRose from "./assets/images/212-vip-rose.jpg";
import vipMen from "./assets/images/212-vip-men.jpg";
import oneMillion from "./assets/images/1-million.jpg";
import clubDeNuitIntenseMan from "./assets/images/club-de-nuit-intense-man.jpg";
import ipadBanner from "./assets/images/ipad-banner.jpg";
import ipadCaixa from "./assets/images/ipad-caixa.jpg";
import smartwatchFone from "./assets/images/smartwatch-fone.jpg";
import airpods from "./assets/images/airpods.jpg";
import ipadSmartwatch from "./assets/images/ipad-smartwatch.jpg";
import ipad from "./assets/images/ipad.jpg";
import smartwatch from "./assets/images/smartwatch.jpg";

type Page =
  "home" | "iphones" | "ipads" | "perfumes" | "roupas" | "aloja" | "contato";
type PhoneFilter = "todos" | "novos" | "seminovos" | "pro" | "promax";

// ── Dados reais confirmados da loja ─────────────────────────────────────────
const WHATSAPP_NUMBER = "5573998532228";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const IG_MAIN_HANDLE = "@ip_storecell";
const IG_MAIN_URL = "https://instagram.com/ip_storecell";
const IG_ROUPAS_HANDLE = "@ip_storeroupas";
const IG_ROUPAS_URL = "https://instagram.com/ip_storeroupas";
const ADDRESS_LINE_1 = "Praça Castro Alves, Barrolândia";
const ADDRESS_LINE_2 = "Belmonte – BA";
const MAPS_QUERY = encodeURIComponent(
  "Praça Castro Alves, Barrolândia, Belmonte - BA",
);
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" + MAPS_QUERY;
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const HOURS_TEXT = "Segunda a sábado, das 8h às 17h";
const DELIVERY_TEXT =
  "Entregas para Belmonte e região. Consulte disponibilidade e condições pelo WhatsApp.";
const GUARANTEE_TEXT = "90 dias de garantia.";
const INSTALLMENTS_TEXT = "Até 18x no cartão.";
const TRADE_TEXT =
  "Tem um Xiaomi usado? Use como parte do pagamento na compra do seu iPhone, mediante avaliação.";

// Abre o WhatsApp com uma mensagem pré-preenchida relacionada ao item consultado.
function openWhatsAppFor(itemLabel: string) {
  const text = `Olá! Vim pelo site e gostaria de consultar disponibilidade de: ${itemLabel}.`;
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
}

// ── Animation hook ──────────────────────────────────────────────────────────
function useFade(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
  up = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  up?: boolean;
}) {
  const { ref, visible } = useFade();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : up ? "translateY(28px)" : "none",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Ícone do WhatsApp (reutilizado em vários CTAs) ──────────────────────────
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ── Logo IP Store (foto real do símbolo, sem redesenho) ─────────────────────
function Logo({
  onClick,
  size = "md",
}: {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}) {
  const heights: Record<string, string> = { sm: "h-8", md: "h-10", lg: "h-14" };
  const textSizes: Record<string, string> = {
    sm: "text-[10px]",
    md: "text-[12px]",
    lg: "text-[15px]",
  };
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <img
        src={logoMark}
        alt="IP Store"
        className={`${heights[size]} w-auto object-contain rounded-[3px]`}
      />
      <div className="leading-none text-left">
        <div
          className={`${textSizes[size]} font-semibold tracking-[0.26em] uppercase text-white`}
        >
          IP STORE
        </div>
        <div className="text-[8px] tracking-[0.22em] uppercase mt-1 text-gray-400">
          Barrolândia · Belmonte · BA
        </div>
      </div>
    </button>
  );
}

// ── Shared UI ────────────────────────────────────────────────────────────────
function Btn({
  children,
  variant = "primary",
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase px-7 py-3.5 transition-all duration-200 cursor-pointer";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    outline:
      "border border-white/50 text-white hover:border-white hover:bg-white/5",
    ghost: "text-white/70 hover:text-white underline underline-offset-4",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-px bg-white/30" />
      <span className="text-[9px] tracking-[0.3em] uppercase text-gray-500 font-mono">
        {children}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-white/5 my-0" />;
}

function WhatsAppButtonSmall({
  label = "Consultar disponibilidade",
}: {
  label?: string;
}) {
  return (
    <button
      className="w-full text-[9px] tracking-[0.18em] uppercase text-gray-400 border border-white/10 py-2.5 hover:border-white/30 hover:text-white transition-all duration-200"
      onClick={() => window.open(WHATSAPP_URL, "_blank")}
    >
      {label}
    </button>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const IPHONE_IMG = {
  promax:
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=800&fit=crop&auto=format",
  pro: "https://images.unsplash.com/photo-1709178295004-893b38ec2a4b?w=600&h=800&fit=crop&auto=format",
  std: "https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?w=600&h=800&fit=crop&auto=format",
  alt: "https://images.unsplash.com/photo-1758578938566-c986f710feb6?w=600&h=800&fit=crop&auto=format",
};

type iPhone = {
  id: number;
  model: string;
  storage?: string;
  color?: string;
  condition: "novo" | "seminovo";
  filter: "promax" | "pro" | "padrao";
  img: string;
  battery?: string;
};

// Catálogo representativo — a partir do iPhone XR, conforme confirmado.
// Fotos por modelo ainda são ilustrativas (placeholder) até fotos reais por aparelho serem fornecidas.
const iphones: iPhone[] = [
  // NOVOS
  {
    id: 1,
    model: "iPhone 15 Pro",
    condition: "novo",
    filter: "pro",
    img: iphone15ProNovo,
  },
  {
    id: 2,
    model: "iPhone 17 Pro Max",
    condition: "novo",
    filter: "promax",
    img: iphone17ProMaxNovo,
  },
  {
    id: 3,
    model: "iPhone 16",
    condition: "novo",
    filter: "padrao",
    img: iphone16Novo,
  },
  {
    id: 4,
    model: "iPhone 14 Pro Max",
    condition: "novo",
    filter: "promax",
    img: iphone14ProMaxNovo,
  },
  {
    id: 5,
    model: "iPhone 15",
    condition: "novo",
    filter: "padrao",
    img: iphone15Novo,
  },
  {
    id: 6,
    model: "iPhone 16 Pro Max",
    condition: "novo",
    filter: "promax",
    img: iphone16ProMaxNovo,
  },

  // SEMINOVOS
  {
    id: 7,
    model: "iPhone 14",
    condition: "seminovo",
    filter: "padrao",
    img: iphone14Seminovo,
    battery: "91%",
  },
  {
    id: 8,
    model: "iPhone 16 Pro Max",
    condition: "seminovo",
    filter: "promax",
    img: iphone16ProMaxSeminovo,
    battery: "90%",
  },
  {
    id: 9,
    model: "iPhone 15 Pro",
    condition: "seminovo",
    filter: "pro",
    img: iphone15ProSeminovo,
    battery: "89%",
  },
  {
    id: 10,
    model: "iPhone 12",
    condition: "seminovo",
    filter: "padrao",
    img: iphone12Seminovo,
    battery: "85%",
  },
  {
    id: 11,
    model: "iPhone 15 Plus",
    condition: "seminovo",
    filter: "padrao",
    img: iphone15PlusSeminovo,
    battery: "88%",
  },
  {
    id: 12,
    model: "iPhone XR",
    condition: "seminovo",
    filter: "padrao",
    img: iphoneXrSeminovo,
    battery: "82%",
  },
];

// ── Header ───────────────────────────────────────────────────────────────────
function Header({
  activePage,
  onNavigate,
}: {
  activePage: Page;
  onNavigate: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: "Início", page: "home" },
    { label: "iPhones", page: "iphones" },
    { label: "Tecnologia", page: "ipads" },
    { label: "Perfumes", page: "perfumes" },
    { label: "Roupas", page: "roupas" },
    { label: "A Loja", page: "aloja" },
    { label: "Contato", page: "contato" },
  ];

  const navigate = useCallback(
    (page: Page) => {
      onNavigate(page);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [onNavigate],
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background:
          scrolled || mobileOpen ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
        <Logo onClick={() => navigate("home")} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 ${
                activePage === page
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href={IG_MAIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className="block h-px w-5 bg-current transition-all duration-300 origin-center"
                style={{
                  transform: mobileOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "none",
                }}
              />
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block h-px w-5 bg-current transition-all duration-300 origin-center"
                style={{
                  transform: mobileOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: mobileOpen ? "500px" : "0" }}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-5 border-t border-white/5">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-left text-[11px] tracking-[0.22em] uppercase transition-colors ${
                activePage === page ? "text-white" : "text-gray-500"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex gap-5 pt-4 border-t border-white/5">
            <a
              href={IG_MAIN_URL}
              className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-[0.18em] uppercase"
            >
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-[0.18em] uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ── HOME PAGE ────────────────────────────────────────────────────────────────

function HeroSection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="relative min-h-[78vh] md:min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src={fachadaHero}
          alt="Fachada da IP Store"
          className="w-full h-full object-cover opacity-95"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-0 pb-20 md:pb-16 w-full">
        <div className="max-w-2xl">
         <div
          className="flex flex-col items-start sm:flex-row gap-3"
          style={{ animation: 'fadeUp 0.8s ease 0.65s both' }}
        >
            <div className="w-8 h-px bg-white/25" />
            <span className="text-[9px] tracking-[0.35em] uppercase text-gray-400 font-mono">
              Barrolândia · Belmonte · BA
            </span>
          </div>

          <h1
            className="font-serif text-3xl md:text-7xl lg:text-[88px] leading-[1.02] text-white mb-5"
            style={{ animation: "fadeUp 0.8s ease 0.25s both" }}
          >
            IP Store
          </h1>

          <p
            className="text-lg md:text-2xl text-gray-300 mb-3 font-light tracking-wide"
            style={{ animation: "fadeUp 0.8s ease 0.4s both" }}
          >
            Tecnologia, estilo e confiança.
          </p>

          <p
            className="text-sm text-gray-500 mb-12 max-w-md leading-relaxed"
            style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
          >
            iPhones, iPads, acessórios, perfumes e muito mais.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{ animation: "fadeUp 0.8s ease 0.65s both" }}
          >
            <Btn
              variant="primary"
              className="text-[8px] px-4 py-3"
              onClick={() => onNavigate('iphones')}
            >
              Conheça nossos produtos
            </Btn>
            <Btn
              variant="outline"
              className="text-[8px] px-4 py-3"
              onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Falar no WhatsApp
            </Btn>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-95">
        <div
          className="w-px h-12 bg-white/50"
          style={{ animation: "pulse 2s infinite" }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function CategoriesSection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-14">
          <SectionLabel>Categorias</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            O que você procura,
            <br />
            <em>a gente tem.</em>
          </h2>
        </FadeIn>

        {/* Editorial grid — hierarquia: iPhones > iPads/Tecnologia > Perfumes > Roupas */}
        <div className="grid grid-cols-2 gap-3 bg-white/5">
          {/* iPhones — large feature */}
          <FadeIn
            delay={0.1}
            className="group relative overflow-hidden bg-[#0a0a0a] aspect-[4/5] md:row-span-2 md:aspect-auto cursor-pointer"
            up={false}
          >
            <div
              onClick={() => onNavigate("iphones")}
              className="absolute inset-0"
            >
              <img
                src={explorarIphones}
                alt="iPhones na IP Store"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <p className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-mono mb-3">
                  Principal categoria
                </p>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-3">
                  iPhones
                </h3>
                <p className="text-sm text-gray-400 mb-6 max-w-xs">
                  A partir do iPhone XR. Lacrados e seminovos, com consulta de
                  disponibilidade.
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">
                  Explorar
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* iPads & Tecnologia */}
          <FadeIn
            delay={0.15}
            className="group relative overflow-hidden bg-[#111] aspect-[4/3] cursor-pointer"
            up={false}
          >
            <div
              onClick={() => onNavigate("ipads")}
              className="absolute inset-0"
            >
              <img
                src={explorarIpadTecnologia}
                alt="iPads, Apple Watch, AirPods e JBL"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 md:p-8">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                  iPads & Tecnologia
                </h3>
                <p className="text-sm text-gray-400 mb-5">
                  Apple Watch, AirPods, JBL e acessórios.
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">
                  Explorar
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bottom row — two smaller */}
          <div className="grid grid-cols-2 gap-px bg-white/5">
            <FadeIn
              delay={0.2}
              className="group relative overflow-hidden bg-[#0e0e0e] aspect-square cursor-pointer"
              up={false}
            >
              <div
                onClick={() => onNavigate("perfumes")}
                className="absolute inset-0"
              >
                <img
                  src={explorarPerfumes}
                  alt="Perfumes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                    Perfumes
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 hidden md:block">
                    Masculinos e femininos.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">
                    Explorar
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.25}
              className="group relative overflow-hidden bg-[#0e0e0e] aspect-square cursor-pointer"
              up={false}
            >
              <div
                onClick={() => onNavigate("roupas")}
                className="absolute inset-0"
              >
                <img
                  src={explorarRoupas}
                  alt="Roupas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">
                    Roupas
                  </h3>
                  <p className="text-xs text-gray-500 mb-4 hidden md:block">
                    Camisetas, bonés e mais.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-white border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">
                    Explorar
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            d="M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z"
          />
          <path strokeLinecap="square" d="M16 3H8v4h8V3z" />
        </svg>
      ),
      title: "Aparelhos Lacrados",
      desc: "Produtos novos e lacrados conforme disponibilidade.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="square" d="M9 12l2 2 4-4" />
          <path
            strokeLinecap="square"
            d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      ),
      title: "Seminovos",
      desc: "Aparelhos selecionados e avaliados com cuidado.",
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            d="M3 10h18M7 15h4M3 6h18a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z"
          />
        </svg>
      ),
      title: "Parcelamento",
      desc: INSTALLMENTS_TEXT,
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Garantia",
      desc: GUARANTEE_TEXT,
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-16">
          <SectionLabel>Diferenciais</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Por que escolher a IP Store?
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {features.map((f, i) => (
            <FadeIn
              key={f.title}
              delay={i * 0.1}
              className="bg-[#0d0d0d] p-8 md:p-10"
              up={false}
            >
              <div className="text-gray-400 mb-6">{f.icon}</div>
              <h3 className="text-sm font-semibold text-white tracking-wide mb-3 uppercase text-[11px] tracking-[0.18em]">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <FadeIn className="order-2 md:order-1">
            <SectionLabel>Troca</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Seu Xiaomi pode entrar
              <br />
              <em>na jogada.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
              {TRADE_TEXT}
            </p>
            <Btn
              variant="outline"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              Avaliar meu Xiaomi
            </Btn>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 md:order-2" up={false}>
            <div className="aspect-[4/3] bg-[#111] overflow-hidden">
              <img
                src={trocaXiaomi}
                alt="Atendimento na IP Store"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function StoreExperienceSection({
  onNavigate,
}: {
  onNavigate: (p: Page) => void;
}) {
  const { ref, visible } = useFade(0.08);
  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-end overflow-hidden border-t border-white/5"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease",
      }}
    >
      <img
        src={lojaAberto}
        alt="Interior da IP Store"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: visible ? "scale(1)" : "scale(1.04)",
          transition: "transform 1.2s ease",
          filter: "brightness(0.35) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-20 w-full">
        <FadeIn delay={0.2}>
          <SectionLabel>A Loja</SectionLabel>
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
            Mais do que
            <br />
            <em>uma loja.</em>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Uma experiência pensada para você.
          </p>
          <Btn variant="outline" onClick={() => onNavigate("aloja")}>
            Conheça a loja
          </Btn>
        </FadeIn>
      </div>
    </section>
  );
}

function PackagingSection() {
  return (
    <section className="bg-[#080808] py-24 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.1} up={false}>
            <div className="relative aspect-[4/3] bg-[#111] overflow-hidden">
              <img
                src={acessoriosCabos}
                alt="Acessórios IP Store"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </FadeIn>

          <FadeIn className="md:pl-8">
            <SectionLabel>Acessórios</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              Seu iPhone,
              <br />
              <em>do jeito certo.</em>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Capinhas, películas, cabos e carregadores para deixar seu aparelho
              pronto para o dia a dia.
            </p>

            <div className="grid grid-cols-3 gap-px bg-white/5 mb-10">
              {["Capinha", "Película", "Cabo"].map((item) => (
                <div key={item} className="bg-[#080808] py-5 text-center">
                  <p className="text-[9px] tracking-[0.22em] uppercase text-gray-500 font-mono">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-600 leading-relaxed">
              * Itens sujeitos à disponibilidade. Consulte pelo WhatsApp.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  const photos = [
    fachadaHero,
    modaArara,
    perfumesVitrine,
    lojaInterior,
    lojaAmbiente,
    lojaTecnologia,
  ];

  const [instagramIndex, setInstagramIndex] = useState(0);

  const nextInstagram = () => {
    setInstagramIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1,
    );
  };

  const prevInstagram = () => {
    setInstagramIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    );
  };

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <SectionLabel>Instagram</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-white">
              {IG_MAIN_HANDLE}
            </h2>
          </div>
          <a href={IG_MAIN_URL} target="_blank" rel="noopener noreferrer">
            <Btn variant="outline">Seguir no Instagram</Btn>
          </a>
        </FadeIn>

        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-px transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${instagramIndex * 100}% - ${instagramIndex}px))`,
              }}
            >
              {photos.map((url, i) => (
                <div
                  key={i}
                  className="min-w-full lg:min-w-[calc((100%-5px)/6)] aspect-square bg-[#111]"
                >
                  <a
                    href={IG_MAIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full h-full overflow-hidden"
                  >
                    <img
                      src={url}
                      alt={`IP Store Instagram ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80 opacity-80"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Setas */}
          <button
            onClick={prevInstagram}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/70 border border-white/20 text-white hover:bg-black transition-colors lg:hidden"
            aria-label="Foto anterior"
          >
            ←
          </button>

          <button
            onClick={nextInstagram}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/70 border border-white/20 text-white hover:bg-black transition-colors lg:hidden"
            aria-label="Próxima foto"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="bg-[#0d0d0d] py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <SectionLabel>Localização</SectionLabel>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Venha nos visitar.
            </h2>
            <div className="space-y-6 text-sm text-gray-500">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-1">
                  Endereço
                </p>
                <p className="text-white">{ADDRESS_LINE_1}</p>
                <p className="text-white">{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-1">
                  Horário de Funcionamento
                </p>
                <p className="text-gray-400 text-xs">{HOURS_TEXT}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-1">
                  Entregas
                </p>
                <p className="text-gray-400 text-xs">{DELIVERY_TEXT}</p>
              </div>
            </div>
            <div className="mt-8">
              <Btn
                variant="outline"
                onClick={() => window.open(MAPS_URL, "_blank")}
              >
                Como chegar
              </Btn>
            </div>
          </FadeIn>

          {/* Mapa real do Google Maps */}
          <FadeIn delay={0.15} up={false}>
            <div className="aspect-[4/3] bg-[#111] border border-white/5 overflow-hidden">
              <iframe
                title="Localização da IP Store no Google Maps"
                src={MAPS_EMBED_URL}
                className="w-full h-full grayscale contrast-125 opacity-90"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhatsAppCTA() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Procurando um
            <br />
            <em>aparelho específico?</em>
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            Consulte nossa disponibilidade pelo WhatsApp.
          </p>
          <button
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="inline-flex items-center gap-3 bg-black text-white text-[10px] tracking-[0.22em] uppercase px-10 py-4 hover:bg-gray-900 transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <CategoriesSection onNavigate={onNavigate} />
      <FeaturesSection />
      <TradeSection />
      <StoreExperienceSection onNavigate={onNavigate} />
      <PackagingSection />
      <InstagramSection />
      <LocationSection />
      <WhatsAppCTA />
    </>
  );
}

// ── IPHONES PAGE ─────────────────────────────────────────────────────────────

function IPhoneCard({ phone }: { phone: iPhone }) {
  return (
    <div className="group bg-[#111] border border-white/5 hover:border-white/15 transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-[#0d0d0d] relative">
        <img
          src={phone.img}
          alt={phone.model}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`text-[8px] tracking-[0.2em] uppercase font-mono px-2 py-1 ${
              phone.condition === "novo"
                ? "bg-white text-black"
                : "bg-transparent border border-white/30 text-white"
            }`}
          >
            {phone.condition === "novo" ? "Novo" : "Seminovo"}
          </span>
        </div>
        {phone.battery && (
          <div className="absolute bottom-3 left-3">
            <span className="text-[8px] tracking-[0.18em] uppercase font-mono text-gray-400 flex items-center gap-1">
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="2"
                  y="7"
                  width="18"
                  height="10"
                  rx="1"
                  strokeWidth="1.5"
                />
                <path strokeLinecap="square" strokeWidth="1.5" d="M22 11v2" />
              </svg>
              {phone.battery}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-[8px] tracking-[0.22em] uppercase text-gray-600 font-mono mb-1">
          {phone.storage} · {phone.color}
        </p>
        <h3 className="text-sm font-medium text-white mb-4 tracking-wide">
          {phone.model}
        </h3>
        <WhatsAppButtonSmall />
      </div>
    </div>
  );
}

function IPhonePage() {
  const [filter, setFilter] = useState<PhoneFilter>("todos");

  const filters: { key: PhoneFilter; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "novos", label: "Novos" },
    { key: "seminovos", label: "Seminovos" },
    { key: "pro", label: "Pro" },
    { key: "promax", label: "Pro Max" },
  ];

  const filtered = iphones.filter((p) => {
    if (filter === "todos") return true;
    if (filter === "novos") return p.condition === "novo";
    if (filter === "seminovos") return p.condition === "seminovo";
    if (filter === "pro") return p.filter === "pro";
    if (filter === "promax") return p.filter === "promax";
    return true;
  });

  return (
    <div className="pt-16 md:pt-[72px]">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[52vh] flex items-end overflow-hidden bg-[#080808]">
        <img
          src={iphoneBanner}
          alt="iPhones na IP Store"
          className="absolute inset-0 w-full h-full object-cover md:scale-[0.95]  opacity-90"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 w-full">
          <SectionLabel>Catálogo · A partir do iPhone XR</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            iPhones
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <FadeIn className="mb-10 max-w-2xl">
          <p className="text-gray-500 text-sm leading-relaxed">
            Trabalhamos com aparelhos lacrados e seminovos, com disponibilidade
            variável. Também atendemos pedidos por encomenda — se o modelo que
            você procura não estiver na vitrine no momento, consulte pelo
            WhatsApp.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn className="flex flex-wrap gap-px bg-white/5 mb-14 w-fit">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-3 text-[9px] tracking-[0.22em] uppercase transition-all duration-200 ${
                filter === key
                  ? "bg-white text-black"
                  : "bg-[#0a0a0a] text-gray-500 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {filtered.map((phone, i) => (
            <FadeIn key={phone.id} delay={i * 0.04} up={false}>
              <IPhoneCard phone={phone} />
            </FadeIn>
          ))}
        </div>
        <p className="text-[10px] text-gray-700 mt-6">
          * Imagens ilustrativas por modelo. Disponibilidade sob consulta.
        </p>

        {/* Seminovos highlight */}
        <div className="mt-24 border-t border-white/5 pt-24">
          <FadeIn className="mb-12">
            <SectionLabel>Seleção especial</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">
                  iPhones Seminovos
                </h2>
                <p className="text-gray-500 max-w-md">
                  Aparelhos selecionados para você encontrar o modelo ideal.
                </p>
              </div>
              <button
                className="text-[9px] tracking-[0.22em] uppercase text-gray-500 border-b border-gray-700 pb-0.5 hover:text-white hover:border-white transition-colors self-start md:self-auto"
                onClick={() => setFilter("seminovos")}
              >
                Ver todos os seminovos
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {iphones
              .filter((p) => p.condition === "seminovo")
              .slice(0, 3)
              .map((phone, i) => (
                <FadeIn key={phone.id} delay={i * 0.1} up={false}>
                  <div className="group bg-[#0e0e0e] border-0 hover:bg-[#141414] transition-colors cursor-pointer p-6">
                    <div className="aspect-[3/4] mb-5 overflow-hidden bg-[#111]">
                      <img
                        src={phone.img}
                        alt={phone.model}
                        className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-[8px] tracking-[0.22em] uppercase text-gray-600 font-mono mb-1">
                      {phone.storage} · {phone.color}
                    </p>
                    <h3 className="text-sm font-medium text-white mb-1">
                      {phone.model}
                    </h3>
                    {phone.battery && (
                      <div className="flex items-center gap-1.5 mb-5">
                        <div className="h-1 bg-white/10 flex-1 max-w-[60px]">
                          <div
                            className="h-1 bg-white/40"
                            style={{ width: phone.battery }}
                          />
                        </div>
                        <span className="text-[8px] font-mono text-gray-500">
                          {phone.battery} bateria
                        </span>
                      </div>
                    )}
                    <button
                      className="text-[9px] tracking-[0.18em] uppercase text-gray-500 hover:text-white transition-colors"
                      onClick={() => window.open(WHATSAPP_URL, "_blank")}
                    >
                      Consultar disponibilidade →
                    </button>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>

        {/* Encomendas CTA */}
        <FadeIn className="mt-24 bg-[#0e0e0e] p-12 md:p-14 text-center border border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Não encontrou o modelo que procura?
          </h2>
          <p className="text-gray-500 mb-8">
            Trabalhamos também com pedidos por encomenda. Consulte pelo
            WhatsApp.
          </p>
          <Btn
            variant="primary"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            Falar com a IP Store
          </Btn>
        </FadeIn>

        {/* Accessories */}
        <div className="mt-24 border-t border-white/5 pt-24">
          <FadeIn className="mb-12">
            <SectionLabel>Acessórios</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Tudo que você precisa.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              "Capinhas",
              "Películas",
              "Cabos & Carregadores",
              "Fones, JBL & Smartwatches",
            ].map((cat, i) => (
              <FadeIn key={cat} delay={i * 0.08} up={false}>
                <div
                  className="bg-[#0d0d0d] p-8 md:p-10 group hover:bg-[#111] transition-colors cursor-pointer"
                  onClick={() => openWhatsAppFor(cat)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openWhatsAppFor(cat);
                  }}
                >
                  <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="text-sm text-white font-medium mb-3">{cat}</h3>
                  <div className="text-[9px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-gray-400 transition-colors">
                    Consultar →
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TECNOLOGIA (iPads, Apple Watch, AirPods, JBL & acessórios) ──────────────

function IPadPage() {
  const ipads = [
    {
      id: 1,
      img: ipadCaixa,
    },
    {
      id: 2,
      img: smartwatchFone,
    },
    {
      id: 3,
      img: airpods,
    },
    {
      id: 4,
      img: ipadSmartwatch,
    },
    {
      id: 5,
      img: ipad,
    },
    {
      id: 6,
      img: smartwatch,
    },
  ];

  const acessorios = [
    { label: "Apple Watch", desc: "Modelos sob consulta." },
    { label: "AirPods & Fones", desc: "Originais e alternativos." },
    { label: "JBL", desc: "Caixas de som e fones." },
    { label: "Carregadores", desc: "Cabos e fontes." },
    { label: "Cabos", desc: "Lightning, USB-C e mais." },
    { label: "Películas", desc: "Vidro e película comum." },
    { label: "Capinhas", desc: "Diversos modelos e cores." },
  ];

  return (
    <div className="pt-16 md:pt-[72px]">
      <div className="relative h-[50vh] md:h-[680px] flex items-end overflow-hidden bg-[#080808]">
        <img
          src={ipadBanner}
          alt="Tecnologia na IP Store"
          className="absolute inset-0 w-full h-full object-cover md:object-contain opacity-65"
          style={{ objectPosition: "center 65%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 w-full">
          <SectionLabel>Catálogo</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            iPads & Tecnologia
          </h1>
          <p className="text-gray-400 mt-4 max-w-md text-sm">
            iPads, Apple Watch, AirPods, JBL e acessórios. Alguns produtos sob
            encomenda.
          </p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] max-w-6xl mx-auto px-6 md:px-12 py-16">
        <FadeIn className="mb-12">
          <SectionLabel>iPads</SectionLabel>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5">
          {ipads.map((ipad, i) => (
            <FadeIn key={ipad.id} delay={i * 0.07} up={false}>
              <div className="group bg-[#0e0e0e] hover:bg-[#141414] transition-colors p-0">
                <div className="aspect-[3/4] overflow-hidden bg-[#111] relative">
                  <img
                    src={ipad.img}
                    alt="Tecnologia disponível na IP Store"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="text-[10px] text-gray-700 mt-6">
          * Imagens ilustrativas. Modelos e disponibilidade sob consulta —
          alguns itens trabalhados por encomenda.
        </p>

        {/* Acessórios & JBL */}
        <div className="mt-24 border-t border-white/5 pt-24">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-14">
            <FadeIn>
              <SectionLabel>Acessórios & JBL</SectionLabel>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Tudo em volta
                <br />
                <em>do seu Apple.</em>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                Apple Watch, AirPods, JBL, carregadores, cabos, películas e
                capinhas — alguns itens trabalhados sob encomenda.
              </p>
            </FadeIn>
            <FadeIn delay={0.1} up={false}>
              <div className="aspect-[4/3] bg-[#111] overflow-hidden">
                <img
                  src={acessoriosCabos}
                  alt="Acessórios e cabos"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {acessorios.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.06} up={false}>
                <div
                  className="bg-[#0d0d0d] p-7 md:p-8 group hover:bg-[#111] transition-colors cursor-pointer"
                  onClick={() => openWhatsAppFor(item.label)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") openWhatsAppFor(item.label);
                  }}
                >
                  <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="text-sm text-white font-medium mb-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-gray-600 mb-4">{item.desc}</p>
                  <div className="text-[9px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-gray-400 transition-colors">
                    Consultar →
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="mt-16 bg-black p-12 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Precisa de uma encomenda?
          </h2>
          <p className="text-gray-400 mb-8">
            Consulte opções e disponibilidade pelo WhatsApp.
          </p>
          <Btn
            variant="outline"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            Falar com a IP Store
          </Btn>
        </FadeIn>
      </div>
    </div>
  );
}

// ── PERFUMES PAGE ─────────────────────────────────────────────────────────────

type Perfume = {
  id: number;
  name: string;
  brand: string;
  cat: string;
  image: string;
};

// Apenas perfumes com nome claramente legível na foto real da vitrine.
const perfumes: Perfume[] = [
  {
    id: 1,
    name: "MYSLF",
    brand: "Yves Saint Laurent",
    cat: "Masculino",
    image: myslf,
  },
  {
    id: 2,
    name: "Fame",
    brand: "Rabanne",
    cat: "Feminino",
    image: fame,
  },
  {
    id: 3,
    name: "Azzaro Pour Homme",
    brand: "Azzaro",
    cat: "Masculino",
    image: azzaroPourHomme,
  },
  {
    id: 4,
    name: "1 Million",
    brand: "Rabanne",
    cat: "Masculino",
    image: oneMillion,
  },
  {
    id: 5,
    name: "212 VIP Men",
    brand: "Carolina Herrera",
    cat: "Masculino",
    image: vipMen,
  },
  {
    id: 6,
    name: "212 VIP Rosé",
    brand: "Carolina Herrera",
    cat: "Feminino",
    image: vipRose,
  },
  {
    id: 7,
    name: "Club de Nuit Intense Man",
    brand: "Armaf",
    cat: "Masculino",
    image: clubDeNuitIntenseMan,
  },
  {
    id: 8,
    name: "The Most Wanted",
    brand: "Azzaro",
    cat: "Masculino",
    image: theMostWanted,
  },
  {
    id: 9,
    name: "Good Girl",
    brand: "Carolina Herrera",
    cat: "Feminino",
    image: goodGirl,
  },
  {
    id: 10,
    name: "Coco Mademoiselle",
    brand: "Chanel",
    cat: "Feminino",
    image: cocoMademoiselle,
  },
];

function PerfumesPage() {
  return (
    <div className="pt-16 md:pt-[72px]">
      {/* Editorial hero — foto real da vitrine de perfumes */}
      <div className="relative min-h-[55vh] md:min-h-[58vh] flex items-end overflow-hidden bg-[#0a0a0a]">
        <img
          src={perfumesVitrine}
          alt="Vitrine de perfumes da IP Store"
          className="absolute inset-0 w-full h-full object-cover opacity-97"
          style={{ objectPosition: "center 72%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 md:pb-20 w-full">
          <SectionLabel>Perfumaria</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Perfumes
            <br />
            <em className="text-gray-300">Masculinos & Femininos</em>
          </h1>
          <p className="text-gray-500 max-w-sm">
            Uma seleção da nossa vitrine. Consulte disponibilidade e valores
            pelo WhatsApp.
          </p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] max-w-6xl mx-auto px-6 md:px-12 py-16">
        <FadeIn className="mb-14">
          <SectionLabel>Disponíveis na loja</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Nossa seleção
          </h2>
        </FadeIn>

        {/* Grid com foto real de cada perfume */}
        <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-3 bg-white/5">
          {perfumes.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06} up={false}>
              <div className="group bg-[#0d0d0d] hover:bg-[#111] transition-colors h-full flex flex-col justify-between">
                <div className="aspect-[3/4] overflow-hidden bg-[#111]">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.brand}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                </div>
                <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-[8px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-3">
                      {p.brand} · {p.cat}
                    </p>
                    <h3 className="font-serif text-[14px] sm:text-base lg:text-xl text-white leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <button
                    className="mt-6 text-[9px] tracking-[0.18em] uppercase text-gray-500 hover:text-white transition-colors text-left"
                    onClick={() => window.open(WHATSAPP_URL, "_blank")}
                  >
                    Consultar →
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center py-16 border-t border-white/5">
          <p className="text-gray-600 text-sm mb-6">
            Outras opções disponíveis na loja física. Fale com a gente pelo
            WhatsApp.
          </p>
          <Btn
            variant="outline"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            Falar no WhatsApp
          </Btn>
        </FadeIn>
      </div>
    </div>
  );
}

// ── ROUPAS PAGE ───────────────────────────────────────────────────────────────

function RoupassPage() {
  const items = [
    {
      id: 1,
      name: "Camisetas",
      desc: "Diversas cores e estampas.",
      img: modaArara,
      tag: "Coleção na loja",
    },

    {
      id: 2,
      name: "Shorts",
      desc: "Peças dobradas, prontas para levar.",
      img: modaDobradas,
      tag: "",
    },

    {
      id: 3,
      name: "Acessórios",
      desc: "Bonés, carteiras, pochetes e sandálias.",
      img: modaAcessorios,
    },

    {
      id: 4,
      name: "Nossa loja",
      desc: "Um pouco do espaço da IP Store.",
      img: modaLoja,
      tag: "",
    },
  ];

  return (
    <div className="pt-16 md:pt-[72px]">
      <div className="relative h-[42vh] md:h-[45vh] flex items-end overflow-hidden bg-[#0a0a0a]">
        <img
          src={modaBanner}
          alt="Roupas na IP Store"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-16 w-full">
          <SectionLabel>Moda</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Roupas
          </h1>
          <a
            href={IG_ROUPAS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase text-gray-300 hover:text-white transition-colors"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            {IG_ROUPAS_HANDLE}
          </a>
        </div>
      </div>

      <div className="bg-[#0a0a0a] max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Cards de roupas */}
        <div className="grid grid-cols-2 gap-3 bg-white/5">
          {items.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={0.1 + i * 0.1}
              className="group relative overflow-hidden aspect-[4/3] bg-[#111]"
              up={false}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 p-4 md:p-6">
                {item.tag && (
                  <span className="text-[8px] tracking-[0.25em] uppercase text-gray-400 font-mono block mb-2">
                    {item.tag}
                  </span>
                )}

                <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                  {item.name}
                </h3>

                <p className="text-[9px] md:text-xs text-gray-500 mb-3">
                  {item.desc}
                </p>

                <button
                  className="text-[8px] md:text-[9px] tracking-[0.18em] uppercase text-white border border-white/20 px-4 py-2 hover:border-white/50 transition-colors"
                  onClick={() => window.open(WHATSAPP_URL, "_blank")}
                >
                  Consultar disponibilidade
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center py-16 border-t border-white/5">
          <p className="text-gray-600 text-sm mb-6">
            Fotos reais da loja — cores e modelos disponíveis podem variar.
          </p>
          <Btn
            variant="outline"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            Falar no WhatsApp
          </Btn>
        </FadeIn>
      </div>
    </div>
  );
}

// ── A LOJA PAGE ───────────────────────────────────────────────────────────────

function ALojaPage() {
  return (
    <div className="pt-16 md:pt-[72px]">
      <div className="relative min-h-[70vh] md:min-h-[72vh] flex items-end overflow-hidden bg-[#080808]">
        <img
          src={lojaInterior}
          alt="Interior da IP Store"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-24 md:pb-20 w-full">
          <SectionLabel>Nossa loja</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
            Mais do que
            <br />
            <em>uma loja.</em>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg">
            Uma experiência pensada para você. Tecnologia, estilo e confiança
            reunidos em um só lugar, na Praça Castro Alves, em Barrolândia,
            Belmonte – BA.
          </p>
        </div>
      </div>

      <div className="bg-[#0a0a0a] max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start mb-24">
          <FadeIn>
            <SectionLabel>Ambiente</SectionLabel>
            <h2 className="font-serif text-4xl text-white mb-6">
              Um espaço pensado para quem exige o melhor.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              A IP Store foi criada com o objetivo de oferecer não apenas
              produtos, mas uma experiência de compra diferenciada. Nosso
              ambiente combina tecnologia premium com um atendimento próximo e
              personalizado.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Na Praça Castro Alves, em Barrolândia, a loja atende Belmonte e
              região para quem busca iPhones, iPads, perfumes e muito mais.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} up={false}>
            <div className="aspect-[4/3] bg-[#111] overflow-hidden">
              <img
                src={modaLoja}
                alt="Balcão da IP Store"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-24">
          {[
            { label: "Smartphones", desc: "iPhones a partir do XR" },
            { label: "Tecnologia", desc: "iPads, Watch, AirPods, JBL" },
            { label: "Perfumes", desc: "Masculinos e femininos" },
            { label: "Moda", desc: "Camisetas, bonés e mais" },
          ].map((item) => (
            <div key={item.label} className="bg-[#0d0d0d] p-6">
              <h3 className="text-sm font-medium text-white mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <Divider />

        <FadeIn className="py-24 text-center max-w-2xl mx-auto">
          <blockquote className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug">
            <em>"Tecnologia, estilo e confiança."</em>
          </blockquote>
          <p className="text-gray-600 text-sm tracking-wider">
            IP Store · Barrolândia, Belmonte – BA
          </p>
        </FadeIn>

        <Divider />

        <FadeIn className="pt-24">
          <SectionLabel>Venha nos visitar</SectionLabel>
          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            <div className="bg-[#0d0d0d] p-8">
              <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-3">
                Localização
              </p>
              <p className="text-white text-sm">{ADDRESS_LINE_1}</p>
              <p className="text-white text-sm">{ADDRESS_LINE_2}</p>
              <button
                className="text-[9px] tracking-[0.18em] uppercase text-gray-500 hover:text-white transition-colors mt-3"
                onClick={() => window.open(MAPS_URL, "_blank")}
              >
                Como chegar →
              </button>
            </div>
            <div className="bg-[#0d0d0d] p-8">
              <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-3">
                Instagram
              </p>
              <a
                href={IG_MAIN_URL}
                className="text-white text-sm hover:text-gray-300 transition-colors"
              >
                {IG_MAIN_HANDLE}
              </a>
            </div>
            <div className="bg-[#0d0d0d] p-8">
              <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-3">
                WhatsApp
              </p>
              <a
                href={WHATSAPP_URL}
                className="text-white text-sm hover:text-gray-300 transition-colors"
              >
                Falar com a IP Store
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ── CONTATO PAGE ──────────────────────────────────────────────────────────────

function ContatoPage() {
  return (
    <div className="pt-16 md:pt-[72px] min-h-screen bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-28">
        <FadeIn className="mb-20">
          <SectionLabel>Fale conosco</SectionLabel>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
            Contato
          </h1>
          <p className="text-gray-500 max-w-md text-lg">
            Estamos sempre prontos para ajudar. Fale com a gente pelo WhatsApp
            ou nos visite.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 mb-px">
          <FadeIn delay={0.1} className="bg-[#0d0d0d] p-10 md:p-14">
            <h2 className="font-serif text-3xl text-white mb-8">WhatsApp</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              A forma mais rápida de tirar suas dúvidas, consultar
              disponibilidade, solicitar encomendas e negociar. Nosso
              atendimento é personalizado.
            </p>
            <button
              className="inline-flex items-center gap-3 bg-white text-black text-[10px] tracking-[0.22em] uppercase px-8 py-4 hover:bg-gray-100 transition-colors"
              onClick={() => window.open(WHATSAPP_URL, "_blank")}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Iniciar conversa
            </button>
          </FadeIn>

          <FadeIn delay={0.15} className="bg-[#0d0d0d] p-10 md:p-14">
            <h2 className="font-serif text-3xl text-white mb-8">Localização</h2>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-2">
                  Endereço
                </p>
                <p className="text-white">{ADDRESS_LINE_1}</p>
                <p className="text-white">{ADDRESS_LINE_2}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-2">
                  Horário
                </p>
                <p className="text-gray-400 text-xs">{HOURS_TEXT}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-2">
                  Entregas
                </p>
                <p className="text-gray-400 text-xs">{DELIVERY_TEXT}</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-600 font-mono mb-2">
                  Instagram
                </p>
                <a
                  href={IG_MAIN_URL}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {IG_MAIN_HANDLE}
                </a>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="text-[9px] tracking-[0.2em] uppercase text-gray-500 border border-white/10 px-6 py-3 hover:border-white/30 hover:text-white transition-all"
                onClick={() => window.open(MAPS_URL, "_blank")}
              >
                Como chegar
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Mapa real do Google Maps */}
        <FadeIn delay={0.2} up={false}>
          <div className="bg-[#0d0d0d] aspect-[16/5] border border-white/5 overflow-hidden">
            <iframe
              title="Localização da IP Store no Google Maps"
              src={MAPS_EMBED_URL}
              className="w-full h-full grayscale contrast-125 opacity-90"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const navigate = (p: Page) => {
    onNavigate(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links: { label: string; page: Page }[] = [
    { label: "Início", page: "home" },
    { label: "iPhones", page: "iphones" },
    { label: "iPads & Tecnologia", page: "ipads" },
    { label: "Perfumes", page: "perfumes" },
    { label: "Roupas", page: "roupas" },
    { label: "A Loja", page: "aloja" },
    { label: "Contato", page: "contato" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Logo onClick={() => navigate("home")} size="md" />
            <p className="text-gray-600 text-sm mt-6 leading-relaxed max-w-[200px]">
              Tecnologia, estilo e confiança.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[9px] tracking-[0.28em] uppercase text-gray-600 font-mono mb-5">
              Páginas
            </p>
            <nav className="flex flex-col gap-3">
              {links.map(({ label, page }) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className="text-left text-sm text-gray-500 hover:text-white transition-colors"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] tracking-[0.28em] uppercase text-gray-600 font-mono mb-5">
              Contato
            </p>
            <div className="space-y-3 text-sm text-gray-500">
              <div>
                <p className="text-white">{ADDRESS_LINE_1}</p>
                <p className="text-white">{ADDRESS_LINE_2}</p>
              </div>
              <p className="text-xs text-gray-600">{HOURS_TEXT}</p>
              <a
                href={IG_MAIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
                {IG_MAIN_HANDLE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-700 tracking-wide">
            © {new Date().getFullYear()} IP Store · Todos os direitos reservados
          </p>
          <p className="text-[9px] text-gray-800 tracking-[0.18em] uppercase font-mono">
            Informações sujeitas a atualização · Consulte disponibilidade pelo
            WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  const handleNavigate = useCallback((page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main>
        {activePage === "home" && <HomePage onNavigate={handleNavigate} />}
        {activePage === "iphones" && <IPhonePage />}
        {activePage === "ipads" && <IPadPage />}
        {activePage === "perfumes" && <PerfumesPage />}
        {activePage === "roupas" && <RoupassPage />}
        {activePage === "aloja" && <ALojaPage />}
        {activePage === "contato" && <ContatoPage />}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Botão flutuante de WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
