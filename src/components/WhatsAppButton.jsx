import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/01113939319", "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleClick}
            className="fixed bottom-6 left-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-cairo">تواصل معنا عبر واتساب</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;