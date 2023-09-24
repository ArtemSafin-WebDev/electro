import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { MenuSector } from "../SidebarNav";

type NavSubmenuAccordionProps = {
  item: MenuSector;
  onToggle?: (value: boolean) => void;
  parentOpen: boolean;
};

export default function NavSubmenuAccordion({
  item,
  onToggle,
  parentOpen,
}: NavSubmenuAccordionProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (onToggle) onToggle(open);
  }, [open]);

  useEffect(() => {
    if (!parentOpen && open) {
      setOpen(false);
    }
  }, [parentOpen]);

  return (
    <div className={`${styles.accordion} ${open ? styles.active : ""}`}>
      <button
        className={styles.accordionBtn}
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.title}
      </button>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <ul className={styles.list}>
            {item.devices.map((device) => (
              <li className={styles.listItem} key={device.id}>
                <Link className={styles.link} to={device.href}>
                  {device.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
