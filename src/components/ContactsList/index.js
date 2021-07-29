import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <S.Container>
      <S.Header>
        <strong>3 Contatos</strong>

        <a href="/">Novo Contato</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Flecha" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Vitor</strong>
              <small>instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(16) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </S.Card>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Vitor</strong>
              <small>instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(16) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </S.Card>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>João Vitor</strong>
              <small>instagram</small>
            </div>
            <span>joao@email.com</span>
            <span>(16) 99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Editar" />
            </a>
            <button type="button">
              <img src={trash} alt="Deletar" />
            </button>
          </div>
        </S.Card>

      </S.ListContainer>
    </S.Container>
  );
}
