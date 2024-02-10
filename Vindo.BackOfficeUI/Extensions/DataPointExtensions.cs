using Vindo.BackOfficeUI.Models.MorrisBarChart;

namespace Vindo.BackOfficeUI.Extensions;

public static class DataPointExtensions
{
	public static IEnumerable<Dictionary<string,object>> ToGraphDataPoints(this IEnumerable<DataPoint> dataPoints)
	{
		return dataPoints.Select(dataPoint =>
		{
			var obj = new Dictionary<string, object> { { "XKey", dataPoint.XKey } };
			foreach (var kvp in dataPoint.Values)
			{
				obj[kvp.Key] = kvp.Value;
			}
			return obj;
		});
	}
}
