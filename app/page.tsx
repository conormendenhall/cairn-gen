"use client";

import { useState } from "react";
import { Jacquard_24 } from "next/font/google";
import {
  Names,
  Backgrounds,
  Physiques,
  Skins,
  Hairs,
  Faces,
  Speech,
  Clothing,
  Virtues,
  Vices,
} from "./tables";

const jacquard = Jacquard_24({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  // Abilities
  const [hitProtection, setHitProtection] = useState<number | null>(null);
  const [strength, setStrength] = useState<number | null>(null);
  const [dexterity, setDexterity] = useState<number | null>(null);
  const [willpower, setWillpower] = useState<number | null>(null);
  // Traits
  const [physique, setPhysique] = useState<string | null>(null);
  const [face, setFace] = useState<string | null>(null);
  const [skin, setSkin] = useState<string | null>(null);
  const [hair, setHair] = useState<string | null>(null);
  const [clothing, setClothing] = useState<string | null>(null);
  const [virtue, setVirtue] = useState<string | null>(null);
  const [vice, setVice] = useState<string | null>(null);
  const [speech, setSpeech] = useState<string | null>(null);
  const [background, setBackground] = useState<string | null>(null);

  const rollDie = (sides: number): number => {
    return Math.floor(Math.random() * sides) + 1;
  };

  const generateName = (): void => {
    const roll = Math.floor(Math.random() * Names.length);
    setName(Names[roll]);
  };

  const rollHitProtection = (): void => setHitProtection(rollDie(6));
  const rollStrength = (): void => setStrength(rollDie(6));
  const rollDexterity = (): void => setDexterity(rollDie(6));
  const rollWillpower = (): void => setWillpower(rollDie(6));

  const rollPhysique = (): void => {
    const roll = Math.floor(Math.random() * Physiques.length);
    setPhysique(Physiques[roll]);
  };

  const rollFace = (): void => {
    const roll = Math.floor(Math.random() * Faces.length);
    setFace(Faces[roll]);
  };

  const rollSkin = (): void => {
    const roll = Math.floor(Math.random() * Skins.length);
    setSkin(Skins[roll]);
  };

  const rollHair = (): void => {
    const roll = Math.floor(Math.random() * Hairs.length);
    setHair(Hairs[roll]);
  };

  const rollClothing = (): void => {
    const roll = Math.floor(Math.random() * Clothing.length);
    setClothing(Clothing[roll]);
  };

  const rollVirtue = (): void => {
    const roll = Math.floor(Math.random() * Virtues.length);
    setVirtue(Virtues[roll]);
  };

  const rollVice = (): void => {
    const roll = Math.floor(Math.random() * Vices.length);
    setVice(Vices[roll]);
  };

  const rollSpeech = (): void => {
    const roll = Math.floor(Math.random() * Speech.length);
    setSpeech(Speech[roll]);
  };

  const rollBackground = (): void => {
    const roll = Math.floor(Math.random() * Backgrounds.length);
    setBackground(Backgrounds[roll]);
  };

  return (
    <div className="min-h-screen max-w-[30rem] m-auto items-center">
      <section>
        <p className="m-4 text-[3rem]">{name}</p>
        <div className="grid gap-2">
          <div
            id="abilities"
            className="grid grid-flow-row grid-cols-4 items-center gap-2"
          >
            <div>
              <button onClick={() => rollHitProtection()}>
                HP
              </button>
              <p>
                {hitProtection && `${hitProtection}`}
              </p>
            </div>
            <div>
              <button onClick={() => rollStrength()}>
                STR
              </button>
              <p>{strength && `${strength}`}</p>
            </div>
            <div>
              <button onClick={() => rollDexterity()}>
                DEX
              </button>
              <p>{dexterity && `${dexterity}`}</p>
            </div>
            <div>
              <button onClick={() => rollWillpower()}>
                WIL
              </button>
              <p>{willpower && `${willpower}`}</p>
            </div>
          </div>
          <div className="flex bg-[--background-b]">
            <button
              className="w-1/2 p-2 text-left"
              onClick={() => rollBackground()}
            >
              Background
            </button>
            <p className="p-2">{background}</p>
          </div>
        </div>
      </section>
      <section id="traits" className="grid gap-2">
        <h2>Traits</h2>
        <div>
          <button onClick={() => rollPhysique()} className="w-1/2 text-left">
            Physique
          </button>
          <p className="px-4 py-2">{physique}</p>
        </div>
        <div>
          <button onClick={() => rollSkin()} className="w-1/2 text-left">
            Skin
          </button>
          <p className="px-4 py-2">{skin}</p>
        </div>
        <div>
          <button onClick={() => rollHair()} className="w-1/2 text-left">
            Hair
          </button>
          <p className="px-4 py-2">{hair}</p>
        </div>
        <div>
          <button onClick={() => rollFace()} className="w-1/2 text-left">
            Face
          </button>
          <p className="px-4 py-2">{face}</p>
        </div>
        <div>
          <button onClick={() => rollSpeech()} className="w-1/2 text-left">
            Speech
          </button>
          <p className="px-4 py-2">{speech}</p>
        </div>
        <div>
          <button onClick={() => rollClothing()} className="w-1/2 text-left">
            Clothing
          </button>
          <p className="px-4 py-2">{clothing}</p>
        </div>
        <div>
          <button onClick={() => rollVirtue()} className="w-1/2 text-left">
            Virtue
          </button>
          <p className="px-4 py-2">{virtue}</p>
        </div>
        <div>
          <button onClick={() => rollVice()} className="w-1/2 text-left">
            Vice
          </button>
          <p className="px-4 py-2">{vice}</p>
        </div>
        <button
          className={`${jacquard.className} text-[3rem]`}
          onClick={() => {
            generateName();
            rollHitProtection();
            rollStrength();
            rollDexterity();
            rollWillpower();
            rollBackground();
            rollPhysique();
            rollSkin();
            rollHair();
            rollFace();
            rollSpeech();
            rollClothing();
            rollVirtue();
            rollVice();
          }}
        >
          Randomize
        </button>
      </section>
    </div>
  );
}
