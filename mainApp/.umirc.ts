import { defineConfig } from 'umi';

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/microapp1',
      microApp: 'app1'
    }
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8000',
        },
      ],
    },
  }
});
