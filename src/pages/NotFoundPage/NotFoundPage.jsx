import { TiCancel } from "react-icons/ti";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <TiCancel size="50" color="black" />
      <p>The page is not found.</p>
    </div>
  );
};

export default NotFoundPage;
