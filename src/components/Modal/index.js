import ReactDOM from 'react-dom';
import Proptypes from 'prop-types';

import Button from '../Button';

import * as S from './styles';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Título do modal</h1>
        <p>Corpo do modal</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>

          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: Proptypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
