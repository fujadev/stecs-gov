import type { ReactNode } from 'react';
import type { NotificationData } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';
import { match } from 'ts-pattern';
import CheckCircle from '@/assets/icons/CheckCircle';
import Info from '@/assets/icons/Info';
import Warning from '@/assets/icons/Warning';
import { concatClasses } from '@/config/constants/globals';

export type ToastColorVariant = 'error' | 'info' | 'success';

type PickRequired<T, K extends keyof T> = Pick<T, K> & Required<Pick<T, K>>;

export type ShowToastProps = Omit<NotificationData, 'classNames' | 'closeButtonProps' | 'icon' | 'withBorder'> & {
  variant: ToastColorVariant;
};

const getClassNames = ({ variant }: PickRequired<ShowToastProps, 'variant'>): Record<'root' | 'title', string> =>
  match<ToastColorVariant, Record<'root' | 'title', string>>(variant)
    .with('error', () => ({
      root: '#FAE6E6',
      title: '#CA0404',
    }))
    .with('success', () => ({
      root: '#BAE2CA',
      title: '#2A6341',
    }))
    .with('info', () => ({
      root: '#EDF1F3',
      title: '#486075',
    }))
    .exhaustive();

const getIcon = ({ variant }: PickRequired<ShowToastProps, 'variant'>): ReactNode =>
  match<ToastColorVariant, ReactNode>(variant)
    .with('success', () => <div className='w-[24px] h-[24px]'><CheckCircle color='#2A6341' /></div>)
    .with('error', () => <div className='w-[24px] h-[24px]'><Warning color='#CA0404' /></div>)
    .with('info', () => <div className='w-[24px] h-[24px]'><Info color='#486075' /></div>)
    .exhaustive();

export const showToast = ({ message = '', variant, ...props }: ShowToastProps): string => {
  const variantClassNames = getClassNames({ variant });

  const classNames: NotificationData['classNames'] = {
    icon: 'bg-transparent',
    root: concatClasses('p-md', variantClassNames.root),
    title: concatClasses('text-p-md', variantClassNames.title),
  };

  // Returns id of the toast notification
  return notifications.show({
    classNames,
    closeButtonProps: { 'aria-label': 'Hide notification' },
    icon: getIcon({ variant }),
    // Fake news
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    message,
    withBorder: true,
    ...props,
  });
};

