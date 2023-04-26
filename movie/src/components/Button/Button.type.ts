import { IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ElementType, ComponentProps } from 'react';

type ButtonTheme = 'default' | 'primary' | 'smoke' | 'transparent';

type ButtonCustomProps<E extends ElementType> = {
  theme?: ButtonTheme;
  icon?: React.ReactNode;
  as?: E;
  label?: string;
};

type ButtonProps<E extends ElementType> = ButtonCustomProps<E> &
  Omit<ComponentProps<E>, keyof ButtonCustomProps<E>>;

export default ButtonProps;
