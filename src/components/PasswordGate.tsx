import { useState } from "react";
import type { ReactNode } from "react";

type PasswordGateProps = {
  pageId: string;
  password: string;
  title?: string;
  children: ReactNode;
};

function PasswordGate({
  pageId,
  password,
  title,
  children,
}: PasswordGateProps) {
  const storageKey = `archive-unlocked-${pageId}`;

  const [isUnlocked, setIsUnlocked] = useState(() => {
    return sessionStorage.getItem(storageKey) === "true";
  });

  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <main className="passwordPage">
      <section className="passwordBox">
        <p className="eyebrow">Private Archive</p>
        <h1>{title ?? "비공개 페이지"}</h1>
        <p className="passwordText">
          이 페이지는 비밀번호를 입력해야 볼 수 있습니다.
        </p>

        <form
          className="passwordForm"
          onSubmit={event => {
            event.preventDefault();

            if (inputPassword === password) {
              sessionStorage.setItem(storageKey, "true");
              setIsUnlocked(true);
              setErrorMessage("");
              return;
            }

            setErrorMessage("비밀번호가 맞지 않습니다.");
          }}
        >
          <input
            type="password"
            value={inputPassword}
            onChange={event => setInputPassword(event.target.value)}
            placeholder="비밀번호"
            autoFocus
          />

          <button type="submit">Enter</button>
        </form>

        {errorMessage && <p className="passwordError">{errorMessage}</p>}
      </section>
    </main>
  );
}

export default PasswordGate;
