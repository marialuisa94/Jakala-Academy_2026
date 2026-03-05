const dataset_dest_name = dataform.projectConfig.vars.destination_dataset

const tables = [{
        name: "orders",
        update_mode: "incremental",
        keys: ["order_id"]
    },
    {
        name: "products",
        update_mode: "incremental",
        keys: ["product_id"]
    },
    {
        name: "payments",
        update_mode: "incremental",
        keys: ["order_id"]
    }
]


module.exports = {
    dataset_dest_name,
    tables
};