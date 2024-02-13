namespace Vindo.BackOfficeUI.Models.Colors;

public static class ColorClassGenerator
{		
	public static string GenerateDomClass(ColorTheme theme, ColorMood mood)
	{
		string result = "";

		switch (theme)
		{
			case ColorTheme.Solid:
				result = "bg-" + mood.ToString().ToLower();
				break;
			case ColorTheme.Light:
				result = "bg-" + mood.ToString().ToLower() + "-light";
				break;
			case ColorTheme.GradientDarker:
				result = "bg-gradient-" + mood.ToString().ToLower() + "-dark";
				break;
			case ColorTheme.GradientLight:
				result = "bg-gradient-" + mood.ToString().ToLower();
				break;
		}

		return result;
	}
}
