import { memo } from 'react';
import { URL } from '../utils';
import { mapToModuleTwo } from '../rms/map-to-props/module-two';
import { useRmsModule } from '../rms/module-query'

const ModuleTwo = () => {
  const { error, data: { title, status, items } } = useRmsModule(URL, mapToModuleTwo)

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <h3>{title}</h3>
      <h4>The status of the module is {status}</h4>

      {
        items.map(item => <p key={item.id}>{item.text}</p>)
      }
    </>
  );
}

export default memo(ModuleTwo);
