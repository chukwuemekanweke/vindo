namespace Vindo.BackOfficeUI.Utility;

public class ColorGenerator
{
    private static readonly Random random = new Random();

    public static string GetRandomColor()
    {
        const string letters = "0123456789ABCDEF";
        string color = "#";
        for (int i = 0; i < 6; i++)
        {
            color += letters[random.Next(16)];
        }
        return color;
    }
}


