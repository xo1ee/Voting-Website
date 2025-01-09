using System.Text.Json;

public class MockVotingRepository : IVotingRepository
{
	private readonly List<Position> _positions;
	// private readonly List<Candidate> _candidates;

	public MockVotingRepository()
	{
		var json = File.ReadAllText("../data/test-data.json");
		// Console.WriteLine(json);

		try
		{
			_positions = JsonSerializer.Deserialize<List<Position>>(json) ?? new List<Position>(); ;
		}
		catch (JsonException ex)
		{
			Console.WriteLine("Error deserializing JSON: " + ex.Message);
			_positions = new List<Position>();
		}
	}

	public void PrintPositions()
	{
		if (_positions == null || _positions.Count == 0)
			return;

		foreach (var pos in _positions)
		{
			foreach (var cand in pos.Candidates)
			{
				Console.WriteLine("{0} is a {1} candidate with {2} votes.", cand.Name, pos.Title, cand.Votes);
			}
		}
	}

	// Task UpdateVoteAsync(int candidateId) { return new Task; }
}

public class Position
{
	public int Id { get; set; }
	public string Title { get; set; }
	public ICollection<Candidate> Candidates { get; set; }
}

public class Candidate
{
	public int Id { get; set; }
	public string Name { get; set; }
	public int Votes { get; set; }
}