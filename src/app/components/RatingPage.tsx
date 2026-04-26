import { useState } from "react";
import { Star, AlertTriangle, Building2, FileText, Briefcase, GraduationCap, Heart, Home } from "lucide-react";
import { Link } from "react-router";

interface Service {
  id: string;
  name: string;
  category: string;
  icon: any;
  rating: number;
  totalReviews: number;
  description: string;
}

export function RatingPage() {
  const [services] = useState<Service[]>([
    {
      id: "1",
      name: "Passport xizmati",
      category: "Ichki ishlar",
      icon: FileText,
      rating: 4.5,
      totalReviews: 1248,
      description: "Passport rasmiylashtrish va yangilash xizmatlari",
    },
    {
      id: "2",
      name: "Soliq to'lovlari",
      category: "Moliya",
      icon: Briefcase,
      rating: 4.2,
      totalReviews: 2156,
      description: "Soliq to'lovlarini amalga oshirish",
    },
    {
      id: "3",
      name: "Ta'lim muassasalari",
      category: "Ta'lim",
      icon: GraduationCap,
      rating: 4.7,
      totalReviews: 3421,
      description: "Maktab va oliy ta'lim muassasalari xizmatlari",
    },
    {
      id: "4",
      name: "Tibbiy xizmatlar",
      category: "Sog'liqni saqlash",
      icon: Heart,
      rating: 4.3,
      totalReviews: 1876,
      description: "Poliklinika va shifoxonalar xizmatlari",
    },
    {
      id: "5",
      name: "Ko'chmas mulk ro'yxati",
      category: "Mulk",
      icon: Home,
      rating: 4.0,
      totalReviews: 892,
      description: "Uy-joy va er uchastkalarini ro'yxatdan o'tkazish",
    },
    {
      id: "6",
      name: "Biznes ro'yxatdan o'tkazish",
      category: "Tadbirkorlik",
      icon: Building2,
      rating: 4.6,
      totalReviews: 1543,
      description: "Korxonalarni davlat ro'yxatidan o'tkazish",
    },
  ]);

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const renderStars = (rating: number, interactive: boolean = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = interactive ? (hoveredStar || userRating) >= star : rating >= star;
          const partial = !interactive && rating >= star - 0.5 && rating < star;

          return (
            <button
              key={star}
              disabled={!interactive}
              onClick={() => interactive && setUserRating(star)}
              onMouseEnter={() => interactive && setHoveredStar(star)}
              onMouseLeave={() => interactive && setHoveredStar(0)}
              className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
            >
              <Star
                className={`w-5 h-5 ${
                  filled
                    ? "fill-yellow-400 text-yellow-400"
                    : partial
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  };

  const handleSubmitRating = () => {
    if (userRating > 0 && selectedService) {
      alert(`Sizning ${selectedService.name} uchun bahoyingiz: ${userRating} yulduz. Rahmat!`);
      setSelectedService(null);
      setUserRating(0);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Xizmatlarni baholash</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Davlat xizmatlarini baholang va boshqa fuqarolarga yordam bering
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="px-3 py-1 bg-muted rounded-lg text-sm text-muted-foreground">
                  {service.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">{service.name}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {renderStars(service.rating)}
                  <span className="text-lg font-bold text-primary">{service.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.totalReviews.toLocaleString()} ta baholash
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 px-4 py-2.5 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Baholash
                </button>
                <Link
                  to="/report"
                  className="px-4 py-2.5 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg hover:bg-destructive/20 transition-colors flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full space-y-6 shadow-2xl">
              {/* Modal Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl">
                  <selectedService.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{selectedService.name}</h3>
                <p className="text-foreground/70">{selectedService.description}</p>
              </div>

              {/* Rating Stars */}
              <div className="space-y-3">
                <p className="text-center font-medium text-foreground">Xizmatni baholang:</p>
                <div className="flex justify-center">
                  {renderStars(userRating, true)}
                </div>
                {userRating > 0 && (
                  <p className="text-center text-sm text-secondary">
                    Sizning bahoyingiz: {userRating} yulduz
                  </p>
                )}
              </div>

              {/* Optional Comment */}
              <textarea
                placeholder="Ixtiyoriy: fikringizni yozing..."
                className="w-full px-4 py-3 bg-muted/50 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                rows={3}
              />

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setUserRating(0);
                  }}
                  className="flex-1 px-6 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={handleSubmitRating}
                  disabled={userRating === 0}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 text-white rounded-xl hover:shadow-lg hover:shadow-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Yuborish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
