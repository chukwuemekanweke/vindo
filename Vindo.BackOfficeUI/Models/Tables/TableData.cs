using Vindo.BackOfficeUI.Models.Colors;

namespace Vindo.BackOfficeUI.Models.Tables;

public sealed class TableData
{
	public required IList<string> Headers { get; set; }
	public required IList<List<CellContent>> Records { get; set; }
}

public sealed class CellContent
{
	public string? Content { get; set; }
	public CellType CellType { get; set; }
	public ColorMood? ColorMood { get; set; }
}
