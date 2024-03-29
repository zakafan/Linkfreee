import UserLink from "./UserLink";
import Alert from "../Alert";

export default function UserLinks({ BASE_URL, data }) {
  data.links = data.links.map((link, i) => ({ id: i, ...link }));

  return (
    <>
      {!data.links && <Alert type="info" message="No links found" />}
      {data.links && (
        <div className="flex flex-col items-center w-full">
          {data.links &&
            data.links.map((link) => (
              <UserLink
                BASE_URL={BASE_URL}
                key={link.id}
                link={link}
                username={data.username}
                displayStatsPublic={data.displayStatsPublic}
              />
            ))}
        </div>
      )}
    </>
  );
}
