import { memo } from 'react';

const ModuleDefault = () => {
  return (
    <>
      <h1>Default Module</h1>
      <span>This is a default module</span>
    </>
  );
}

export default memo(ModuleDefault);
