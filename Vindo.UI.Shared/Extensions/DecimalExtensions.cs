namespace Vindo.UI.Shared.Extensions;

public static class DecimalExtensions
{
	public static string FormatForUI(this decimal value)
	{
		string formattedNumber = value.ToString(value % 1 == 0 ? "N0" : "N2");
		return formattedNumber;
	}
}
