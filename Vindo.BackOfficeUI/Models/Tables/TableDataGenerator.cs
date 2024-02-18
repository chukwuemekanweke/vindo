using System.Reflection;
using Vindo.BackOfficeUI.Models.Colors;

namespace Vindo.BackOfficeUI.Models.Tables;

public static class TableDataGenerator
{	
	/// <summary>
	/// Generates the Table Data
	/// </summary>
	/// <typeparam name="T"></typeparam>
	/// <param name="objects"></param>
	/// <param name="ColumnTypes">A mapping of the preferred types </param>
	/// <param name="colorMoodSelector"></param>
	/// <returns></returns>
	public static TableData? GenerateTableData<T>(
		IList<T> objects,
		Dictionary<string, CellType>? ColumnTypes,
		Func<T, string, ColorMood?>? colorMoodSelector)
	{
		IList<string> headers = new List<string>();
		IList<List<CellContent>> records = new List<List<CellContent>>();

		if (objects is null || objects.Count == 0)
		{
			return null;
		}

		// Get properties of the first object
		PropertyInfo[] properties = objects[0].GetType().GetProperties();

		// Extract property names as headers
		foreach (var property in properties)
		{
			headers.Add(property.Name);
		}

		// Extract property values as records
		foreach (var obj in objects)
		{
			List<CellContent> record = GenerateCellContents(ColumnTypes, colorMoodSelector, properties, obj);

			records.Add(record);
		}

		return new TableData { Headers = headers, Records = records };
	}

	private static List<CellContent> GenerateCellContents<T>(
		Dictionary<string, CellType>? ColumnTypes,
		Func<T, string, ColorMood?>? colorMoodSelector,
		PropertyInfo[] properties,
		T? obj)
	{
		List<CellContent> record = new List<CellContent>();


		foreach (var property in properties)
		{
			ColorMood? colorMood = null;

			if (colorMoodSelector is not null)
			{
				colorMood = colorMoodSelector(obj, property.Name);
			}

			if (ColumnTypes is null)
			{
				record.Add(
					new CellContent
					{
						CellType = CellType.Text,
						Content = property.GetValue(obj)?.ToString() ?? "",
						ColorMood = colorMood
					}
				);
				continue;
			}

			bool foundCellTypeConfiguation = ColumnTypes.TryGetValue(property.Name, out CellType cellType);
			if (foundCellTypeConfiguation)
			{
				record.Add(
					new CellContent
					{
						CellType = cellType,
						Content = property.GetValue(obj)?.ToString() ?? "",
						ColorMood = colorMood
					}
				);

			}
			else
			{
				record.Add(
					new CellContent
					{
						CellType = CellType.Text,
						Content = property.GetValue(obj)?.ToString() ?? "",
						ColorMood = colorMood
					}
				);
			}

		}

		return record;
	}
}
