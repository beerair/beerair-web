/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SVGProps } from 'react';

import * as icon from '@/assets/icon';
import { theme } from '@/themes';
import { ColorTheme } from '@/themes/types';

export type IconNameType = keyof typeof icon;
export type ColorThemeNameType = keyof ColorTheme['color'];
export type SemanticColorThemeNameType = keyof ColorTheme['semanticColor'];

const DEFAULT_SIZE = 30;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  color?: ColorThemeNameType;
  /** semanticColor가 color보다 적용 우선순위가 높습니다. */
  semanticColor?: SemanticColorThemeNameType;
}

const Icon: React.FC<SvgIconProps> = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color,
  semanticColor,
  style,
  ...props
}) => {
  const SvgIcon = icon[name];

  const IconStyles = css`
    &,
    path {
      ${color ? `fill: ${theme.color[color]} !important;` : ''}
      ${semanticColor ? `fill: ${theme.semanticColor[semanticColor]} !important;` : ''}
      width: ${width ?? `${size}px`};
      height: ${height ?? 'auto'};
    }
  `;

  return <SvgIcon {...props} css={IconStyles} style={style} />;
};

export default Icon;
