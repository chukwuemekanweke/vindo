using System.Reflection;

namespace Vindo.BackOfficeUI.Models.MorrisBarChart;

public sealed class DataPoint
{
	public required string XKey { get; set; }
	public Dictionary<string, object> Values { get; set; }

	public DataPoint()
	{
		Values = new Dictionary<string, object>();
	}

	public static List<DataPoint> ConvertRecordsToDataPoints(IEnumerable<object> records, string xAxisPropertyName)
	{
		return records.Select(record => FromRecord(record, xAxisPropertyName)).ToList();
	}

	public static DataPoint FromRecord(object record, string XKey)
	{
		if(record is null)
		{
			throw new ArgumentNullException(nameof(record));
		}

		PropertyInfo? xAxisProperty = record.GetType()!.GetProperty(XKey);
		if (xAxisProperty == null)
		{
			throw new ArgumentException($"Property '{XKey}' not found in record type.");
		}
		
		DataPoint dataPoint = new DataPoint() 
		{ 
			XKey = xAxisProperty.GetValue(record)?.ToString() ?? throw new InvalidOperationException($"{xAxisProperty} cannot be null")
		};

		PropertyInfo[] properties = record.GetType().GetProperties();
		foreach (PropertyInfo property in properties)
		{
			if (property.Name != XKey)
			{
				dataPoint.Values.Add(property.Name, Convert.ToInt32(property.GetValue(record)));
			}
		}

		return dataPoint;
	}
}
