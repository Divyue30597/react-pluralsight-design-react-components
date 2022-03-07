import { useState } from "react";

import Speaker from "./Speaker";
import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState(data);

  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakersData.find((rec) => rec.id === id);
    const speakersRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakersData.map((rec) =>
      rec.id === id ? speakersRecUpdated : rec
    );
    setSpeakersData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              // Maybe you noticed that when we created our click event back in our SpeakerFavorite component, we did not have access to the speaker's ID, which, in order to update the correct speaker in our speakers data state, we need. That is the only incoming property into our SpeakerFavorite component was the boolean value Favorite. However, now we are at the component hierarchy level where we are about to call our actual onFavoriteToggle function so we need to know which speaker ID needs its favorite value toggled. We do that by instead of assigning the function onFavoriteToggle to our local function onFavoriteToggle. We instead create a new anonymous function using lambda syntax. That takes no parameters in, then returns a call to onFavoriteToggle, passing in our current speaker.id associated with the instance of the created Speaker component.
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SpeakersList;
