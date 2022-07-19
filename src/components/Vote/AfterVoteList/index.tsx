import { IcCheck1 } from "../../../asset/icon";
import { BallotTopicData, real } from "../../../core/api/vote";
import { St } from "./style";

interface AfterVoteListProps {
  ballotTopic: { data: BallotTopicData };
  currentIndex: string;
  setIsVoted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPosted: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AfterVoteList(props: AfterVoteListProps) {
  const { ballotTopic, currentIndex, setIsVoted, setIsSuccess, setIsPosted } = props;
  const cancelVote = () => {
    setIsSuccess(false);
    setIsVoted(false);
    setIsPosted(true);
    handlePost();
  };

  const handlePost = () => {
    real.postVote(ballotTopic?.data.ballotTopic._id, ballotTopic?.data.userSelect.ballotItemId);
  };

  return (
    <>
      <St.VoteOptionContainer>
        {ballotTopic &&
          ballotTopic.data.ballotItems.map((element) => {
            return (
              <St.VoteOptionList key={element._id}>
                <St.VotedDescription>
                  <St.IconTextContainer>
                    {currentIndex === element._id && <IcCheck1 />}
                    <St.VoteOptionText isSelected={element._id === currentIndex}>{element.content}</St.VoteOptionText>
                  </St.IconTextContainer>
                  <St.VotedPercent>{element.status}%</St.VotedPercent>
                </St.VotedDescription>
                <St.VotedProgressBarContainer isSelected={element._id === currentIndex}>
                  <St.VotedProgressBar width={element.status} isSelected={element._id === currentIndex} />
                </St.VotedProgressBarContainer>
              </St.VoteOptionList>
            );
          })}
      </St.VoteOptionContainer>
      <St.VoteBtnContainer>
        <St.VoteBtn onClick={cancelVote}>재투표하기</St.VoteBtn>
      </St.VoteBtnContainer>
    </>
  );
}
