"use client";

import { useState } from "react";
import { Jacquard_24 } from "next/font/google";
import {
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
  // Abilities
  const [hitProtection, setHitProtection] = useState<number | null>(null);
  const [strength, setStrength] = useState<number | null>(null);
  const [dexterity, setDexterity] = useState<number | null>(null);
  const [willpower, setWillpower] = useState<number | null>(null);
  // Background
  const [background, setBackground] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [historyLabel, setHistoryLabel] = useState<string | null>(null);
  const [history, setHistory] = useState<string | null>(null);
  const [specialLabel, setSpecialLabel] = useState<string | null>(null);
  const [special, setSpecial] = useState<string | null>(null);
  // Traits
  const [physique, setPhysique] = useState<string | null>(null);
  const [face, setFace] = useState<string | null>(null);
  const [skin, setSkin] = useState<string | null>(null);
  const [hair, setHair] = useState<string | null>(null);
  const [clothing, setClothing] = useState<string | null>(null);
  const [virtue, setVirtue] = useState<string | null>(null);
  const [vice, setVice] = useState<string | null>(null);
  const [speech, setSpeech] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  // Possessions
  const [gold, setGold] = useState<number | null>(null);

  const rollDie = (sides: number): number => {
    return Math.floor(Math.random() * sides) + 1;
  };

  const rollHitProtection = (): void => setHitProtection(rollDie(6));
  const rollStrength = (): void => setStrength(rollDie(6));
  const rollDexterity = (): void => setDexterity(rollDie(6));
  const rollWillpower = (): void => setWillpower(rollDie(6));

  const rollBackground = (): void => {
    const background =
      Backgrounds[Math.floor(Math.random() * Backgrounds.length)];
    setBackground(background.Name);
    setName(
      background.Names[Math.floor(Math.random() * background.Names.length)]
    );
    setHistoryLabel(background.HistoryLabel);
    setHistory(
      background.Histories[
        Math.floor(Math.random() * background.Histories.length)
      ]
    );
    setSpecialLabel(background.SpecialLabel ?? null);
    setSpecial(
      background.Specials[
        Math.floor(Math.random() * background.Specials.length)
      ] ?? null
    );
    let gold = 0;
    for (let i = 0; i < background.GoldDice[0]; i++) {
      gold += rollDie(background.GoldDice[1]);
    }
    setGold(gold);
  };

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

  const rollAge = (): void => {
    setAge(rollDie(20) + rollDie(20) + 10);
  };

  return (
    <div className="min-h-screen m-2">
      <div className="grid sm:grid-cols-2 items-start gap-2 m-auto max-w-[24rem] sm:max-w-[48rem]">
        <h1 className="text-[3rem]">{name}</h1>
        <button
          className={`${jacquard.className} text-[3rem]`}
          onClick={() => {
            rollBackground();
            rollHitProtection();
            rollStrength();
            rollDexterity();
            rollWillpower();
            rollPhysique();
            rollSkin();
            rollHair();
            rollFace();
            rollSpeech();
            rollClothing();
            rollVirtue();
            rollVice();
            rollAge();
          }}
        >
          Randomize
        </button>
        <section id="traits" className="grid gap-2">
          <div
            id="abilities"
            className="grid grid-flow-row grid-cols-4 items-center gap-2"
          >
            {hitProtection && (
              <div>
                <button className="w-full" onClick={() => rollHitProtection()}>
                  HP
                </button>
                <p className="text-center bg-[--background-b]">
                  {hitProtection && `${hitProtection}`}
                </p>
              </div>
            )}
            {strength && (
              <div>
                <button className="w-full" onClick={() => rollStrength()}>
                  STR
                </button>
                <p className="text-center bg-[--background-b]">
                  {strength && `${strength}`}
                </p>
              </div>
            )}
            {dexterity && (
              <div>
                <button className="w-full" onClick={() => rollDexterity()}>
                  DEX
                </button>
                <p className="text-center bg-[--background-b]">
                  {dexterity && `${dexterity}`}
                </p>
              </div>
            )}
            {willpower && (
              <div>
                <button className="w-full" onClick={() => rollWillpower()}>
                  WIL
                </button>
                <p className="text-center bg-[--background-b]">
                  {willpower && `${willpower}`}
                </p>
              </div>
            )}
          </div>
          {physique && (
            <div className="flex bg-[--background-b]">
              <button
                onClick={() => rollPhysique()}
                className="w-1/2 text-left"
              >
                Physique
              </button>
              <p className="px-4 py-2">{physique}</p>
            </div>
          )}
          {skin && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollSkin()} className="w-1/2 text-left">
                Skin
              </button>
              <p className="px-4 py-2">{skin}</p>
            </div>
          )}
          {hair && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollHair()} className="w-1/2 text-left">
                Hair
              </button>
              <p className="px-4 py-2">{hair}</p>
            </div>
          )}
          {face && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollFace()} className="w-1/2 text-left">
                Face
              </button>
              <p className="px-4 py-2">{face}</p>
            </div>
          )}
          {speech && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollSpeech()} className="w-1/2 text-left">
                Speech
              </button>
              <p className="px-4 py-2">{speech}</p>
            </div>
          )}
          {clothing && (
            <div className="flex bg-[--background-b]">
              <button
                onClick={() => rollClothing()}
                className="w-1/2 text-left"
              >
                Clothing
              </button>
              <p className="px-4 py-2">{clothing}</p>
            </div>
          )}
          {virtue && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollVirtue()} className="w-1/2 text-left">
                Virtue
              </button>
              <p className="px-4 py-2">{virtue}</p>
            </div>
          )}
          {vice && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollVice()} className="w-1/2 text-left">
                Vice
              </button>
              <p className="px-4 py-2">{vice}</p>
            </div>
          )}
          {age && (
            <div className="flex bg-[--background-b]">
              <button onClick={() => rollAge()} className="w-1/2 text-left">
                Age
              </button>
              <p className="px-4 py-2">{age}</p>
            </div>
          )}
        </section>
        <section className="grid justify-start gap-2">
          {background && (
            <div className="flex bg-[--background-b]">
              <button
                className="w-1/2 p-2 text-left"
                onClick={() => rollBackground()}
              >
                Background
              </button>
              <p className="p-2">{background}</p>
            </div>
          )}
          {history && (
            <div className="bg-[--background-b]">
              <p className="p-2 primary font-bold">{historyLabel}</p>
              <p className="p-2">{history}</p>
            </div>
          )}
          {special && (
            <div className="bg-[--background-b]">
              <p className="p-2 primary font-bold">{specialLabel}</p>
              <p className="p-2">{special}</p>
            </div>
          )}
          {gold && (
            <div className="bg-[--background-b]">
              <p className="p-2 primary font-bold">Gold</p>
              <p className="p-2">{gold}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
