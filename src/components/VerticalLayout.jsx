import { memo } from 'react';
import ModuleOne from "./ModuleOne";
import ModuleTwo from "./ModuleTwo";
import ModuleDefault from "./ModuleDefault";
import Subscribable from './Subscribable'

function VerticalLayout({ modules }) {
  return (
    <>
      <h2>Vertical Layout Title</h2>
      <p>Random Text Generator is a web application which provides true random text which you can use in your documents or web designs. How does it work? First we took many books available on project Gutenberg and stored their contents in a database. Then a computer algorithm takes the words we stored earlier and shuffles them into sentences and paragraphs.</p>
      <ul>
        {modules.map((module) => {
          // if (module.style === "subscribable") return <Subscribable key={module.id} id={module.id} />
          if (module.id === "module_1") return <ModuleOne key={module.id} />
          if (module.id === "module_2") return <ModuleTwo key={module.id} />

          return <ModuleDefault key={module.id} />
        })}
      </ul>
    </>
  )
}

export default memo(VerticalLayout);
