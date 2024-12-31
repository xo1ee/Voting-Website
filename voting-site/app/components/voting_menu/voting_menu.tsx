import './voting_menu.css'

function ChoiceList({
	position = "[Default Position]",
	candidates = ["1", "2", "3"], }) {
	return (
	  <p>
		<label htmlFor="candidates">Choose a {position} candidate:</label>
		<select id="candidates" name="candidates">
			<option value="default">Choose An Option</option>
			{candidates.map((candidate, index) => (
				<option key={"candidate " + index} value={`candidate`}>
					{candidate}
				</option>
			))}
		</select>
	  </p>
	);
}

export default function VotingMenu() {
  const sampleCandidates = ["John Doe", "Jane Doe", "Jannet Doe"];

  // Fix formating. possibly need to make the outside div tag its own css function

  return (
		<div className="voting__menu">
			<p>There are multiple positions you can choose candidates for.</p>
				<ul>
					<li><ChoiceList position="President" candidates={sampleCandidates} /></li>
					<li><ChoiceList position="Vice President" /></li>
				</ul>
		</div>
	);
}