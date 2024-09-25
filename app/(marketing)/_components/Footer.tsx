import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="space-x-4 flex items-center justify-center w-full">
        <Button size="sm" variant="ghost">
          Privacy policy
        </Button>
        <Button size="sm" variant="ghost">
          Terms of service
        </Button>
      </div>
    </div>
  );
};
