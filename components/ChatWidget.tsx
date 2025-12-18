import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Welcome to Gateway Park Hotel! I am your AI Concierge. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Listen for external triggers to open chat
  useEffect(() => {
    const handleTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setIsOpen(true);
      if (customEvent.detail) {
        setInputValue(customEvent.detail);
        // Focus the input after a short delay to allow the modal to render
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    window.addEventListener('trigger-chat', handleTrigger);
    return () => window.removeEventListener('trigger-chat', handleTrigger);
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    let fullResponse = '';
    // Create a temporary ID for the streaming message
    const responseId = (Date.now() + 1).toString();
    
    // Add placeholder for AI response
    setMessages(prev => [...prev, {
        id: responseId,
        role: 'model',
        text: '',
        timestamp: new Date()
    }]);

    try {
        const stream = sendMessageToGemini(userMsg.text);
        
        for await (const chunk of stream) {
            fullResponse += chunk;
            setMessages(prev => 
                prev.map(msg => 
                    msg.id === responseId ? { ...msg, text: fullResponse } : msg
                )
            );
        }
    } catch (error) {
        console.error("Chat error", error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-full sm:w-96 h-[500px] mb-4 rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-brand-700 p-1.5 rounded-full">
                <Sparkles size={16} className="text-brand-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Concierge AI</h3>
                <p className="text-xs text-brand-300">Always here to help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-brand-800 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-800 text-white rounded-br-none' 
                      : 'bg-white border border-stone-200 text-stone-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && messages.length > 0 && messages[messages.length - 1].text === '' && (
                 <div className="flex justify-start">
                 <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-stone-500 text-xs">
                    <Loader2 size={14} className="animate-spin" />
                    Thinking...
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex items-center gap-2 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about rooms, parking..."
                className="w-full bg-stone-100 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 p-2 bg-brand-800 text-white rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-brand-800 hover:bg-brand-900 text-white px-5 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        <span className={`font-medium ${isOpen ? 'hidden' : 'block'}`}>Ask Concierge</span>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;