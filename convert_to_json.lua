package.path = package.path .. ";/usr/local/share/lua/5.1/?.lua"
package.cpath = package.cpath .. ";/usr/local/lib/lua/5.1/?.so"

-- Load the Lua file as a table
local localization = require("en-us")  -- Adjust path as needed

-- Function to serialize Lua tables to JSON
local json = require("dkjson")  -- You can use dkjson or any other Lua JSON library

-- Convert the localization table to JSON
local json_output = json.encode(localization, { indent = true })

-- Write JSON output to a file
local file = io.open("localization.json", "w")  -- Adjust the output path as needed
file:write(json_output)
file:close()

print("Localization data exported to localization.json")
