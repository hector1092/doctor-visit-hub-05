import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

const BookingDialog = ({ open, onOpenChange }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/201113939319`, "_blank");
    onOpenChange(false);
    toast.success("جاري تحويلك إلى واتساب");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-4 font-arabic">اتصل بنا</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 mt-4 font-arabic"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل معنا عبر واتساب
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;