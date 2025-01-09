public interface IVotingRepository
{
	Task<List<Position>> GetPositionsAsync();
	Task<List<Candidate>> GetCandidatesByPositionAsync(int positionId);
	Task<Candidate?> GetCandidateAsync(string candidateName);
	Task<int> GetNumVotesAsync(string candidateName);
	Task AddVoteAsync(int candidateId);
}