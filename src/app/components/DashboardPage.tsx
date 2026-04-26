import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, AlertCircle, CheckCircle, Star, Users, MessageSquare } from "lucide-react";

export function DashboardPage() {
  const stats = [
    {
      title: "Jami murojaatlar",
      value: "2,847",
      change: "+12.5%",
      changeType: "increase",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Hal qilingan",
      value: "2,683",
      change: "+8.3%",
      changeType: "increase",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Ko'rib chiqilmoqda",
      value: "164",
      change: "-5.2%",
      changeType: "decrease",
      icon: AlertCircle,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "O'rtacha baho",
      value: "4.3",
      change: "+0.2",
      changeType: "increase",
      icon: Star,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const reportsByService = [
    { name: "Passport", value: 487 },
    { name: "Soliq", value: 623 },
    { name: "Ta'lim", value: 312 },
    { name: "Tibbiyot", value: 445 },
    { name: "Mulk", value: 267 },
    { name: "Biznes", value: 189 },
  ];

  const monthlyTrend = [
    { month: "Yan", reports: 520, resolved: 485 },
    { month: "Fev", reports: 612, resolved: 578 },
    { month: "Mar", reports: 548, resolved: 521 },
    { month: "Apr", reports: 689, resolved: 654 },
    { month: "May", reports: 734, resolved: 698 },
    { month: "Iyun", reports: 847, resolved: 812 },
  ];

  const mostReportedServices = [
    { name: "Soliq to'lovlari", reports: 623, trend: "up" },
    { name: "Passport xizmati", reports: 487, trend: "down" },
    { name: "Tibbiy xizmatlar", reports: 445, trend: "up" },
    { name: "Ta'lim muassasalari", reports: 312, trend: "stable" },
    { name: "Ko'chmas mulk", reports: 267, trend: "down" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Statistika Dashboard</h1>
          <p className="text-foreground/70">Platformadagi faoliyat va ko'rsatkichlar</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  stat.changeType === "increase"
                    ? "bg-green-100 text-green-700"
                    : stat.changeType === "decrease"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Trend */}
          <div className="bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">Oylik tendensiya</h3>
                <p className="text-sm text-muted-foreground">Murojaatlar va hal qilingan</p>
              </div>
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="reports"
                  stroke="#4DA3FF"
                  strokeWidth={3}
                  dot={{ fill: "#4DA3FF", r: 5 }}
                  name="Murojaatlar"
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#4FE3A0"
                  strokeWidth={3}
                  dot={{ fill: "#4FE3A0", r: 5 }}
                  name="Hal qilingan"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Reports by Service */}
          <div className="bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary">Xizmatlar bo'yicha</h3>
              <p className="text-sm text-muted-foreground">Murojaatlar taqsimoti</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reportsByService}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                />
                <Bar dataKey="value" fill="#4DA3FF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Most Reported Services Table */}
        <div className="bg-white/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-primary">Eng ko'p murojaat qilingan xizmatlar</h3>
            <p className="text-sm text-muted-foreground">So'nggi 30 kun</p>
          </div>

          <div className="space-y-3">
            {mostReportedServices.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-primary">{service.name}</p>
                    <p className="text-sm text-muted-foreground">{service.reports} ta murojaat</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${
                        service.trend === "up"
                          ? "bg-red-100 text-red-700"
                          : service.trend === "down"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {service.trend === "up" && "↑"}
                      {service.trend === "down" && "↓"}
                      {service.trend === "stable" && "→"}
                      <span>
                        {service.trend === "up" ? "Ko'paymoqda" : service.trend === "down" ? "Kamaymoqda" : "Barqaror"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Platformamiz haqida</h3>
              <p className="text-foreground/70 leading-relaxed">
                Shaffof Xizmat platformasi orqali har oy minglab fuqarolar davlat xizmatlarini baholaydi va muammolarini
                hal qiladi. Sizning qatnashuvingiz davlat xizmatlarini yanada yaxshilashga yordam beradi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
