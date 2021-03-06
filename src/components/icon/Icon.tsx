import React, { FC } from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export type ThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IconProps extends FontAwesomeIconProps {
  /**
   * icon的主题
   */
  theme?: ThemeProps;
  className?: string;
}

const Icon: FC<IconProps> = (props) => {
  // icon-primary
  // eslint-disable-next-line
  const { className, theme, ...restProps } = props;
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
