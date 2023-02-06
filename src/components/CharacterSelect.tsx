import React from "react";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import { motion } from "framer-motion";

const rapper = {
  hidden: { opacity: 0.5 },
  out: { opacity: 1 },
};

interface Props {
  rapper1: string;
  setRapper1: any;
  rapper2: string;
  setRapper2: any;
  gameActive: boolean;
  p1Turn: boolean;
}

export default function CharacterSelect({
  rapper1,
  setRapper1,
  rapper2,
  setRapper2,
  gameActive,
  p1Turn,
}: Props) {
  return (
    <div className="flex w-full justify-around mt-10">
      <div className="flex flex-col justify-center w-50">
        <div className="w-40 h-40 relative mb-10">
          {rapper1 ? (
            <motion.div
              animate={!gameActive ? "out" : p1Turn ? "out" : "hidden"}
              variants={rapper}
              transition={{ ease: "circIn", duration: 1 }}
            >
              <Image
                src={"/drake.png"}
                alt="rapper image"
                fill
                className="object-contain"
              />
            </motion.div>
          ) : (
            <></>
          )}
        </div>
        {!gameActive ? (
          <div className="flex justify-center">
            <DropdownMenu setRapper={setRapper1} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col justify-center w-50">
        <div className="w-40 h-40 relative -scale-x-100 mb-10">
          {rapper2 ? (
            <motion.div
              animate={!gameActive ? "out" : p1Turn ? "hidden" : "out"}
              variants={rapper}
              transition={{ ease: "circIn", duration: 1 }}
            >
              <Image
                src={"/drake.png"}
                alt="rapper image"
                fill
                className="object-contain"
              />
            </motion.div>
          ) : (
            <></>
          )}
        </div>
        {!gameActive ? (
          <div className="flex justify-center">
            <DropdownMenu setRapper={setRapper2} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
