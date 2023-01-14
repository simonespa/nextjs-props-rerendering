import { memo } from 'react';
import { URL } from '../utils';
import { mapToSubscribable } from '../rms/map-to-props/subscribable';
import { useRmsModule } from '../rms/module-query'

const Subscribable = ({ id }) => {
  const { error, data } = useRmsModule(URL, mapToSubscribable(id))

  const { title, items } = data;

  console.log(data);

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.id} - {item.subscribed}</li>)
        }
      </ul>
    </>
  );
}

export default memo(Subscribable);
