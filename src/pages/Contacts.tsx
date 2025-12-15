import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactsHero } from "@/components/contacts/ContactsHero";
import { ContactsInfo } from "@/components/contacts/ContactsInfo";
import { ContactsMap } from "@/components/contacts/ContactsMap";
import { ContactForm } from "@/components/contacts/ContactForm";
import { ContactsLinks } from "@/components/contacts/ContactsLinks";
import { ContactsFAQ } from "@/components/contacts/ContactsFAQ";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <ContactsHero />
        <ContactsInfo />
        <ContactsMap />
        <ContactForm />
        <ContactsLinks />
        <ContactsFAQ />
      </main>

      <Footer />
    </div>
  );
}
