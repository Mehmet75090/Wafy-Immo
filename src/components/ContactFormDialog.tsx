import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const COUNTRIES = [
  "Maroc",
  "Tunisie",
  "Côte d'Ivoire",
  "Sénégal",
  "Algérie",
  "France",
  "Autre",
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [country, setCountry] = useState("");
  const [objective, setObjective] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const company = (formData.get("company") as string).trim();
    const phone = (formData.get("phone") as string).trim();

    if (!name || !company || !email || !phone || !country || !objective) {
      toast({ title: "Veuillez remplir tous les champs obligatoires.", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, company, email, phone, country, objective, message: objective },
      });

      if (error) throw error;
      if (data && !data.success) throw new Error(data.error);

      toast({ title: "Demande envoyée !", description: "Nous vous recontactons sous 24h." });
      onOpenChange(false);
      form.reset();
      setCountry("");
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
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Démarrer le pilote
          </DialogTitle>
          <DialogDescription>
            Remplissez le formulaire et nous vous recontactons sous 24h.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet *</Label>
            <Input id="name" name="name" placeholder="Votre nom" required maxLength={100} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Nom du promoteur *</Label>
            <Input id="company" name="company" required maxLength={100} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" placeholder="vous@exemple.com" required maxLength={255} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone *</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+212 6XX XXX XXX" required maxLength={20} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Pays *</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Sélectionnez votre pays" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="objective">Objectif recherché *</Label>
            <Select value={objective} onValueChange={setObjective}>
              <SelectTrigger id="objective">
                <SelectValue placeholder="Que souhaitez-vous atteindre avec Wafy Immo ?" />
              </SelectTrigger>
              <SelectContent>
                {OBJECTIVES.map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            <Send className="mr-2 w-4 h-4" />
            {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
