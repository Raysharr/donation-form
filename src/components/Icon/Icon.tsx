import styled from 'styled-components';

import icons from '~/constants/icons';

const IconImage = styled.img`
  display: block;
`;

interface IconProps {
  name: keyof typeof icons;
}

function Icon({ name }: IconProps) {
  const iconPath = icons[name];

  return <IconImage src={iconPath} alt={name} />;
}

export default Icon;
