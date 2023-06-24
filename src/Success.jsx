import styled from "styled-components";
import iconList from "./assets/icon-list.svg";
import iconSuccess from "./assets/icon-success.svg";

const SuccessModel = styled.section`
  background-color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  .modal-wrapper {
    display: flex;
    flex-direction: column;
    padding-inline: 1rem;
    background-color: white;
  }

  img {
    width: 3.4rem;
  }

  h3 {
    font-size: 2.3rem;
    line-height: 1.2;
    color: var(--charcoal);
    margin-block: 2rem 1.8rem;
  }

  button {
    border: none;
    margin-top: 5rem;
    background-color: var(--dark-slate-grey);
    color: white;
    padding: 0.7rem;
    font-weight: 400;
    border-radius: 0.4rem;

    &:hover {
      background: red;
    }
  }

  @media screen and (min-width: 397px) {
    justify-content: center;
    background-color: var(--charcoal);

    .modal-wrapper {
      max-width: 388px;
      padding: 2rem;
      border-radius: 1rem;
    }

    h3 {
      margin-block: 1rem;
    }

    button {
      margin-top: 2rem;
    }
  }
`;

function Success({ onDismissButtonClick, emailField }) {
  return (
    <SuccessModel>
      <div className="modal-wrapper">
        <div>
          <img src={iconSuccess} alt="icon list" />
        </div>
        <h3>Thanks for subscribing!</h3>
        <p>
          A confirmation email has been sent to <b>{emailField}</b>. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button onClick={onDismissButtonClick}>Dismiss message</button>
      </div>
    </SuccessModel>
  );
}

export default Success;
