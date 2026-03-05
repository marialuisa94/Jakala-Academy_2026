const tables = config.tables
const dataset_dest_name = config.dataset_dest_name

tables.forEach(table => {
    publish(`bronze_${table.name}`, {
            type: "incremental", //manteniamo lo storico in bronze
            tags: ["source_to_bronze", "main_pipeline"],
            schema: dataset_dest_name,
            bigquery: {
                partitionBy: 'DATE(load_timestamp)'
            }
        })
      .preOps(ctx => ``)
      //eventuale logica per cancellare partizioni della giornata se serve
        .query(ctx => `
      SELECT 
        *,
        CURRENT_TIMESTAMP() AS load_timestamp
      FROM ${dataset_dest_name + "." + "raw_" + table.name}
    `)
});