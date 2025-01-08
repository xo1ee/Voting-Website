import Navbar from "../components/navigation_bar/navbar";
import VotingMenu from "../components/voting_menu/voting_menu";

export default function Voting() {
  return (
    <div>
      <Navbar />
      <h1 className="text-5xl font-bold absolute left-1/2 top-[20%] transform -translate-x-1/2 text-center">
        VSA Officer Voting
      </h1>
      <VotingMenu />
    </div>
  );
}
