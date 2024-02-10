namespace Vindo.BackOfficeUI.Models.ApexChart;

public class ChartData<T>
{
    public IList<ApexChartSeriesData<T>> Series { get; set; } = null!;
    public IList<string> XAxis { get; set; } = null!;

}

public class ApexChartSeriesData<T>
{
    public string Name { get; set; } = null!;
    public IList<T> Data { get; set; } = null!;
}
