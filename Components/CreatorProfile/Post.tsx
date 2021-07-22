// @ts-ignore
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";

interface IProps {
  postType: "twitter" | "instagram";
  postUser: string;
}

const Post: React.FC<IProps> = ({ postType, postUser }) => {
  const renderPost = () => {
    switch (postType) {
      case "instagram":
        return (
          <InstagramEmbed
            url={`https://instagr.am/p/${postUser}/`}
            clientAccessToken={
              process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN as string
            }
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onFailure={() => <h3>Failed to load instagram. Try refreshing.</h3>}
          />
        );
      case "twitter":
        return (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName={postUser}
            options={{ width: "100%" }}
          />
        );
      default:
        return null;
    }
  };

  console.log("token", process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN);

  return <div className="Feed mr-10">{renderPost()}</div>;
};

export default Post;
