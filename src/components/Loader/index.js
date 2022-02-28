import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import * as S from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <S.Overlay>
      <Spinner size={90} />
    </S.Overlay>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
