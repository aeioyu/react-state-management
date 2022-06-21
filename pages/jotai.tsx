import React from "react";
import { NextPage } from "next";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/**
 * atomic model inspired by Recoil
 */

/** jotai atom */
const textAtom = atom("hello");

/** jotai selector */
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

/** jotai atom with localstorage */
const darkModeAtom = atomWithStorage("darkMode", false);

const Jotai: NextPage = () => {
  return <div data-testid="Jotai">{/* page code */}</div>;
};

export default Jotai;
