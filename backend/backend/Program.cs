using backend.Model;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers()
    .AddJsonOptions(options =>
        options.JsonSerializerOptions.Converters.Add(
            new JsonStringEnumConverter())); // In OpenAPI (Swagger) the enum item names will be generated (instead of numbers)

builder.Services.AddCors();

Registrator.Register(builder);
builder.Services.AddDbContext<DatabaseContext>();
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// CORS
app.UseCors(builder => builder
    .AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(_ => true)
    .AllowCredentials()
);

app.UseRouting();
app.MapControllers();

// Test database OK
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetService<DatabaseContext>();
    if (context == null)
    {
        Environment.Exit(101);
    }

    context.Database.EnsureDeleted();
    context.Database.EnsureCreated();
    // context.Database.Migrate();
}

app.Run();
