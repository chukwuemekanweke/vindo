namespace Vindo.BackOfficeUI.Models.C3Chart;

public class C3BarChart
{
    public required decimal[][] Data { get; set; }
    public required string[] Labels { get; set; }
    public required bool RotateAxis { get; set; } = true;
    public required bool ShowGrid { get; set; } = true;

}
