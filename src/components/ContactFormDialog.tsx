import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLocation } from "react-router-dom";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OBJECTIVES = [
  "Qualifier mes leads entrants plus vite",
  "Relancer mes leads dormants / injoignables",
  "Automatiser la prise de RDV visite",
  "Augmenter mon taux de conversion",
  "Réduire le coût de mon call center",
  "Tester Wafy Immo sur un projet pilote",
  "Autre",
];

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const { pathname } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [objective, setObjective] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const company = (formData.get("company") as string).trim();
    const phone = (formData.get("phone") as string).trim();

    if (!name || !company || !phone || !objective) {
      toast({ title: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, company, phone, objective },
      });

      if (error) throw error;
      if (data && !data.success) throw new Error(data.error);

      toast({ title: "Demande envoyée !", description: "Nous vous recontactons sous 24h." });
      onOpenChange(false);
      form.reset();
      setObjective("");
    } catch (err) {
      console.error("Email send error:", err);
      toast({ title: "Erreur lors de l'envoi", description: "Veuillez réessayer ou nous contacter directement.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-1.5rem)] max-h-[calc(100dvh-1.5rem)] overflow-y-auto p-5 sm:max-w-md sm:p-6 bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Démarrer le pilote
          </DialogTitle>
          <DialogDescription>
            Quelques informations suffisent. Nous vous recontactons sous 24h.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-1 sm:space-y-4 sm:mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input id="name" name="name" placeholder="Votre nom" autoComplete="name" required maxLength={100} className="h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+212 6XX XXX XXX" required maxLength={20} className="h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{pathname === "/agent-immobilier" ? "Entreprise *" : "Promoteur *"}</Label>
            <Input id="company" name="company" autoComplete="organization" required maxLength={100} className="h-12" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="objective">Votre objectif *</Label>
            <Select value={objective} onValueChange={setObjective}>
              <SelectTrigger id="objective" className="h-12 text-left">
                <SelectValue placeholder="Choisir un objectif" />
              </SelectTrigger>
              <SelectContent>
                {OBJECTIVES.map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full min-h-12" disabled={isSubmitting}>
            <Send className="mr-2 w-4 h-4" />
            {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
