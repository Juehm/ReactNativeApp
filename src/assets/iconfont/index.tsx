/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconGengduomengchong from './IconGengduomengchong';
import IconCangshu from './IconCangshu';
import IconChaiquan from './IconChaiquan';
import IconBuoumao from './IconBuoumao';
import IconGengduoquanzhong from './IconGengduoquanzhong';
import IconCangao from './IconCangao';
import IconBianmu from './IconBianmu';
import IconFadou from './IconFadou';
import IconHashiqi from './IconHashiqi';
import IconHelanzhu from './IconHelanzhu';
import IconKedaya from './IconKedaya';
import IconJumao from './IconJumao';
import IconGengduomaochong from './IconGengduomaochong';
import IconLanmao from './IconLanmao';
import IconNainiumao from './IconNainiumao';
import IconKeji from './IconKeji';
import IconTianyuanquan from './IconTianyuanquan';
import IconLachangquan from './IconLachangquan';
import IconJinmao from './IconJinmao';
import IconYang from './IconYang';
import IconBaimao from './IconBaimao';
import IconSanhuamao from './IconSanhuamao';
import IconHeimao from './IconHeimao';
import IconXianluomao from './IconXianluomao';
import IconWumaomao from './IconWumaomao';
export { default as IconGengduomengchong } from './IconGengduomengchong';
export { default as IconCangshu } from './IconCangshu';
export { default as IconChaiquan } from './IconChaiquan';
export { default as IconBuoumao } from './IconBuoumao';
export { default as IconGengduoquanzhong } from './IconGengduoquanzhong';
export { default as IconCangao } from './IconCangao';
export { default as IconBianmu } from './IconBianmu';
export { default as IconFadou } from './IconFadou';
export { default as IconHashiqi } from './IconHashiqi';
export { default as IconHelanzhu } from './IconHelanzhu';
export { default as IconKedaya } from './IconKedaya';
export { default as IconJumao } from './IconJumao';
export { default as IconGengduomaochong } from './IconGengduomaochong';
export { default as IconLanmao } from './IconLanmao';
export { default as IconNainiumao } from './IconNainiumao';
export { default as IconKeji } from './IconKeji';
export { default as IconTianyuanquan } from './IconTianyuanquan';
export { default as IconLachangquan } from './IconLachangquan';
export { default as IconJinmao } from './IconJinmao';
export { default as IconYang } from './IconYang';
export { default as IconBaimao } from './IconBaimao';
export { default as IconSanhuamao } from './IconSanhuamao';
export { default as IconHeimao } from './IconHeimao';
export { default as IconXianluomao } from './IconXianluomao';
export { default as IconWumaomao } from './IconWumaomao';

export type IconNames = 'icon-gengduomengchong' | 'icon-cangshu' | 'icon-chaiquan' | 'icon-buoumao' | 'icon-gengduoquanzhong' | 'icon-cangao' | 'icon-bianmu' | 'icon-fadou' | 'icon-hashiqi' | 'icon-helanzhu' | 'icon-kedaya' | 'icon-jumao' | 'icon-gengduomaochong' | 'icon-lanmao' | 'icon-nainiumao' | 'icon-keji' | 'icon-tianyuanquan' | 'icon-lachangquan' | 'icon-jinmao' | 'icon-yang' | 'icon-baimao' | 'icon-sanhuamao' | 'icon-heimao' | 'icon-xianluomao' | 'icon-wumaomao';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-gengduomengchong':
      return <IconGengduomengchong key="1" {...rest} />;
    case 'icon-cangshu':
      return <IconCangshu key="2" {...rest} />;
    case 'icon-chaiquan':
      return <IconChaiquan key="3" {...rest} />;
    case 'icon-buoumao':
      return <IconBuoumao key="4" {...rest} />;
    case 'icon-gengduoquanzhong':
      return <IconGengduoquanzhong key="5" {...rest} />;
    case 'icon-cangao':
      return <IconCangao key="6" {...rest} />;
    case 'icon-bianmu':
      return <IconBianmu key="7" {...rest} />;
    case 'icon-fadou':
      return <IconFadou key="8" {...rest} />;
    case 'icon-hashiqi':
      return <IconHashiqi key="9" {...rest} />;
    case 'icon-helanzhu':
      return <IconHelanzhu key="10" {...rest} />;
    case 'icon-kedaya':
      return <IconKedaya key="11" {...rest} />;
    case 'icon-jumao':
      return <IconJumao key="12" {...rest} />;
    case 'icon-gengduomaochong':
      return <IconGengduomaochong key="13" {...rest} />;
    case 'icon-lanmao':
      return <IconLanmao key="14" {...rest} />;
    case 'icon-nainiumao':
      return <IconNainiumao key="15" {...rest} />;
    case 'icon-keji':
      return <IconKeji key="16" {...rest} />;
    case 'icon-tianyuanquan':
      return <IconTianyuanquan key="17" {...rest} />;
    case 'icon-lachangquan':
      return <IconLachangquan key="18" {...rest} />;
    case 'icon-jinmao':
      return <IconJinmao key="19" {...rest} />;
    case 'icon-yang':
      return <IconYang key="20" {...rest} />;
    case 'icon-baimao':
      return <IconBaimao key="21" {...rest} />;
    case 'icon-sanhuamao':
      return <IconSanhuamao key="22" {...rest} />;
    case 'icon-heimao':
      return <IconHeimao key="23" {...rest} />;
    case 'icon-xianluomao':
      return <IconXianluomao key="24" {...rest} />;
    case 'icon-wumaomao':
      return <IconWumaomao key="25" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
