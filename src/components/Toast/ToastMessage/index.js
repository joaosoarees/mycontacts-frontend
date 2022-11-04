import PropTypes from 'prop-types';
import * as S from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <S.Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      {type === 'danger' && <img src={xCircleIcon} alt="X" />}
      <strong>{text}</strong>
    </S.Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
