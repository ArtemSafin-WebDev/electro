import { useState } from "react";
import styles from "./styles.module.scss";
import OkIcon from "@/assets/icons/ok.svg?react";

export default function Scheme() {
  const [selected, setSelected] = useState(false);
  return (
    <div className={styles.scheme}>
      <div className={styles.schemeRow}>
        <div className={styles.schemeLeft}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/machine-scheme.svg"
              alt=""
              className={styles.image}
              useMap="#image-map"
            />
            <div className={styles.imageLayers}>
              <svg
                width="484"
                height="382"
                viewBox="0 0 484 382"
                xmlns="http://www.w3.org/2000/svg"
              >
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setSelected(true);
                  }}
                >
                  <path
                    d="M148.983 201.847L128.575 197.833V106.833H133.258V53.639L148.983 30.2202L189.129 35.5731V63.0066L194.482 65.3484V103.488V174.414L191.471 178.094V193.483L173.071 201.847V205.193L168.052 208.538L158.685 211.215L148.983 208.538V201.847Z"
                    fill="#1764F9"
                    fillOpacity={0}
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.schemeRight}>
          {selected ? (
            <div className={styles.detailInfo}>
              <div className={styles.detailName}>Подшипник 2 х 466880</div>
              <div className={styles.detailSpecs}>
                <div className={styles.specsBlock}>
                  <h3 className={styles.specsBlockTitle}>Характеристики</h3>
                  <ul className={styles.specsList}>
                    <li className={styles.specsListItem}>
                      <div className={styles.specsCard}>
                        радиально-упорный шарикоподшипник
                      </div>
                    </li>
                    <li className={styles.specsListItem}>
                      <div className={styles.specsCard}>одноядерный</div>
                    </li>
                    <li className={styles.specsListItem}>
                      <div className={styles.specsCard}>
                        для спаренного монтажа
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.specsTable}>
                  <table>
                    <tbody>
                      <tr>
                        <th>Производство</th>
                        <td>SKF</td>
                      </tr>
                      <tr>
                        <th>Аномальный параметр</th>
                        <td>Виброскорость + 6,5 м/с(макс. 4,2 м/с)</td>
                      </tr>
                      <tr>
                        <th>Вид ремонта</th>
                        <td>Замена</td>
                      </tr>
                      <tr>
                        <th>Срочность ремонта</th>
                        <td className={styles.warning}>Неотложная</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={styles.available}>
                <div className={styles.availableRow}>
                  <div className={styles.availableContent}>
                    <div className={styles.availableTitle}>Наличие детали</div>
                    <div className={styles.availableInStock}>
                      <OkIcon />
                      Есть на складе
                    </div>
                  </div>
                  <div className={styles.availableImageContainer}>
                    <img
                      src="/images/available.webp"
                      alt=""
                      className={styles.availableImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.chooseText}>
              Выберите узел на мнемосхеме, чтобы узнать состояние
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
