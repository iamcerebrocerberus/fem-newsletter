import { useState } from "react";
import styled from "styled-components";
import Success from "./Success";
import signUpDesktop from "./assets/illustration-sign-up-desktop.svg";
import signUpMobile from "./assets/illustration-sign-up-mobile.svg";
import iconSuccess from "./assets/icon-success.svg";
import isEmail from "validator/lib/isEmail";

const StyledContainer = styled.main`
  --md-width: 1000px;
  background-color: white;
  overflow: hidden;
  border-radius: 0.6rem;

  section {
    padding: 1rem;
    h1 {
      color: var(--charcoal);
      font-size: 2rem;
    }

    p {
      color: var(--charcoal);
      margin-block: 1rem;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    color: var(--charcoal);
    margin-block-start: 2rem;

    li {
      position: relative;
      padding-inline-start: 2rem;

      &:nth-child(2) {
        margin-block: 0.7rem;
      }

      &:before {
        position: absolute;
        content: "";
        background-image: url(${iconSuccess});
        background-size: contain;
        background-repeat: no-repeat;
        width: 1.4rem;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }

  form {
    margin-block-start: 2rem;

    div {
      display: flex;
      justify-content: space-between;
      margin-block-end: 0.5rem;
      font-size: 0.8rem;

      span {
        color: var(--tomato);
      }
    }

    label {
    }
    input {
      width: 100%;
      border: 2px solid var(--grey);
      padding: 0.8rem;
      border-radius: 0.5rem solid var(--grey);
      border-radius: 0.6rem;

      &:focus {
        outline: 3px dotted black;
      }
    }

    button {
      background-color: var(--dark-slate-grey);
      border: none;
      outline: none;
      width: 100%;
      color: white;
      padding: 1rem;
      border-radius: 0.6rem;
      margin-block-start: 1rem;

      button:focus {
        outline: 3px dotted grey;
      }
    }
  }

  @media screen and (min-width: 397px) {
    max-width: 375px;
    margin: auto auto;
  }

  @media screen and (min-width: 1140px) {
    min-width: var(--md-width);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    picture {
      margin: 0;
      grid-column: 2/-1;
      grid-row: 1 / -1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1.5rem;
    }

    section {
      padding-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.2rem;
      }

      li {
        font-size: 1.1rem;
      }
    }
  }
`;
function App() {
  const [emailField, setEmailField] = useState("");
  const [mailIsNotValid, setMailIsNotValid] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isEmail(emailField)) {
      setMailIsNotValid(true);
    } else {
      setMailIsNotValid(false);
      setShowSuccessModal(true);
    }
  }

  function handleDismissButtonClick() {
    setShowSuccessModal(false);
  }

  return (
    <StyledContainer>
      <picture>
        <source srcSet={signUpDesktop} media="(min-width: 1140px)" />
        <img src={signUpMobile} alt="sign up mobile" />
      </picture>

      <section>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiveing monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <b>Email address</b>
            </label>
            {mailIsNotValid && (
              <span>
                <b>valid email required</b>
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="email@company.com"
            value={emailField}
            onChange={(evt) => setEmailField(evt.target.value)}
            style={{ borderColor: mailIsNotValid ? "red" : "" }}
          />
          <button>Subscribe to monthly newsletter</button>
        </form>
      </section>
      {showSuccessModal && (
        <Success onDismissButtonClick={handleDismissButtonClick} />
      )}
    </StyledContainer>
  );
}

export default App;
