'use client';

// This file includes providers that works with 'use client'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/config/api/config/store';
import { mantineTheme } from '@/config/constants/theme/mantine';

const Providers = ({ children }: { children: ReactNode }): ReactNode => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MantineProvider theme={mantineTheme}>
        <Notifications position='top-right' />
        <ModalsProvider>
          {children}
        </ModalsProvider>
      </MantineProvider>
    </PersistGate>
  </Provider>
);

export default Providers;
