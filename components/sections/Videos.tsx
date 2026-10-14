import ScrollReveal from "@/components/common/ScrollReveal";

const videos = [
  { id: 1, title: "Resistências em detalhe" },
  { id: 2, title: "Por dentro da JD Resistências" },
];

export default function Videos() {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-[#151515] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">Conheça nossa fábrica e nossos produtos</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="min-w-0">
              <video
                controls
                playsInline
                preload="none"
                poster={`/videos/jd-${video.id}.jpg`}
                aria-label={video.title}
                className="w-full aspect-[3/4] object-contain bg-black rounded-lg border border-white/15"
              >
                <source src={`/videos/jd-${video.id}.mp4`} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
              <h3 className="text-white font-bold mt-4">{video.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/5511995509477?text=Ol%C3%A1!%20Vi%20os%20v%C3%ADdeos%20no%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#E07020] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#c55d16] transition-colors">Solicitar orçamento</a>
        </div>
      </div>
    </section>
  );
}
