import * as S from './styles';
import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  return (
    <S.Container>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Danger toast" type="danger" />
      <ToastMessage text="Success toast" type="success" />
    </S.Container>
  );
}
