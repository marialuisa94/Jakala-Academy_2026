const dataset_dest_name = "Dataset_Academy2026_Molinaro" ;

const tables = [
    { name: "bronze_trains", update_mode: "full_refresh", keys: ["train_id"] },
    { name: "bronze_stations", update_mode: "full_refresh", keys: ["station_id"] },
    { name: "bronze_departures", update_mode: "full_refresh", keys: ["departure_id"] },
    { name: "silver_departures", update_mode: "full_refresh", keys: ["departure_id"] },
    { name: "gold_top_routes", update_mode: "full_refresh", keys: [] }
];

module.exports = {
    dataset_dest_name,
    tables
};