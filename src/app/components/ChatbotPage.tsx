import { useState } from "react";
import { Send, Bot, User, AlertCircle, Lightbulb, FileText } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  suggestions?: string[];
  warning?: string;
}

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Assalomu alaykum! Men Shaffof Xizmat AI maslahatchimanman. Sizga huquqiy masalalarda yordam berishga tayyorman. Qanday savol bor?",
      suggestions: [
        "Ishga qabul qilishda kamsitish",
        "Iste'foga majbur qilish",
        "Ish haqi to'lanmagan",
      ],
    },
  ]);
  const [input, setInput] = useState("");

  const exampleQuestions = [
    "Ishga qabul qilishda kamsitishga uchragan bo'lsam nima qilishim kerak?",
    "Mehnat shartnomasini buzish tartibi qanday?",
    "Davlat xizmatida shikoyat qilish jarayoni qanday?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
    };

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: `Men sizning "${input}" savol bo'yicha quyidagi ma'lumotlarni taqdim etaman:\n\n1. O'zbekiston qonunchiligiga ko'ra, har bir fuqaro o'z huquqlarini himoya qilish huquqiga ega.\n\n2. Siz quyidagi organlar orqali murojaat qilishingiz mumkin:\n   • Mehnat va aholi bandligi vazirligi\n   • Prokuratura organlari\n   • Sud tizimi\n\n3. Tavsiyalar:\n   • Barcha dalillarni saqlang\n   • Yozma murojaat yuboring\n   • Yurist bilan maslahatlashing`,
      suggestions: [
        "Qanday dalillar kerak?",
        "Murojaat namunasi",
        "Boshqa savolim bor",
      ],
      warning: input.toLowerCase().includes("huquqbuzarlik") || input.toLowerCase().includes("kamsitish")
        ? "⚠️ Agar sizning huquqlaringiz buzilgan bo'lsa, darhol prokuraturaga murojaat qiling va barcha dalillarni saqlang."
        : undefined,
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInput("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl shadow-lg">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">AI Huquqiy Maslahatchi</h1>
            <p className="text-foreground/70">Huquqiy savollaringizga sun'iy intellekt javob beradi</p>
          </div>
        </div>

        {/* Example Questions */}
        {messages.length === 1 && (
          <div className="mb-8 space-y-4">
            <p className="text-sm text-muted-foreground text-center">Namuna savollar:</p>
            <div className="grid gap-3">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="p-4 bg-white/60 backdrop-blur-sm border border-primary/10 rounded-xl hover:bg-white hover:shadow-lg hover:border-secondary/30 transition-all duration-300 text-left text-foreground/80 hover:text-foreground"
                >
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{question}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="space-y-6 mb-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.type === "ai" && (
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-md">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              )}

              <div className={`max-w-2xl ${message.type === "user" ? "order-first" : ""}`}>
                <div
                  className={`p-5 rounded-2xl ${
                    message.type === "user"
                      ? "bg-white shadow-md border border-primary/10"
                      : "bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/20"
                  }`}
                >
                  <p className="text-foreground whitespace-pre-line leading-relaxed">{message.content}</p>

                  {message.warning && (
                    <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-destructive/90">{message.warning}</p>
                    </div>
                  )}

                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Tavsiya etilgan savollar:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/30 rounded-lg text-sm text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {message.type === "user" && (
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="sticky bottom-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-primary/10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Savolingizni yozing..."
                className="flex-1 px-4 py-3 bg-muted/50 border border-primary/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-secondary to-secondary/90 text-white rounded-xl hover:shadow-lg hover:shadow-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Yuborish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
