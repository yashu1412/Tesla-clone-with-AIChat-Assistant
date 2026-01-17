
import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TypingIndicatorProps {
  visible: boolean;
}

const TypingIndicator = ({ visible }: TypingIndicatorProps) => {
  if (!visible) return null;
  
  return (
    <div className="flex items-center gap-1.5 p-2">
      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '0.8s' }} />
      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms', animationDuration: '0.8s' }} />
      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms', animationDuration: '0.8s' }} />
    </div>
  );
};

const ChatbotPanel = ({ isOpen, onClose }: ChatbotPanelProps) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Tesla's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  // Using Gemini API
  const apiKey = "AIzaSyDzLZBRSpzrr84D6dTaZrP3ALBqfEg4LIw";
  const baseUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
  
  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Generate response using Gemini API
  const generateResponse = async (userMessage: string) => {
    try {
      setIsTyping(true);
      
      const response = await fetch(`${baseUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Tesla's official AI assistant. You have comprehensive knowledge about all Tesla products, services, and company information.

TESLA VEHICLES:
- Model S: Luxury sedan with up to 405 miles of range, 1,020 horsepower, and 0-60 mph in 1.99 seconds with Plaid model
- Model 3: Compact sedan with up to 358 miles of range, minimalist interior, and advanced safety features
- Model X: SUV with falcon-wing doors, up to 348 miles of range, and seating for up to 7 people
- Model Y: Compact SUV with up to 330 miles of range and versatile cargo space
- Cybertruck: Innovative pickup with angular exoskeleton design, up to 340 miles of range, and 11,000 lbs towing capacity
- Semi: Electric semi-truck with 500 miles of range and enhanced autopilot

TESLA ENERGY PRODUCTS:
- Solar Panels: Sleek, low-profile design that integrates with existing roofs
- Solar Roof: Entire roof made of solar tiles that look like premium roof tiles
- Powerwall: Home battery that stores solar energy and provides backup power
- Megapack: Utility-scale energy storage for grid stabilization

TESLA TECHNOLOGY:
- Autopilot: Advanced driver assistance system with traffic-aware cruise control and autosteer
- Full Self-Driving (FSD): Enhanced capability with navigate on autopilot, auto lane change, autopark, and traffic light recognition
- Supercharger Network: Global fast-charging network exclusive to Tesla vehicles
- Tesla App: Smartphone app for vehicle control, monitoring, and updates

When responding to the user, be concise, accurate, and helpful. Focus exclusively on Tesla-related information. If asked about competitors or non-Tesla topics, politely redirect to Tesla alternatives.

User question: ${userMessage}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1024
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });
      
      console.log('API Request:', {
        url: `${baseUrl}?key=REDACTED`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          contents: [
            {
              parts: [
                {
                  text: "Tesla assistant prompt with detailed Tesla information"
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1024
          }
        }
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response Error:', errorText);
        console.error('Status:', response.status);
        console.error('Status Text:', response.statusText);
        console.error('Headers:', Object.fromEntries([...response.headers.entries()]));
        throw new Error(`API error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API Response Data:', data);
      
      // Extract the response text from Gemini API response format
      const responseText = data.candidates[0].content.parts[0].text;
      
      // Verify the response is Tesla-related, if not, request a correction
      if (!isTeslaRelated(responseText)) {
        console.log('Response not Tesla-related, requesting correction');
        return await generateTeslaFallbackResponse(userMessage);
      }
      
      return responseText;
      
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to the assistant service. Please try again later.",
        variant: "destructive"
      });
      return "I'm having trouble connecting to my Tesla information systems. Please try again later.";
    } finally {
      setIsTyping(false);
    }
  };
  
  // Helper function to check if response is Tesla-related
  const isTeslaRelated = (text: string): boolean => {
    const teslaKeywords = [
      'tesla', 'model s', 'model 3', 'model x', 'model y', 'cybertruck', 'semi',
      'powerwall', 'solar roof', 'solar panel', 'supercharger', 'autopilot', 'fsd',
      'full self-driving', 'elon musk', 'gigafactory', 'electric vehicle', 'ev'
    ];
    
    const lowerText = text.toLowerCase();
    return teslaKeywords.some(keyword => lowerText.includes(keyword));
  };
  
  // Fallback function for non-Tesla responses
  const generateTeslaFallbackResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch(`${baseUrl}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Tesla's official AI assistant. The user asked: "${userMessage}". 
                  
                  Provide a response that is ONLY about Tesla products, services, or information. 
                  If the question is not about Tesla, politely redirect them to a Tesla-related topic.
                  
                  For example:
                  - If asked about a competitor, compare to Tesla's equivalent offering
                  - If asked about a non-automotive topic, relate it to Tesla's mission or products
                  - If asked a general question, provide Tesla-specific information`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.1,
            topP: 0.9,
            maxOutputTokens: 512
          }
        })
      });
      
      if (!response.ok) {
        throw new Error(`Fallback API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error in fallback response:', error);
      return "As Tesla's assistant, I can help you with information about Tesla vehicles, energy products, and services. How can I assist you with Tesla today?";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input.trim(),
      sender: 'user' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate response after a short delay to simulate thinking
    const botResponse = await generateResponse(input.trim());
    
    // Add bot response
    setMessages(prev => [
      ...prev, 
      {
        id: prev.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white text-black border border-black/20 rounded-xl shadow-2xl flex flex-col transform transition-all duration-500 ${
        isOpen ? 'animate-slide-in scale-100 opacity-100' : 'animate-slide-out scale-95 opacity-0'
      }`}
      style={{ 
        transformOrigin: 'bottom right',
        boxShadow: isOpen ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none'
      }}
    >
      {/* Header with animation */}
      <div className="flex items-center justify-between p-4 border-b border-black/10 bg-black text-white">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 animate-pulse" />
          <h2 className="font-medium text-lg">Tesla Assistant</h2>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:rotate-90"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Messages Container with staggered animations */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-black bg-white">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
            style={{
              animation: `fade-in 0.3s ease-out ${index * 0.1}s both`,
              opacity: 1
            }}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl transform transition-all duration-300 hover:scale-[1.02] ${
                message.sender === 'user'
                  ? 'bg-black text-white rounded-tr-none shadow-lg'
                  : 'bg-gray-200 text-black rounded-tl-none border border-black/10 hover:bg-gray-300'
              }`}
            >
              <p className={`${message.sender === 'user' ? 'text-white' : 'text-black'} font-medium`}>{message.text}</p>
              <div
                className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-600'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        <div className="flex justify-start">
          <TypingIndicator visible={isTyping} />
        </div>
        
        {/* For auto-scrolling */}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area with animation */}
      <div className="p-4 border-t border-black/10 bg-white">
        <div className="flex items-center gap-2 animate-fade-in text-black" style={{ animationDelay: '0.2s' }}>
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 border-black/30 focus-visible:ring-black transition-all duration-300 focus:shadow-md"
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-black hover:bg-black/80 transition-all duration-300 transform hover:scale-105 active:scale-95"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPanel;
