import { FC } from 'react';
import {
  Routes as ReactRoutes,
  Route as ReactRouteDom,
} from 'react-router-dom';

import Page404 from '@/pages/error/404/404';
import Home from '@/pages/Home';

const Routes: FC = () => {
  return (
    <ReactRoutes>
      <ReactRouteDom path="/" element={<Home />} />
      <ReactRouteDom path="*" element={<Page404 />} />
    </ReactRoutes>
  );
};

export default Routes;
