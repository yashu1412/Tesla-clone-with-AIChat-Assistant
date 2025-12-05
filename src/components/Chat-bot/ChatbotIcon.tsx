
import { useState, useEffect } from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import ChatbotPanel from './ChatbotPanel';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [rightOffset, setRightOffset] = useState(24);
  const [bottomOffset, setBottomOffset] = useState(24);
  const { toast } = useToast();
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenOpened) {
        toast({
          title: "Need help?",
          description: "Our AI assistant is ready to answer your questions.",
          duration: 5000,
        });
      }
    }, 60000); // Show a toast after 1 minute if the chatbot hasn't been opened

    return () => clearTimeout(timer);
  }, [hasBeenOpened, toast]);

  const toggleChat = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (!isOpen && !hasBeenOpened) {
      setHasBeenOpened(true);
    }
    
    setIsOpen(!isOpen);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  useEffect(() => {
    const computeOffset = () => {
      const selectors = [
        '.max-w-7xl',
        '.max-w-6xl',
        '.max-w-5xl',
        '.max-w-4xl',
        '.max-w-3xl'
      ];
      let bestRight = 24;
      let bestRect: DOMRect | null = null;
      selectors.forEach((sel) => {
        const nodes = document.querySelectorAll(sel);
        nodes.forEach((node) => {
          const rect = node.getBoundingClientRect();
          if (!bestRect || rect.width > bestRect.width) {
            bestRect = rect;
          }
        });
      });
      if (bestRect) {
        bestRight = Math.max(24, window.innerWidth - bestRect.right + 24);
        const candidateBottom = Math.max(24, window.innerHeight - bestRect.bottom + 24);
        setBottomOffset(candidateBottom);
      } else {
        const fallbackWidth = 1280; // 7xl
        bestRight = Math.max(24, (window.innerWidth - fallbackWidth) / 2 + 24);
        setBottomOffset(24);
      }
      setRightOffset(bestRight);
    };
    computeOffset();
    window.addEventListener('resize', computeOffset);
    return () => window.removeEventListener('resize', computeOffset);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      const event = new Event('resize');
      window.dispatchEvent(event);
    }, 0);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <div 
        className={`fixed z-50 transition-all duration-500 ease-in-out ${isOpen ? 'scale-0 opacity-0 translate-y-10' : 'scale-100 opacity-100 translate-y-0'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ right: rightOffset, bottom: bottomOffset }}
      >
        <div className="flex flex-col items-end gap-3">
          <Link 
            to="/tesla-chat-bot"
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-black/80 transition-all duration-500 flex items-center justify-center transform hover:scale-110 hover:rotate-[360deg]"
            aria-label="Open Full Chat Experience"
            style={{
              transform: isHovering ? 'translateY(-5px)' : 'translateY(0px)',
              boxShadow: isHovering ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
          
          <button
            onClick={toggleChat}
            className={`bg-black text-white p-4 rounded-full shadow-lg hover:bg-black/80 transition-all duration-500 relative ${isHovering ? 'animate-pulse' : ''}`}
            aria-label="Open Tesla AI Assistant"
            style={{
              transform: isHovering ? 'scale(1.1)' : 'scale(1)',
              boxShadow: isHovering ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            <MessageSquare className="w-6 h-6" />
            {!hasBeenOpened && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </button>
        </div>
      </div>
      
      {(isOpen || isAnimating) && (
        <ChatbotPanel isOpen={isOpen} onClose={toggleChat} />
      )}
    </>
  );
};

export default ChatbotIcon;
