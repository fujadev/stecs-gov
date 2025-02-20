import type { FC, MouseEventHandler, ReactNode } from 'react';
import type { ButtonStylesNames, ButtonVariant, DefaultMantineColor } from '@mantine/core';
import { Button } from '@mantine/core';


interface ButtonProps {
  color?: DefaultMantineColor | undefined
  title?: string
  children?: ReactNode
  // eslint-disable-next-line
  variant?: (string & {}) | ButtonVariant | undefined
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  leftSection?: ReactNode
  rightSection?: ReactNode
  mih?: number | string
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  type?: 'button' | 'reset' | 'submit' | undefined
  classNames?: Partial<Record<ButtonStylesNames, string>> | undefined
  w?: number | string
}

const AppButton: FC<ButtonProps> = ({ children, classNames, color = '#233C8B', disabled, fullWidth, leftSection, loading, mih = 52, onClick, rightSection, title, type, variant, w }) => (
  <Button
    type={type}
    onClick={onClick}
    loading={loading}
    disabled={disabled}
    classNames={{
      inner: 'gap-[12px] ',
      root: 'rounded-[8px]',
      ...classNames
    }}
    className='animate-shimmer'
    mih={mih}
    leftSection={leftSection}
    rightSection={rightSection}
    fullWidth={fullWidth}
    color={color}
    variant={variant}
    w={w}
  >
    {children || <span className='text-[16px]'>{title}</span>}
  </Button>
);

export default AppButton;
