namespace Vindo.BackOfficeUI.Models.ApexChart;

public class ChartData<T>
{
    public required IList<ApexChartSeriesData<T>> Series { get; set; } 
    public required IList<string> XAxis { get; set; } 

}

public class ApexChartSeriesData<T>
{
    public required string Name { get; set; } 
    public required IList<T> Data { get; set; } 
}
