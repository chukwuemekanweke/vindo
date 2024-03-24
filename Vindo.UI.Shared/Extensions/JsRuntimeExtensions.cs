using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text;

namespace Vindo.UI.Shared.Extensions;

public static class JsRuntimeExtensions
{
    public static async Task<IJSObjectReference> ComponentModule<T>(this IJSRuntime js)
    where T : ComponentBase
    {
        var type = typeof(T);
        var sb = new StringBuilder("/");

        string fullName = type.FullName;
        string name = type.Assembly.GetName().Name;

        bool isGenericType = CheckIfTypeIsGeneric(type);
        if (isGenericType)
        {
            fullName = GetClassNameWithoutGenerics(fullName);
        }


        sb.Append(fullName.Remove(0, name.Length + 1).Replace(".", "/"));
        sb.Append(".razor.js");

        var file = sb.ToString();

        if (file.Contains("ProgressBar", StringComparison.OrdinalIgnoreCase))
        {

        }

        var result = await js.InvokeAsync<IJSObjectReference>("import", file);
        return result;

    }

    public static bool CheckIfTypeIsGeneric(Type type)
    {
        if (type.IsGenericType)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public static string GetClassNameWithoutGenerics(string fullName)
    {
        int backtickIndex = fullName.IndexOf('`');
        if (backtickIndex >= 0)
        {
            fullName = fullName.Substring(0, backtickIndex);
        }
        return fullName;
    }
}
