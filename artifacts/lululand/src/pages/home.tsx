import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ReservationModal } from "@/components/reservation-modal";
import { motion } from "framer-motion";

// Import images
import personalImg from "@/assets/images/personal-color.png";
import spaceImg from "@/assets/images/space-color.png";
import digitalImg from "@/assets/images/digital-color.png";
import gemImg from "@/assets/images/gem-color.png";
import gemIdImg from "@/assets/images/gem-id.png";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openReservation = (service: string) => {
    setActiveService(service);
    setModalOpen(true);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest font-bold cursor-pointer" onClick={() => scrollTo("hero")}>
            LULULAND
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            <button onClick={() => scrollTo("personal")} className="hover:text-primary transition-colors">Personal</button>
            <button onClick={() => scrollTo("space")} className="hover:text-primary transition-colors">Space</button>
            <button onClick={() => scrollTo("digital")} className="hover:text-primary transition-colors">Digital</button>
            <button onClick={() => scrollTo("gem")} className="hover:text-primary transition-colors">Gem</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center hero-gradient overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        <motion.div
          className="absolute -left-20 top-28 hidden h-64 w-64 rounded-full bg-white/20 blur-3xl md:block"
          animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute -right-24 bottom-24 hidden h-72 w-72 rounded-full bg-primary/25 blur-3xl md:block"
          animate={{ scale: [1.1, 0.92, 1.1], opacity: [0.5, 0.25, 0.5] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />
        <div className="relative z-10 container mx-auto grid items-center gap-12 px-6 text-foreground lg:grid-cols-[1fr_0.82fr] lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-center lg:text-left">
            <span className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 block font-medium opacity-80">Color Platform</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">Color connects <br className="hidden md:block" /><span className="italic font-light">everything</span></h1>
            <p className="text-lg md:text-xl font-light mb-12 tracking-wide text-foreground/80">컬러는 당신의 삶을 설계합니다</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollTo("personal")} 
                className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105"
              >
                컬러 진단 시작
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollTo("space")} 
                className="rounded-full px-8 py-6 text-base border-foreground text-foreground bg-transparent hover:bg-foreground/5 transition-transform hover:scale-105"
              >
                컬러 솔루션 보기
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto h-[420px] w-full max-w-[420px] md:h-[520px] md:max-w-[520px]"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
          >
            <div className="hero-image-glow absolute inset-8 rounded-full" />
            <motion.div
              className="absolute left-4 top-8 h-72 w-56 overflow-hidden rounded-[2rem] border border-white/40 bg-white/30 p-2 shadow-2xl backdrop-blur-md md:h-80 md:w-64"
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <img src={personalImg} alt="LULULAND 퍼스널 컬러 이미지" className="h-full w-full rounded-[1.5rem] object-cover" />
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-2 h-72 w-56 overflow-hidden rounded-[2rem] border border-white/40 bg-white/30 p-2 shadow-2xl backdrop-blur-md md:h-80 md:w-64"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut" }}
            >
              <img src={gemImg} alt="LULULAND 보석 컬러 이미지" className="h-full w-full rounded-[1.5rem] object-cover" />
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/50 bg-white/40 p-2 shadow-xl backdrop-blur-md md:h-40 md:w-40"
              animate={{ rotate: [0, 3, 0, -3, 0], scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
            >
              <img src={digitalImg} alt="LULULAND 디지털 컬러 이미지" className="h-full w-full rounded-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => scrollTo("personal")}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-foreground"></div>
        </motion.div>
      </section>

      {/* Personal Color */}
      <section id="personal" className="py-32 md:py-48 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0 duration-700"></div>
                <img src={personalImg} alt="Personal Color Swatches" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="order-1 md:order-2 flex flex-col items-start"
            >
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Personal Color</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">나를 찾는 컬러</h2>
              <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
                당신이 가진 고유의 빛을 발견합니다. 단순한 톤 진단을 넘어, 당신의 이미지와 라이프스타일에 가장 완벽하게 조화되는 시그니처 컬러를 제안합니다.
              </p>
              <Button onClick={() => openReservation("퍼스널컬러")} className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90">
                예약하기
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Space Color */}
      <section id="space" className="py-32 md:py-48 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="flex flex-col items-start"
            >
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Space Color</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">공간이 나를 바꾼다</h2>
              <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
                머무는 공간의 온도가 당신의 기분을 결정합니다. 빛의 방향, 가구의 소재, 그리고 당신의 취향을 분석하여 가장 안락하고 감각적인 인테리어 컬러 팔레트를 설계합니다.
              </p>
              <Button onClick={() => openReservation("인테리어컬러")} className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90">
                상담하기
              </Button>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img src={spaceImg} alt="Luxury Interior Space" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Color */}
      <section id="digital" className="py-32 md:py-48 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="order-2 md:order-1"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img src={digitalImg} alt="Digital Branding" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="order-1 md:order-2 flex flex-col items-start"
            >
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Digital Branding</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">브랜드를 만드는 컬러</h2>
              <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
                디지털 환경에서 브랜드의 첫인상은 컬러로 결정됩니다. 웹, 앱, SNS 채널을 아우르는 일관되고 매력적인 디지털 컬러 시스템을 구축하여 브랜드의 가치를 높입니다.
              </p>
              <Button onClick={() => openReservation("디지털컬러")} className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90">
                문의하기
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gem Color */}
      <section id="gem" className="py-32 md:py-48 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="flex flex-col items-start"
            >
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">Gem Color</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">가치를 담는 컬러</h2>
              <p className="text-muted-foreground text-lg mb-10 font-light leading-relaxed">
                자연이 빚어낸 영원한 색채. 당신의 탄생석, 퍼스널 컬러, 그리고 담고 싶은 의미를 조화롭게 엮어 변치 않는 아름다움을 지닌 파인 주얼리를 제안합니다.
              </p>
              <Button onClick={() => openReservation("보석컬러")} className="rounded-full px-8 py-6 text-base bg-foreground text-background hover:bg-foreground/90">
                보석 보기
              </Button>
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
                <img src={gemImg} alt="Luxury Gemstone" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gem ID */}
      <section id="gem-id" className="py-32 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground text-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-12 border-4 border-white/10">
                 <img src={gemIdImg} alt="Gem Inspection" className="w-full h-full object-cover" />
              </div>
              <span className="text-primary-foreground/60 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Professional Service</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-background">보석 감정 서비스</h2>
              <p className="text-background/70 text-lg mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                가장 정확하고 투명한 기준으로 당신의 보석이 지닌 본연의 가치를 증명합니다. 세계적인 수준의 감정 시스템으로 신뢰를 약속합니다.
              </p>
              <Button 
                onClick={() => openReservation("보석감정")} 
                className="rounded-full px-10 py-7 text-lg bg-background text-foreground hover:bg-background/90"
              >
                감정 신청
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border text-center">
        <div className="container mx-auto px-6">
          <div className="text-2xl font-serif tracking-widest font-bold mb-6 text-foreground/80">
            LULULAND
          </div>
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © LULULAND | Color Platform
          </p>
        </div>
      </footer>

      {/* Modal */}
      <ReservationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceType={activeService} 
      />
    </div>
  );
}
