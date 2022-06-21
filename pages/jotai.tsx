import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/**
 * atomic model inspired by Recoil
 */

/** jotai atom */
const exampleAtom = atom({
  key: "text",
  example: "Hello World",
});

/** jotai selector */
const exampleAtomSelector = atom((get) => get(exampleAtom).example);

/** jotai atom with localstorage */
const darkModeAtom = atomWithStorage("darkMode", false);

const Jotai: NextPage = () => {
  /** use atom */
  const [text, setText] = useAtom(exampleAtom);
  const handleSetText = () => {
    setText((state) => ({
      ...state,
      example: `Hello World ${Math.random()}`,
    }));
  };

  /** use selector */
  const [exampleSelector] = useAtom(exampleAtomSelector);

  /** use persistant atom */
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // prevent nextjs ssr
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return <></>;

  return (
    <div>
      <h1>Jotai</h1>
      <div>
        <em>example atom: </em>
        <code>{JSON.stringify(text)}</code>
        <button onClick={handleSetText}>toggle</button>
      </div>
      <div>
        <em>example selector: </em>
        <code>{JSON.stringify(exampleSelector)}</code>
      </div>
      <div>
        <em>persistant atom (localstorage): </em>
        <code>{JSON.stringify(darkMode)}</code>
        <button onClick={toggleDarkMode}>toggle</button>
      </div>
    </div>
  );
};

export default Jotai;
