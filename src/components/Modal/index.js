import Button from '../Button';

import * as S from './styles';

export default function Modal() {
  return (
    <S.Overlay>
      <S.Container>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button">
            Deletar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>
  );
}
