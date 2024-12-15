import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import React from "react";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <ul className="flex gap-2 *:size-10 *:*:block *:*:size-full *:*:text-light-primary *:*:dark:text-dark-primary *:*:*:size-full">
        <li>
          <a href="">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="">
            <Twitter />
          </a>
        </li>
      </ul>
      <ul className="flex flex-col gap-1  *:*:flex *:*:gap-2 *:*:size-full *:*:text-light-primary *:*:dark:text-dark-primary *:*:*:size-full">
      <li>
          <a href="">
            <span><Mail/></span>
            <span>0666578898</span>
          </a>
        </li>
        <li>
          <a href="">
            <span><Phone/></span>
            <span>0666578898</span>
          </a>
        </li>
        <li>
          <a href="">
          <span><Phone/></span>
          <span>0666578898</span>
          </a>
        </li>

      </ul>
    </div>
  );
};
