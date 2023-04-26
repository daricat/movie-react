import React, { ElementType } from 'react';

import ButtonProps from './Button.type';

import './Button.scss';

const defaultElement = 'button';

export function Button<E extends ElementType = typeof defaultElement>({
  theme = 'default',
  as,
  icon,
  label,
  className = '',
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  return (
    <TagName className={`Button ${theme} ${className}`} {...otherProps}>
      {icon}
      <span className='button__label'>{label}</span>
    </TagName>
  );
}

export default Button;
