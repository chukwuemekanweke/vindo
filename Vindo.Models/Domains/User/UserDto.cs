namespace Vindo.Models.Domains.User;

public class UserDto
{
    public string Id { get; init; } = null!;
    public required string FirstName { get; init; } = null!;
    public required string LastName { get; init; } = null!;
    public required string Email { get; init; } = null!;
    public required string Username { get;init; } = null!;
    public string? ImageUrl { get; init; }
    public bool IsActive { get; init; }
}
