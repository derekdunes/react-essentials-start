import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concept">
      <ul>
        {CORE_CONCEPTS.map((concepts) => {
          return <CoreConcept key={concepts.title} {...concepts} />;
        })}
        {/* 
            Hardcoded version
            <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
                image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[0].image}
            /> */}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
