import { HiUser } from "react-icons/hi";
// Синтаксис імпорту CSS-модуля
import css from "./UserMenu.module.css";

export const UserMenu = ({name}) => {
    return (
        <div>
            <p>
                <HiUser  className={css.icon} size="24" /> {name}
            </p>
        </div>
    )
}