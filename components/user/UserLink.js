import { useState } from "react";

import getIcon from "../Icon";
import colors from "../../config/icons.json";

export default function UserLink({
  BASE_URL,
  link,
  username,
  displayStatsPublic,
}) {
  const [clicks, setClicks] = useState(link.clicks || 0);
  //j'ai ajouté une variable d'état clicked pour stocker si le lien a déjà été cliqué.
  const [clicked, setClicked] = useState(false);
  const DisplayIcon = getIcon(link.icon);

  return (
    
  );
}
