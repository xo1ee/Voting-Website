using System.Text.Json;

public class MockVotingRepository : IVotingRepository
{
	private readonly List<Position> _positions;

	public MockVotingRepository()
	{
		var json = File.ReadAllText("../data/test-data.json");
		// Console.WriteLine(json);	// uncomment to debug

		_positions = JsonSerializer.Deserialize<List<Position>>(json) ?? new List<Position>();
	}

	public void PrintPositions()
	{
		if (_positions == null || _positions.Count == 0)
			return;

		Console.WriteLine(new string('=', 20));
		Console.WriteLine(String.Format("{0, -20} {1, -30} {2}", "Candidate", "Position", "Votes"));
		Console.WriteLine(new string('-', 60));

		foreach (var pos in _positions)
		{
			foreach (var cand in pos.Candidates)
			{
				Console.WriteLine(String.Format("{0, -20} {1, -30} {2}", cand.Name, pos.Title, cand.Votes));
			}
		}
	}

	public Task<List<Position>> GetPositionsAsync()
	{
		return Task.FromResult(_positions);
	}

	public Task<List<Candidate>> GetCandidatesByPositionAsync(int positionId)
	{
		foreach (var pos in _positions)
		{
			if (pos.Id == positionId)
			{
				return Task.FromResult((List<Candidate>)pos.Candidates);
			}
		}
		return Task.FromResult(new List<Candidate>());
	}

	public Task<Candidate?> GetCandidateAsync(string candidateName)
	{
		foreach (var pos in _positions)
		{
			foreach (var cand in pos.Candidates)
			{
				if (cand.Name == candidateName)
					return Task.FromResult(cand);
			}
		}
		return Task.FromResult<Candidate>(null);
	}

	public Task<Candidate?> GetCandidateAsync(int candidateId)
	{
		foreach (var pos in _positions)
		{
			foreach (var cand in pos.Candidates)
			{
				if (cand.Id == candidateId)
					return Task.FromResult(cand);
			}
		}
		return Task.FromResult<Candidate>(null);
	}

	public Task<int> GetNumVotesAsync(string candidateName)
	{
		var candidateTask = GetCandidateAsync(candidateName);
		candidateTask.Wait();

		var candidate = candidateTask.Result;

		if (candidate == null)
		{
			Console.WriteLine("Candidate not found");
			return Task.FromResult(0);
		}

		return Task.FromResult(candidate.Votes);
	}

	public Task AddVoteAsync(int candidateId)
	{
		var candidateTask = GetCandidateAsync(candidateId);
		candidateTask.Wait();

		var candidate = candidateTask.Result;

		if (candidate != null)
		{
			candidate.Votes++;
		}
		else
		{
			Console.WriteLine("Candidate not found");
		}

		return Task.CompletedTask;
	}
}

public class Position
{
	public int Id { get; set; }
	public string Title { get; set; }
	public ICollection<Candidate> Candidates { get; set; }

	public Position()
	{
		Title = "";
		Candidates = new List<Candidate>();
	}
}

public class Candidate
{
	public int Id { get; set; }
	public string Name { get; set; }
	public int Votes { get; set; }

	public Candidate() { Name = ""; }
}