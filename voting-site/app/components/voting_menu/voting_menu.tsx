import React, { useState } from "react";
import "./voting_menu.css";

function DisplayCandidates({
  position = "Default Position",
  candidates = [],
  selected,
  onChange,
}: {
  position?: string;
  candidates?: string[];
  selected: string;
  onChange: (position: string, value: string) => void;
}) {
  return (
    <p>
      <select
        id={`${position}-candidates`}
        name="candidates"
        value={selected}
        onChange={(e) => onChange(position, e.target.value)}
      >
        <option value="default">Choose An Option</option>
        {candidates.map((candidate, index) => (
          <option key={"candidate " + index} value={candidate}>
            {candidate}
          </option>
        ))}
      </select>
    </p>
  );
}

function DisplayPositions({
  positions = [],
  selectedCandidates = {},
  onSelect,
}: {
  positions?: { position: string; candidates: string[] }[];
  selectedCandidates?: Record<string, string>;
  onSelect: (position: string, value: string) => void;
}) {
  return (
    <ul>
      {positions.map((pos, index) => (
        <li key={"position " + index} value={`position`}>
          <label htmlFor={`${pos.position}-candidates`}>
            Choose a {pos.position} candidate:
          </label>
          <DisplayCandidates
            position={pos.position}
            candidates={pos.candidates}
            selected={selectedCandidates[pos.position] || ""}
            onChange={onSelect}
          ></DisplayCandidates>
        </li>
      ))}
    </ul>
  );
}

export default function VotingMenu({
  positions = [
    {
      position: "[Testing Posittion 1]",
      candidates: ["John Doe", "Jane Doe", "Jannet Doe"],
    },
    {
      position: "[Testing Position 2]",
      candidates: ["Amy Won", "Amy Too", "Amy Free"],
    },
  ],
}: {
  positions?: { position: string; candidates: string[] }[];
}) {
  const [tempVoteCount, setTempVoteCount] = useState(0); // stores total count of votes
  const [selectedCandidates, setSelectedCandidates] = useState<
    Record<string, string>
  >({});

  function HandleSelection(position: string, selected: string) {
    setSelectedCandidates((prevState) => ({
      ...prevState,
      [position]: selected,
    }));
    // console.log(selected + " was selected for the " + position + " position");
  }

  const HandleSubmit = () => {
    // Ensure all positions have a selected candidate
    const allSelected = positions.every(
      (pos) =>
        selectedCandidates[pos.position] &&
        selectedCandidates[pos.position] !== "default"
    );
    if (!allSelected) {
      alert("Please select a candidate for all positions!");
      return;
    }

    // If all selected, increment vote count and log selected candidates
    setTempVoteCount((prev) => prev + 1);
    console.log("Submitted votes:", tempVoteCount);
    positions.map((pos, index) => {
      console.log(
        "index " +
        index +
        " " +
        pos.position +
        " " +
        selectedCandidates[pos.position]
      );
    });
  };

  return (
    <div className="voting__menu">
      <p>There are multiple positions you can choose candidates for.</p>
      <DisplayPositions
        positions={positions}
        selectedCandidates={selectedCandidates}
        onSelect={HandleSelection}
      ></DisplayPositions>

      <button onClick={() => HandleSubmit()}>
        Submit: Vote Count = {tempVoteCount}
      </button>
    </div>
  );
}
