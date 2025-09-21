import { useState } from "react";
import { CORE_EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};

export default Examples;
