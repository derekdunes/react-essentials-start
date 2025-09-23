import { useState } from "react";
import { CORE_EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";
import Section from "./Section.jsx";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedTop) => {
    setSelectedTopic(selectedTop);
  };

  let tabContent = (
    <div id="tab-content">
      <p>Please select a topic</p>
    </div>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{CORE_EXAMPLES[selectedTopic].title}</h3>
        <p>{CORE_EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{CORE_EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        //ButtonContainer={Section} // using {} for custom components
        //ButtonContainer="menu" //and use "" for native html elements
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
