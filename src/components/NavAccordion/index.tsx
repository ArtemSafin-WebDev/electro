import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import ArrowDown from "@/assets/icons/arrow-down.svg?react";
import NavSubmenuAccordion from "../NavSubmenuAccordion";
import { MenuDepartment } from "../SidebarNav";

type NavAccordionProps = {
  item: MenuDepartment;
};

export default function NavAccordion({ item }: NavAccordionProps) {
  const [open, setOpen] = useState(false);

  const [innerOpen, setInnerOpen] = useState(false);

  useEffect(() => {
    if (!open && innerOpen) {
      setInnerOpen(false);
    }
  }, [innerOpen, open]);
  return (
    <div
      className={`${styles.accordion} ${open ? styles.active : ""} ${
        innerOpen ? styles.dark : ""
      }`}
    >
      <button
        className={`${styles.btn} ${innerOpen ? styles.white : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.title}
        <ArrowDown />
      </button>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <ul className={styles.submenuList}>
            {item.sectors.map((item) => (
              <li className={styles.submenuListItem}>
                <NavSubmenuAccordion
                  item={item}
                  parentOpen={open}
                  onToggle={(value) => {
                    if (value) {
                      setInnerOpen(true);
                    } else {
                      setInnerOpen(false);
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
