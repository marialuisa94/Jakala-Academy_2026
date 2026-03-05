const tables = config.tables
const dataset_dest_name = config.dataset_dest_name

tables.forEach(table => {
    publish(`silver_${table.name}`, {
            type: table.update_mode, //qui non manteniamo lo storico ma prendiamo i dati piu recenti
            tags: ["bronze_to_silver", "main_pipeline"],
            schema: dataset_dest_name,
            uniqueKey: table.keys,
            bigquery: {
                partitionBy: 'DATE(load_timestamp)'
            }
        })
        .query(ctx => `
      SELECT * EXCEPT(rn)
      FROM (
        SELECT *,
              ROW_NUMBER() OVER (
                  PARTITION BY ${table.keys.join(", ")}
                  ORDER BY load_timestamp DESC
              ) AS rn
        FROM ${ctx.ref(dataset_dest_name, "bronze_" + table.name)}
      ) 
      WHERE rn = 1
      `)
});