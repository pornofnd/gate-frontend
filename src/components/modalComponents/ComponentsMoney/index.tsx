import { useState } from "react";
import MoneyMenuModal from "./MoneyMenuModal";

export default function ComponentsMoney() {
  const [menuState, useMenuState] = useState<string>("All");
  return (
    <article>
      <MoneyMenuModal useMenuState={useMenuState} menuState={menuState} />
    </article>
  );
}
