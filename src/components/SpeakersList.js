import Speaker from "./Speaker";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

function SpeakersList({ showSessions }) {
  const {
    data: speakersData,
    updatedRecord,
    requestStatus,
    error,
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>Loading Speaker data failed: {error}</b>
      </div>
    );
  }

  // if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData.map((speaker) => {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                // Maybe you noticed that when we created our click event back in our SpeakerFavorite component, we did not have access to the speaker's ID, which, in order to update the correct speaker in our speakers data state, we need. That is the only incoming property into our SpeakerFavorite component was the boolean value Favorite. However, now we are at the component hierarchy level where we are about to call our actual onFavoriteToggle function so we need to know which speaker ID needs its favorite value toggled. We do that by instead of assigning the function onFavoriteToggle to our local function onFavoriteToggle. We instead create a new anonymous function using lambda syntax. That takes no parameters in, then returns a call to onFavoriteToggle, passing in our current speaker.id associated with the instance of the created Speaker component.
                onFavoriteToggle={() => {
                  updatedRecord({
                    ...speaker,
                    favorite: !speaker.favorite,
                  });
                }}
              />
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
}

export default SpeakersList;
