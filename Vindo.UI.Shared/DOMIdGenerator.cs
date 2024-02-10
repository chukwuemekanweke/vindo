namespace Vindo.UI.Shared;

public static class DOMIdGenerator
{
	public static string GenerateId()
	{
		Guid uniqueReference = Guid.NewGuid();
		return $"{uniqueReference}".Replace("-","");
	}
}
