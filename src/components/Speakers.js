import { useState } from "react";

import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default Speakers;
