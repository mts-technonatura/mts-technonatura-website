import React, { useState } from 'react';

import CreatableSelect from 'react-select/creatable';

import { useToast } from '@chakra-ui/react';

export default function CreatableMulti() {
  const [state, setState] = useState<{
    tags: Array<{ label: string; value: string }>;
  }>({ tags: [] });
  function handleChange(newValue: any, actionMeta: any) {
    // console.group('Value Changed', newValue);
    if (
      newValue[newValue.length - 1] &&
      newValue[newValue.length - 1].value.match(/^[A-Za-z0-9_-]*$/)
    ) {
      setState({ tags: newValue });
    } else {
      if (newValue.length == 0) setState({ tags: [] });
      else {
      }
    }

    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }
  return (
    <CreatableSelect
      //   isLoading
      //   loadingMessage={() => {
      //     return 'fetching tags';
      //   }}
      isMulti
      value={state.tags}
      onChange={handleChange}
    />
  );
}
