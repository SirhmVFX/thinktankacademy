export default function BlogSection() {
  const articles = [
    {
      date: "Jul 22, 2025",
      title: "A Beginner's Guide to Becoming a PM",
      excerpt: "Have you ever used an app or a service that just... works? That feels intuitive, solves a real problem, and maybe even brings a little joy to your day? Think of a...",
      image: "/images/prod-mana.jpg",
      link: "#"
    },
    {
      date: "Jun 4, 2025",
      title: "Why Remote Work Is Africa's Next Big Thing",
      excerpt: "Africa is buzzing, and not just with music, fashion, and innovation. Something big is brewing behind the scenes (or, more accurately, behind screens). With a...",
      image: "/images/remote-work.jpg",
      link: "#"
    },
    {
      date: "Jul 18, 2025",
      title: "Switching Careers? Don't Make These 4 Moves",
      excerpt: "So, you're thinking of switching careers, maybe from banking to tech, or from teaching into sales. Perhaps you're eyeing Africa's buzzing digital economy and...",
      image: "/images/career-switch.jpg",
      link: "#"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Keep Growing With Us
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Discover articles, guides, and stories that help you learn smarter, explore new ideas, and achieve more.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-3">{article.date}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <a 
                  href={article.link}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Read more
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}