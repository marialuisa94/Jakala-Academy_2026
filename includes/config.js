const dataset_dest_name = dataform.projectConfig.vars.destination_dataset

const tables = [{
        name: "trains",
        update_mode: "incremental",
        keys: ["train_id"]
    },
    {
        name: "stations",
        update_mode: "incremental",
        keys: ["station_id"]
    },
    {
        name: "departures",
        update_mode: "incremental",
        keys: ["departure_id"]
    }
]


module.exports = {
    dataset_dest_name,
    tables
};