import { skills } from "@/content/skills";

export function SkillsGrid() {
  return (
    <section id="skills" className="bg-ground px-6 lg:px-12 pt-12 lg:pt-16 pb-12 lg:pb-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="display font-semibold text-ink text-[clamp(2.5rem,5vw,4rem)] leading-[1.05]">
          Skills
        </h2>
        <p className="mt-4 max-w-[58ch] text-[18px] leading-[1.6] font-medium text-ink-soft">
          How I work, from discovering an idea to shipping the product! 
        </p>

        <div className="mt-6 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className="border-t border-line pt-5">
              <h3 className="display text-[21px] font-semibold text-ink leading-snug">
                {skill.name}
              </h3>
              <p className="mt-2.5 text-[16px] leading-[1.6] text-ink-soft">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
