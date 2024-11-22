import type { FC, MouseEventHandler, ReactNode } from 'react';
import { Button, ButtonStylesNames, ButtonVariant, DefaultMantineColor } from '@mantine/core';


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
  mih?: string | number
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  type?: 'button' | 'submit' | 'reset' | undefined
  classNames?: Partial<Record<ButtonStylesNames, string>> | undefined
  w?: string | number
}

const AppButton: FC<ButtonProps> = ({ w, disabled, loading, children, classNames, type, onClick, mih = 40, color = '#233C8B', variant, title, fullWidth, leftSection, rightSection }) => (
  <Button
    type={type}
    onClick={onClick}
    loading={loading}
    disabled={disabled}
    classNames={{
      inner: 'gap-[12px]',
      root: 'rounded-[8px]',
      ...classNames
    }}
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
