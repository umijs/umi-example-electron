import { Outlet } from '@umijs/max';
import { useEffect } from 'react';

import { destoryGlobalSpinner } from '@/utils';

export default function DefaultLayout() {
  useEffect(() => {
    destoryGlobalSpinner();
  }, []);

  return <Outlet />;
}
