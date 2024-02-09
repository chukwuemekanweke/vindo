using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text;

namespace Vindo.UI.Shared;

public static class Extensions
{
    public static async Task<IJSObjectReference> ComponentModule<T>(this IJSRuntime js)
    where T : ComponentBase
    {
        var type = typeof(T);
        var sb = new StringBuilder("./");

        sb.Append(type.FullName.Remove(0, type.Assembly.GetName().Name.Length + 1).Replace(".", "/"));
        sb.Append(".razor.js");

        var file = sb.ToString();

        var result = await js.InvokeAsync<IJSObjectReference>("import", file);
        return result;

    }
}
