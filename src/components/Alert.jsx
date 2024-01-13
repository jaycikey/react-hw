import clsx from "clsx";
// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css.alert, css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

// Отримуємо об'єкт відповідності імен класів
console.log(css); //