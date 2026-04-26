import { useState } from "react";
import { Upload, Send, AlertTriangle, CheckCircle, Shield, Eye, EyeOff } from "lucide-react";

export function ReportPage() {
  const [serviceType, setServiceType] = useState("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    "Passport xizmati",
    "Soliq to'lovlari",
    "Ta'lim muassasalari",
    "Tibbiy xizmatlar",
    "Ko'chmas mulk ro'yxati",
    "Biznes ro'yxatdan o'tkazish",
    "Boshqa",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (serviceType && description) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setServiceType("");
        setDescription("");
        setIsAnonymous(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 text-center space-y-6 shadow-2xl border border-primary/10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-primary">Muvaffaqiyatli yuborildi!</h2>
              <p className="text-foreground/70">
                Sizning murojaatingiz qabul qilindi. Tez orada ko'rib chiqiladi.
              </p>
              <p className="text-sm text-muted-foreground">
                ID: #{Math.floor(Math.random() * 100000)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-3xl">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Muammo bildirish</h1>
            <p className="text-xl text-foreground/70">
              Davlat xizmatlari bilan bog'liq muammolarni bildiring
            </p>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-xl p-4 flex items-start gap-3">
            <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-primary">Xavfsiz va maxfiy</h3>
              <p className="text-sm text-foreground/70">
                Ma'lumotlaringiz himoyalangan va maxfiy saqlanadi
              </p>
            </div>
          </div>
          <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-xl p-4 flex items-start gap-3">
            <EyeOff className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-primary">Anonim murojaat</h3>
              <p className="text-sm text-foreground/70">
                Ixtiyoriy ravishda anonim murojaat qilishingiz mumkin
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-primary/10 p-8 shadow-xl space-y-6">
            {/* Service Type */}
            <div className="space-y-3">
              <label className="block font-medium text-primary">
                Xizmat turi <span className="text-destructive">*</span>
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                required
                className="w-full px-4 py-3 bg-muted/50 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              >
                <option value="">Xizmat turini tanlang</option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <label className="block font-medium text-primary">
                Muammo tavsifi <span className="text-destructive">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Muammoni batafsil tasvirlab bering..."
                className="w-full px-4 py-3 bg-muted/50 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                rows={6}
              />
              <p className="text-sm text-muted-foreground">
                Kamida 50 belgi: {description.length}/50
              </p>
            </div>

            {/* Evidence Upload */}
            <div className="space-y-3">
              <label className="block font-medium text-primary">Dalillar (ixtiyoriy)</label>
              <div className="border-2 border-dashed border-primary/20 rounded-xl p-8 text-center hover:border-secondary/40 hover:bg-secondary/5 transition-all cursor-pointer">
                <input type="file" multiple className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer space-y-3 block">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-foreground">Fayllarni yuklash</p>
                    <p className="text-sm text-muted-foreground">
                      Rasm, PDF yoki video (max 10MB)
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Anonymous Toggle */}
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-primary/10">
              <div className="flex items-center gap-3">
                {isAnonymous ? (
                  <EyeOff className="w-6 h-6 text-accent" />
                ) : (
                  <Eye className="w-6 h-6 text-secondary" />
                )}
                <div>
                  <p className="font-medium text-primary">Anonim murojaat</p>
                  <p className="text-sm text-muted-foreground">
                    Sizning ma'lumotlaringiz ko'rsatilmaydi
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  isAnonymous ? "bg-accent" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                    isAnonymous ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                Yolg'on ma'lumot berish qonunga ziddir. Haqiqiy muammolarni bildiring.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!serviceType || description.length < 50}
              className="w-full px-8 py-4 bg-gradient-to-r from-destructive to-destructive/90 text-white rounded-xl hover:shadow-xl hover:shadow-destructive/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Murojaat yuborish</span>
            </button>
          </div>
        </form>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Murojaat yuborilgandan so'ng 3-5 ish kuni ichida javob beriladi
          </p>
        </div>
      </div>
    </div>
  );
}
