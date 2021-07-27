import * as S from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <S.Container>
      <img src={logo} alt="logo" width="201" />

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>
    </S.Container>
  );
}
