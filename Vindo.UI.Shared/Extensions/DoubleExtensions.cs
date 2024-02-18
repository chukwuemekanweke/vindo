namespace Vindo.UI.Shared.Extensions;

public static class DoubleExtensions
{
	public static string FormatForUI(this double value)
	{
		string formattedNumber = value.ToString(value % 1 == 0 ? "N0" : "N2");
		return formattedNumber;
	}
}
