import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Standard cleaning company hours
  const schedule = [
    { hours: "07:00 - 19:00" }, // Monday
    { hours: "07:00 - 19:00" }, // Tuesday
    { hours: "07:00 - 19:00" }, // Wednesday
    { hours: "07:00 - 19:00" }, // Thursday
    { hours: "07:00 - 18:00" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  // Convert JS day index (0=Sunday) to our schedule index (0=Monday)
  const todayScheduleIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.hours.title}
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full max-w-md rounded-2xl border bg-background shadow-soft overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">
                {t.hours.header}
              </span>
            </div>

            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayScheduleIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                      <div>
                        <span
                          className={`text-sm font-medium ${
                            isToday ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {t.hours.days[i]}
                        </span>
                        {isToday && (
                          <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {t.hours.today}
                          </span>
                        )}
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isClosed ? "text-muted-foreground italic" : "text-foreground"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
