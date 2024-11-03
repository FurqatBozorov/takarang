import { useMemo, useState } from 'react';

function useBoolean(initialValue = false) {
  const [value, toggle] = useState(initialValue);

  const handlers = useMemo(
    () => ({
      toggle,
      on: () => toggle(true),
      off: () => toggle(false),
    }),
    [toggle]
  );

  return [value, handlers];
}

export default useBoolean;
