import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Hammer,
  Zap,
  Sun,
  Wind,
  Sparkles,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const serviceIcons = [
  Building2,
  Home,
  Hammer,
  Zap,
  Sun,
  Wind,
  Sparkles,
  Calendar,
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-background rounded-xl p-8 border hover:shadow-medium transition-all hover:border-accent"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
