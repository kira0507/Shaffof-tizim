import { Link } from "react-router";
import { Star, MessageSquare, AlertTriangle, ArrowRight, Shield, Users, TrendingUp } from "lucide-react";

export function LandingPage() {
  const features = [
    {
      icon: Star,
      title: "Xizmatlarni baholash",
      description: "Davlat xizmatlarini baholang va o'z fikringizni bildiring",
      color: "from-yellow-400 to-orange-500",
      link: "/rating",
    },
    {
      icon: MessageSquare,
      title: "AI Maslahatchi",
      description: "Sun'iy intellekt yordamida huquqiy masalalarda yordam oling",
      color: "from-blue-400 to-blue-600",
      link: "/chat",
    },
    {
      icon: AlertTriangle,
      title: "Muammo bildirish",
      description: "Xizmatlar bilan bog'liq muammolarni anonim yoki ochiq tarzda bildiring",
      color: "from-red-400 to-red-600",
      link: "/report",
    },
  ];

  const stats = [
    { icon: Users, value: "12,458", label: "Faol foydalanuvchilar" },
    { icon: Star, value: "8,923", label: "Baholangan xizmatlar" },
    { icon: TrendingUp, value: "94%", label: "Hal qilingan muammolar" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/20">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary">Davlat shaffofligi platformasi</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                  Shaffof Xizmat
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                  Fuqarolar va davlat o'rtasida shaffoflikni yaratadigan AI platforma
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/chat"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Boshlash</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/chat"
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-primary/20 text-primary rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  AI bilan gaplashish
                </Link>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl rounded-3xl border border-primary/10 p-8 shadow-2xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <div className="space-y-6 w-full px-8">
                    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg ml-8">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Platformamiz imkoniyatlari</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Davlat xizmatlari shaffofligini oshirish uchun zamonaviy vositalar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="group relative"
              >
                <div className="h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-primary/10 p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{feature.description}</p>
                  <div className="flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                    <span>Batafsil</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Bugun platformaga qo'shiling
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Shaffof va adolatli jamiyat qurish uchun birgalikda harakat qilaylik
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>AI Maslahatchi bilan boshlash</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
