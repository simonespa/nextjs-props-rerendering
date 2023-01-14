import { memo } from 'react';
import { URL } from '../utils';
import { mapToModuleOne } from '../rms/map-to-props/module-one';
import { useRmsModule } from '../rms/module-query'

const ModuleOne = () => {
  const { error, data: { title, items } } = useRmsModule(URL, mapToModuleOne)

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </>
  );
}

export default memo(ModuleOne);
