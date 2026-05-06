import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, MessageCircle, RefreshCw } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Gemini AI Initialization
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SYSTEM_PROMPT = `
You are a helpful and intelligent AI Assistant for a Bagus Hasan Ali portfolio. 
Your goal is to answer questions about the portfolio owner's skills, experience, and projects.

CONTEXT ABOUT THE OWNER:
- Name: Bagus Hasan Ali
- Based in: Indonesia
- Experience: 3+ years in Full-Stack Development.
- Specialization: Building modern web applications with beautiful UI and functional UX.
- Education & Motivation: Started from curiosity about the internet, evolved into a career in creating exceptional digital solutions.
- Personal: Loves clean code, well-planned design, continuous learning, and coffee.

TECH STACK:
- Frontend: React (90%), JavaScript (85%), TypeScript (75%), HTML/CSS (95%), Next.js (80%).
- Backend: Node.js (80%), Python (70%), Laravel (85%), PostgreSQL (75%), MongoDB (70%).
- Tools: Git, Docker, Figma, AWS, Linux.

PROJECTS:
1. Project Alpha: Web app using React, Node.js, and MongoDB. Revolves around user data interaction.
2. Project Beta: Mobile-first platform for workflow management using Next.js, TypeScript, and PostgreSQL.
3. Project Gamma: E-commerce platform with Stripe integration, built using Laravel and Vue.js.
4. Project Delta: AI-powered CMS for content creators using Python, React, and TensorFlow.

GUIDELINES:
- Be professional, friendly, and concise.
- Answer in the same language as the user (Indonesian or English).
- If asked about things outside of this portfolio, politely bring it back to the owner's professional capabilities.
- Keep the tone "premium" and "state-of-the-art" to match the portfolio design.
- DO NOT use markdown bolding (double asterisks like **text**). Use plain text only.
`;

const QUICK_QUESTIONS = [
  "What are Bagus's core skills?",
  "Tell me about Project Alpha.",
  "How much experience does he have?",
  "What tech stack does he use?"
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: "Hi! I'm Bagus's AI assistant. How can I help you explore his work today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e, customInput) => {
    e?.preventDefault();
    const textToSend = customInput || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      if (!apiKey || apiKey === 'AS_YOUR_KEY_HERE') {
        throw new Error("API_KEY_MISSING");
      }

      const model = genAI.getGenerativeModel({ 
        model: "gemini-3.1-flash-lite-preview", // Using 1.5-flash for better reliability/speed
        systemInstruction: SYSTEM_PROMPT
      });

      const history = messages
        .filter((msg, index) => !(index === 0 && msg.role === 'assistant'))
        .map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        }));

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessage(textToSend);
      const response = await result.response;
      let text = response.text();

      // Remove markdown bolding (double asterisks) just in case
      text = text.replace(/\*\*/g, '');

      setMessages((prev) => [
        ...prev, 
        { 
          role: 'assistant', 
          content: text 
        }
      ]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      let errorDetail = error.message || "Unknown Error";
      let errorMsg = `❌ Error: ${errorDetail}`;
      
      if (error.message === "API_KEY_MISSING") {
        errorMsg = "⚠️ Gemini API Key not detected. Please check your .env file.";
      }

      setMessages((prev) => [
        ...prev, 
        { 
          role: 'assistant', 
          content: errorMsg 
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    setMessages([{ 
      role: 'assistant', 
      content: "Hi! I'm Bagus's AI assistant. How can I help you explore his work today?" 
    }]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`glass-card fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center z-[1000] cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 shadow-2xl ${
          isOpen ? 'bg-primary-500/20 border-primary-500/40 rotate-90' : 'bg-dark-900/40 border-white/10'
        }`}
        style={{
          boxShadow: isOpen 
            ? '0 0 30px rgba(107,31,255,0.4), inset 0 0 15px rgba(107,31,255,0.2)' 
            : '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        {isOpen ? <X size={28} className="text-white" /> : <Bot size={28} className="text-white" />}
        {!isOpen && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-dark-950 animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[90%] max-w-[400px] h-[600px] max-h-[80vh] z-[1000] flex flex-col glass-card overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
        style={{
          background: 'rgba(8, 9, 13, 0.8)',
          backdropFilter: 'blur(30px) saturate(150%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(107, 31, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Animated Background Elements inside Chat */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[250px] h-[250px] bg-primary-500/20 blur-[80px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] bg-accent-500/20 blur-[70px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[30%] left-[20%] w-[100px] h-[100px] bg-purple-500/10 blur-[40px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-dark-950" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">AI ASSISTANT</h3>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-tighter">Active Now</span>
              </div>
            </div>
          </div>
          <button 
            onClick={resetChat}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-dark-300 hover:text-white"
            title="Reset Chat"
          >
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col gap-1.5 ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div className="flex items-center gap-2 mb-1 px-1">
                {msg.role === 'assistant' ? (
                   <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest flex items-center gap-1">
                     <Bot size={10} /> Assistant
                   </span>
                ) : (
                  <span className="text-[10px] font-bold text-accent-400 uppercase tracking-widest flex items-center gap-1">
                    User <User size={10} />
                  </span>
                )}
              </div>
              
              <div 
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-[0.9rem] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-tr-none border border-primary-400/20'
                    : 'bg-white/[0.04] text-dark-100 rounded-tl-none border border-white/5 backdrop-blur-sm'
                }`}
              >
                {msg.content}
              </div>
              
              <span className="text-[9px] text-dark-400 font-medium mt-1">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex flex-col items-start gap-1.5 animate-pulse">
               <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest px-1">Thinking...</span>
               <div className="bg-white/[0.04] px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          
          {messages.length === 1 && !isTyping && (
            <div className="mt-4 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              <span className="text-[10px] text-dark-400 font-bold uppercase tracking-[0.2em] px-1 mb-1 opacity-70">Suggested Questions</span>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={(e) => handleSend(e, q)}
                    className="text-xs px-4 py-2.5 bg-white/[0.03] hover:bg-primary-500/10 border border-white/5 hover:border-primary-500/30 rounded-xl text-dark-200 hover:text-primary-300 transition-all cursor-pointer text-left hover:scale-[1.02] active:scale-95 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500/40 group-hover:bg-primary-500 transition-colors" />
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/5 bg-white/[0.01]">
          <form 
            onSubmit={handleSend} 
            className="relative flex items-center group"
          >
            <div className="absolute left-4 text-dark-400 group-focus-within:text-primary-400 transition-colors">
              <MessageCircle size={18} />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Bagus..."
              className="w-100 bg-white/[0.03] border border-white/10 group-focus-within:border-primary-500/40 rounded-2xl py-3.5 pl-11 pr-14 text-sm text-white placeholder:text-dark-500 outline-none transition-all focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(107,31,255,0.05)]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`absolute right-2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                input.trim() && !isTyping 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 cursor-pointer hover:scale-105 active:scale-95' 
                  : 'bg-white/5 text-dark-500 cursor-default'
              }`}
            >
              <Send size={18} />
            </button>
          </form>
       </div>
      </div>
      
      {/* Global Style for scrollbar inside ChatBot */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}} />
    </>
  );
};

export default ChatBot;
